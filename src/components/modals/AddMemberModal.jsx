import { Avatar, Form, Modal, Select, Spin, Typography } from "antd";
import { collection, doc, getDocs, limit, orderBy, query, updateDoc, where } from "firebase/firestore";
import { debounce } from "lodash";
import React from "react";
import { AppContext } from "../../Context/AppProvider";
import { db } from "../../firebase/config";


function DebounceSelect({ fecthOption, debounceTime = 300,curMembers, ...props }) {
  const [fetching, setFetching] = React.useState(false);
  const [option, setOption] = React.useState([]);
 
  const debounceFetch = React.useMemo(() => {
    const loadOption = (value) => {
      setOption([]);
      setFetching(true);
      fecthOption(value,curMembers).then((newOptions) => {
        setOption(newOptions);
        setFetching(false);
        console.log(newOptions);
      });
    };
    return debounce(loadOption, debounceTime);
  }, [debounceTime, fecthOption,curMembers]);
  React.useEffect(() => {
    return () => {
      // clear when unmount
      setOption([]);
    };
  }, []);

  return (
    <div>
      <Typography.Title level={3}>{props.label}</Typography.Title>
      <Select
        {...props}
        labelInValue
        filterOption={false}
        onSearch={debounceFetch}
        notFoundContent={fetching ? <Spin size="small"></Spin> : null}
      >
        {option.map((item) => (
          <Select.Option key={item.value} value={item.value} title={item.lable}>
            <Avatar src={item.photoURL}>
              {item.photoURL? null:item.label.charAt(0).toUpperCase()}
            </Avatar>
            {`${item.label}`}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
}

async function fecthUserList(search, curMembers) {
    if(!search)
    {
        return []
    }
    
  const q = query(
    collection(db,"users"),
    where("keywords", 'array-contains', search),
    orderBy("displayName"),
    limit(20)
  );
  var documments = [];
  const snapshot = await getDocs(q);
  snapshot.forEach((doc) => {
    documments.push({
      label: doc.data().displayName,
      photoURL: doc.data().photoURL,
      value: doc.data().uid,
    });
  });
  return documments.filter((item) => !curMembers.includes(item.value));
}

export default function AddMemberModal() {
  const [value, setValue] = React.useState([]);
  const { visibleMember, setVisibleMember,roomCurrent } = React.useContext(AppContext);
  const [form] = Form.useForm();
  const handleOk = async() => {
    console.log(form.getFieldValue());
    const uidMember = value.map(item => item.value);
    const newMembers = [...roomCurrent.members,...uidMember];
    const updateRef = doc(db,'rooms',roomCurrent.id);
    await updateDoc(updateRef,{
        members:newMembers
    });
    form.resetFields();
    setVisibleMember(false);
  };
  const handleCancel = () => {
    form.resetFields();
    setVisibleMember(false);
  };
  return (
    <div>
      <Modal visible={visibleMember} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical">
          <DebounceSelect
            mode={"multiple"}
            name={"search-user"}
            label={"Tất cả thành viên"}
            value={value}
            placeholder={"Nhập tên thành viên"}
            fecthOption={fecthUserList}
            onChange={(newValue) => setValue(newValue)}
            style={{ width: "100%"}}
            curMembers={roomCurrent.members}
          ></DebounceSelect>
        </Form>
      </Modal>
    </div>
  );
}

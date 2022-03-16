import { UserAddOutlined } from "@ant-design/icons";
import { Alert, Avatar, Button, Col, Form, Input, Row, Tooltip } from "antd";
import React from "react";
import { AppContext } from "../../../Context/AppProvider";
import { AuthContext } from "../../../Context/AuthProvider";
import { addDocument } from "../../../firebase/service";
import useFireStore from "../../../hooks/useFireStore";
import Mess from "./Mess";
import InputEmoji from "../../UI/InputEmoji";
import {StyleCol1,StyleCol2,StyleCol3,MessContainer} from './ChatWindowstyled'

export default function ChatWindow() {
  const { roomCurrent, members, setVisibleMember } =
    React.useContext(AppContext);
  const {
    user: { photoURL, uid, displayName },
  } = React.useContext(AuthContext);
  const [mess, setMess] = React.useState("");
  const inputRef = React.useRef(null);
  const messageListRef = React.useRef(null);
  const [form] = Form.useForm();
  const submit = () => {
    addDocument("message", {
      content: mess,
      roomId: roomCurrent.id,
      uid,
      displayName,
      photoURL,
    });
    form.resetFields();
    if (inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      });
    }
  };
  const handleChange = (e) => {
    setMess(e.target.value);
  };

  const condition = React.useMemo(() => {
    return {
      field: "roomId",
      operator: "==",
      value: roomCurrent.id,
    };
  }, [roomCurrent.id]);
  const messages = useFireStore("message", condition);
  React.useEffect(() => {
    // scroll to bottom after message changed
    if (messageListRef?.current) {
      messageListRef.current.scrollTop =
        messageListRef.current.scrollHeight + 50;
    }
  }, [messages]);

  return (
    <>
      {roomCurrent.id ? (
        <div>
          <Row>
            <Col span={24}>
              <Row
                justify="space-between"
                style={{ borderBottom: "1px solid black" }}
                align="middle"
              >
                <StyleCol1 span={10}>
                  <h1>{roomCurrent?.name}</h1>
                  <p>{roomCurrent?.description}</p>
                </StyleCol1>
                <StyleCol2 span={13}>
                  <Button
                    size="middle"
                    icon={<UserAddOutlined></UserAddOutlined>}
                    onClick={() => {
                      setVisibleMember(true);
                    }}
                  >
                    Add
                  </Button>
                  <Avatar.Group
                    maxCount={2}
                    size="default"
                    className="avataGroup"
                  >
                    {members.map((member) => (
                      <Tooltip title={member.displayName} key={member.id}>
                        <Avatar src={member.photoURL}>
                          {member.photoURL
                            ? ""
                            : member.displayName?.charAt(0)?.toUpperCase()}
                        </Avatar>
                      </Tooltip>
                    ))}
                  </Avatar.Group>
                </StyleCol2>
              </Row>
            </Col>
            <StyleCol3 span={24}>
              <MessContainer ref={messageListRef}>
                {messages.map((mes) => (
                  <Mess
                    key={mes.id}
                    content={mes.content}
                    photoURL={mes.photoURL}
                    displayName={mes.displayName}
                    createdAt={mes?.createdAt}
                  ></Mess>
                ))}
              </MessContainer>

              <Row>
                <Col span={21}>
                  {/* <Form form={form}>
                    <Form.Item name="message">
                      <Input
                        ref={inputRef}
                        placeholder="Input your messager"
                        autoComplete="off"
                        onPressEnter={()=>submit()}
                        onChange={(e)=>handleChange(e)}
                      >

                      </Input>
                    </Form.Item>
                    </Form> */}
                  <InputEmoji
                    name={"message"}
                    onChange={handleChange}
                    onPressEnter={submit}
                    placeholder="Nhập tin nhắn của bạn.."
                    form={form}
                    ref={inputRef}
                  ></InputEmoji>
                </Col>
                <Col span={3} style={{ textAlign: "right" }}>
                  <Button type="primary" onClick={() => submit()}>
                    Send
                  </Button>
                </Col>
              </Row>
            </StyleCol3>
          </Row>
        </div>
      ) : (
        <Alert
          message="Hãy chọn phòng"
          type="info"
          showIcon
          style={{ margin: 5 }}
          closable
        />
      )}
    </>
  );
}

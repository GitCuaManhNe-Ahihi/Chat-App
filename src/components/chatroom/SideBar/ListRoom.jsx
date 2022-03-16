import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { AppContext } from "../../../Context/AppProvider";
const { Panel } = Collapse;
const PanelStyle = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
      font-size: 20px;
      text-transform: capitalize;
    }
    a {
      display: block;
      text-align: left;
      color: white;
      font-size: 17px;
      padding: 5px 20px;
      &:hover {
        color: red;
      }
    }
    button {
      border: none;
    }
  }
`;
export default function ListRoom() {
   const ctx =React.useContext(AppContext);
   const {setVisible} = ctx;
   const {rooms} = ctx
   const handleClick = (id) => {
            ctx.setId(id);
   };
  
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyle style={{ color: "white" }} header="list room" key="1">
        {
           rooms.map(room=>{
                    return <Typography.Link key={room.id} onClick={()=>handleClick(room.id)}>{room.name}</Typography.Link>
            })
        }
        <Button icon={<PlusSquareOutlined></PlusSquareOutlined>} ghost onClick={()=>setVisible(true)}>
          Add Room
        </Button>
      </PanelStyle>
    </Collapse>
  );
}

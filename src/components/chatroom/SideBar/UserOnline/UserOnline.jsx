import React from "react";
import { Row, Col, Typography, List, Avatar } from "antd";
import styledComponents from "styled-components";
import { AppContext } from "../../../../Context/AppProvider";
const AvartarO = styledComponents(Avatar)`
    &&&{
        position:relative;
        ${(props) =>
          props.isOnline
            ? `&::after
            {
                content:"";
                position: absolute;
                width:10px;
                height:10px;
                background:green;
                bottom:2px;
                right:5;
                border-radius:50%;
            }`
            : ""}
    }
`;
const ListO = styledComponents(List.Item)`
{
    &&&{
        ${(props) => (props.isOnline ? "" : "opacity:0.5")}
    }
}`;
export default function UserOnline() {
  const { allMember } = React.useContext(AppContext);
  return (
    <>
      <Typography.Title level={4} style={{ color: "white", textAlign: "left" }}>
        Người dùng hiện tại
      </Typography.Title>
      <List>
        {allMember.map((user) => {
          return (
            <ListO key={user.id} isOnline={user.status}
              style={{
                border: "none",
                display: "flex",
                alignContent: "center",
                color: "white",
                padding: "5px 10px",
              }}
            >
              <AvartarO src={user.photoURL} isOnline={user.status}>
                {user.photoURL ? "" : user.displayName.charAt(0).toUpperCase()}
              </AvartarO>
              <span
                style={{ flex: "1", textAlign: "left", marginLeft: "20px" }}
              >
                {user.displayName}
              </span>
            </ListO>
          );
        })}
      </List>
    </>
  );
}

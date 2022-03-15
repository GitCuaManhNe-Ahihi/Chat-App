import { Avatar, Button, Col, Row, Typography } from "antd";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { auth } from "../../firebase/config";

export default function UserInfo() {
  const {
    user: { photoURL, displayName },
  } = useContext(AuthContext);
  return (
    <Row justify="space-between">
      <Col span={17}>
        <Row align="middle">
          <Col span={9}>
            {" "}
            <Avatar src={photoURL}>
              {photoURL ? null : displayName?.charAt(0)?.toUpperCase()}
            </Avatar>
          </Col>
          <Col span={15}>
            <Typography.Text
              style={{ color: "white", display: "block", textAlign: "left" }}
            >
              {displayName || "Anymous"}
            </Typography.Text>
          </Col>
        </Row>
      </Col>
      <Col span={7}>
        <Button type="ghost" style={{color:'white'}} onClick={() => auth.signOut()}>
          Logout
        </Button>
      </Col>
    </Row>
  );
}

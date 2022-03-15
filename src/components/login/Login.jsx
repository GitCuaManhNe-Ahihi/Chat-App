import { Button, Col, Row, Typography } from "antd";
import {
    FacebookAuthProvider, getAdditionalUserInfo,
    GoogleAuthProvider, signInWithPopup
} from "firebase/auth";
import React from "react";
import { toast } from "react-toastify";
import { auth } from "../../firebase/config";
import { addDocument, generateKeywords } from "../../firebase/service";
export default function Login() {
  const handleLoginGg = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        if (result) {
          if (getAdditionalUserInfo(result).isNewUser) {
            const {
              user: { displayName, email, photoURL, uid },
            } = result;
            addDocument("users", {
              uid: uid,
              displayName: displayName,
              email: email,
              photoURL: photoURL,
              keywords: generateKeywords(displayName),
            });
          }
          toast.success("Login Success, Hello " + result.user.displayName);
        }
      })
      .catch((error) => {
        toast.error("login fail " + error);
      });
  };
  const handleLoginFB = () => {
    signInWithPopup(auth, new FacebookAuthProvider())
      .then((result) => {
        if (result) {
          if (getAdditionalUserInfo(result).isNewUser) {
            const {
              user: { displayName, email, photoURL, uid },
            } = result;
            addDocument("users", {
              uid: uid,
              displayName: displayName,
              email: email,
              photoURL: photoURL,
              keywords: generateKeywords(displayName),
            });
          }
          toast.success("Login Success, Hello " + result.user.displayName);
        }
      })
      .catch((error) => {
        toast.error("login fail " + error);
      });
  };
  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Typography.Title style={{ textAlgin: "center" }} level={3}>
            App Chat
          </Typography.Title>
          <Button
            style={{ width: "100%", marginBottom: 5 }}
            danger
            type="primary"
            onClick={() => handleLoginGg()}
          >
            Login by Google
          </Button>
          <Button
            style={{ width: "100%" }}
            type="primary"
            onClick={(e) => handleLoginFB()}
          >
            Login by Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}

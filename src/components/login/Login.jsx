
import { Button, Col, Row, Typography } from "antd";
import {
    FacebookAuthProvider, getAdditionalUserInfo,
    GoogleAuthProvider, signInWithPopup
} from "firebase/auth";
import React from "react";
import { db } from "../../firebase/config";
import {doc, updateDoc} from "firebase/firestore";
import { toast } from "react-toastify";
import useFireStoreNoWhere from "../../hooks/useFireStoreNoWhere";
import { auth } from "../../firebase/config";
import { addDocument, generateKeywords } from "../../firebase/service";
export default function Login() {
  const all = useFireStoreNoWhere("users");
  const handleLoginGg = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(async (result) => {
        if (result) {
          if (getAdditionalUserInfo(result).isNewUser) {
            const {
              user: { displayName, email, photoURL, uid },
            } = result;
            addDocument("users", {
              uid: uid,
              displayName: displayName,
              email: email,
              status:true,
              photoURL: photoURL,
              keywords: generateKeywords(displayName),
            });
          }
          else{
            const thisUser = all.find((user) => user.uid === result.user.uid);
            const idcollection = thisUser?.id
            const updateRef = doc(db,'users',idcollection);
            await updateDoc(updateRef,{
                status:true
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
              online:true
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

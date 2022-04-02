import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
import styles from "./Chats.module.css";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";

export const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          projectID: "7c5efb9e-cfc4-455a-95e7-7f39e5813a4a",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formData.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formData, {
              headers: {
                "private-key": "ebf07552-de1c-433f-933f-0fcdaa4e43a6",
              },
            })
            .then(() => {
              setLoading(false);
            })
            .catch((err) => console.log(err));
        });
      });
  }, [user, navigate]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userImage.jpg", { type: "image/jpeg" });
  };

  const logoutHandler = async () => {
    await auth.signOut();
    navigate("/");
  };

  if (!user || loading) return "Loading...";
  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh-50px)"
        projectID="7c5efb9e-cfc4-455a-95e7-7f39e5813a4a"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

"use client";
import Head from "next/head";
import React from "react";
import "../mentors/style.css";

const page = () => {
  return (
    <div>
      <Head>
        <script src="/socket.io/socket.io.js" />
        <script src="https://kit.fontawesome.com/c939d0e917.js"></script>
        <script src="https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"></script>
      </Head>
      <div className="header">
        <div className="logo">
          <div className="header__back">
            <i className="fas fa-angle-left" />
          </div>
          <h3>Video Chat</h3>
        </div>
      </div>
      <div className="main">
        <div className="main__left">
          <div className="videos__group">
            <div id="video-grid"></div>
          </div>
          <div className="options">
            <div className="options__left">
              <div id="stopVideo" className="options__button">
                <i className="fa fa-video-camera" />
              </div>
              <div id="muteButton" className="options__button">
                <i className="fa fa-microphone" />
              </div>
              <div id="showChat" className="options__button">
                <i className="fa fa-comment" />
              </div>
            </div>
            <div className="options__right">
              <div id="inviteButton" className="options__button">
                <i className="fas fa-user-plus" />
              </div>
            </div>
          </div>
        </div>
        <div className="main__right">
          <div className="main__chat_window">
            <div className="messages"></div>
          </div>
          <div className="main__message_container">
            <input
              id="chat_message"
              type="text"
              autoComplete="off"
              placeholder="Type message here..."
            />
            <div id="send" className="options__button">
              <i className="fa fa-plus" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

import React from "react";
import "./chatList.css";
import { Link } from "react-router";

function ChatList() {
  return (
    <div className="chatList">
      <span className="title">Dashboard</span>
      <Link to="/dashboard">Create a new chat</Link>
      <Link to="/">Explore GPT 7.0</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="recentChat">Recent Chats</span>
      <div className="list">
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" width={30} height={30}/>
        <div className="text">
          <span>Upgrade to GPT 7.0</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
}

export default ChatList;

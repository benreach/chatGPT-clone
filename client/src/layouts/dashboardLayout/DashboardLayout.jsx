import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import "./dashboardLayout.css";
import { useAuth } from "@clerk/clerk-react";
import ChatList from "../../components/chatList/ChatList";

function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(true);

  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, navigate, userId]);

  if (!isLoaded) return "Loading...";
  return (
    <div className="dashboardLayout">
      <div className="wrapper">
        <img src="/menu.png" alt="" width={30} height={30} onClick={()=>setIsOpen(prev=>!prev)}/>
        <div className="menu" style={isOpen? {display:"block"}: {display:"none", position:"sticky", top:0}}>
          <ChatList />
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;

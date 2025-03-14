import React from "react";
import "./dashboardPage.css";
import { Link } from "react-router";

function DashboardPage() {
  return (
    <div className="dashboardPage">
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="" width={100} height={100} />
          <h1>GPT 7.0</h1>
        </div>
        <div className="options">
          <Link to="/dashboard/chats/:id" className="option">
            <img src="/chat.png" alt="" width={30} height={30} />
            <span>Create a New Chat</span>
          </Link>
          <Link to="/dashboard/chats/:id" className="option">
            <img src="/image.png" alt="" width={30} height={30} />
            <span>Analyze Image</span>
          </Link>
          <Link to="/" className="option">
            <img src="/bot.png" alt="" width={30} height={30} />
            <span>Help me with my code</span>
          </Link>
        </div>
      </div>
      <div className="formContainers">
        <form>
          <label htmlFor="file-input">
            <img src="/attachment.png" alt="" width={20} height={20}/>
          </label>
          <input type="file" id="file-input" hidden/>
          <input type="text" placeholder="Ask me anything..." />
          <button>
            <img src="/arrow.png" alt="" width={20} height={20}/>
          </button>
        </form>
      </div>
    </div>
  );
}

export default DashboardPage;

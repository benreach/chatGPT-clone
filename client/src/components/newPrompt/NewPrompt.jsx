import React from "react";
import "./newPrompt.css";

function NewPrompt() {
  return (
    <div className="formContainer">
      <form>
        <label htmlFor="file-input">
          <img src="/attachment.png" alt="" width={20} height={20} />
        </label>
        <input type="file" id="file-input" hidden />
        <input type="text" placeholder="Ask me anything..." />
        <button>
          <img src="/arrow.png" alt="" width={20} height={20} />
        </button>
      </form>
    </div>
  );
}

export default NewPrompt;

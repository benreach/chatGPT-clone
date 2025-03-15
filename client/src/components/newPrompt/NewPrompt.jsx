import React, { useEffect, useRef } from "react";
import "./newPrompt.css";
import Upload from "../upload/Upload";


function NewPrompt() {
     const [img, setImg] = React.useState({
        isLoading: false,
        error: "",
        dbData: {},
      });
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      <div ref={endRef} />
      <div className="formContainer">
        <form>
          <Upload setImg={setImg} />
          <input type="file" id="file-input" multiple={false} hidden />
          <input type="text" placeholder="Ask me anything..." />
          <button>
            <img src="/arrow.png" alt="" width={20} height={20} />
          </button>
        </form>
      </div>
    </>
  );
}

export default NewPrompt;

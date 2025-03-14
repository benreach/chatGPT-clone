import React, { useEffect, useRef } from 'react'
import "./chatPage.css"
import NewPrompt from '../../components/newPrompt/NewPrompt';

function ChatPage() {

  const endRef = useRef();

  useEffect(()=> {
    endRef.current.scrollIntoView({behavior: "smooth"});
  },[])
  return (
    <div className='chatPage'>
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test message from AI</div>
          <div className="message user">Generate stunning palettes with Adobe's Color Wheel
          Use the Color Wheel to create harmonious colors that make a palette. Choose your base color, then select from a variety of color harmonies like analogous, triadic, complementary, and more to create beautiful designs.</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Generate stunning palettes with Adobe's Color Wheel
          Use the Color Wheel to create harmonious colors that make a palette. Choose your base color, then select from a variety of color harmonies like analogous, triadic, complementary, and more to create beautiful designs.</div>
          <div className="message">Test message from AI</div>
          <div className="message user">Test message from user</div>
          <NewPrompt/>
          <div ref={endRef}/>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
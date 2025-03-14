import React, { useState } from "react";
import "./homepage.css";
import Button from "../../components/button/Button";
import { Link } from "react-router";
import { TypeAnimation } from "react-type-animation";

function Homepage() {

  const [typingSatus,setTypingStatus] = useState('Human 1');

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>GPT 7.0</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>Lorem ipsum dolor sit, amet...</h3>
        <Link to="/dashboard">
          <Button className="homePageButton" text="Get Started" />
        </Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="./bot.png" alt="" className="bot" />
          <div className="chat">
            <img src={typingSatus === "human1"? "/human1.jpeg":typingSatus==="human2"?"/human2.jpeg":"/bot.png"} alt=""  width={20} height={20}/>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "We produce food for Mice",
                1000, ()=>{
                  setTypingStatus("bot");
                },
                "We produce food for Hamsters",
                1000,
                ()=>{
                  setTypingStatus("human1")},
                "We produce food for Guinea Pigs",
                1000,
                ()=>{
                  setTypingStatus("bot")},
                "We produce food for Chinchillas",
                1000,
                ()=>{
                  setTypingStatus("human2")},
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1.5rem", display: "inline-block" }}
              repeat={Infinity}
              className="typeAnimation"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

import React from "react";
import "./style.css";
import VideoBackground from "../VideoBackground";

function Wrapper(props) {
  return (
    <div>
      <main className="wrapper" {...props} />
      <VideoBackground />
    </div>);
}

export default Wrapper;

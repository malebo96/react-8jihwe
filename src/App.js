import React from "react";
import "./style.css";
import React, { useState } from "react";
import CurrentLocation from "./currentLocation";

export default function App() {
  return (
    <div  style={{backgroundImage:`url("https://www.pixelstalk.net/wp-content/uploads/2016/07/Weather-Photo-Download-Free.jpg")`, backgroundRepeat: "no-repeat"}}>
     
      <CurrentLocation/>
   
    </div>
  );
}

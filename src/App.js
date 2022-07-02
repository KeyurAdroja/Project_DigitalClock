import React, { useState } from "react";
import "./App.css";

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [cTime, updatedTime] = useState(time);

  const changetime = () => {
    let time = new Date().toLocaleTimeString();
    updatedTime(time);
  };
  
  setInterval(changetime, 1000);

  return (
    <div className="App">
      <hr />

      <h1>{cTime}</h1>
    </div>
  );
};

export default App;

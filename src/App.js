import React, { useState } from "react";
import "./App.css";

const App = () => {
  const date = new Date();
  const hour = date.getHours() * 60 * 60;
  const minutes = date.getMinutes() * 60;
  const seconds = date.getSeconds();

  const totaltime = hour + minutes + seconds;
  const prctime = (totaltime / 86400) * 100;
  const getTime = Math.floor(prctime * 100) / 100;

  const [currentTime, setCurrentTime] = useState(getTime);

  const getcurrentTime = () => {
    let date = new Date();
    let hour = date.getHours() * 60 * 60;
    let minutes = date.getMinutes() * 60;
    let seconds = date.getSeconds();
    let totaltime = hour + minutes + seconds;
    let prctime = (totaltime / 86400) * 100;
    let getTimeNew = Math.floor(prctime * 100) / 100;
    setCurrentTime(getTimeNew);
  };

  setInterval(getcurrentTime, 100);

  return (
    <div className="container">
      <h1>{currentTime + "%"}</h1>
      <h2>You just can't beat the person who never gives up.</h2>
      <h3>-Ankit Tyagi</h3>
    </div>
  );
};
export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Taskbar from "./homepage/Taskbar";
import Video from "./homepage/video";
import BD from "./homepage/BD";

function App() {
  return (
    <div className="App">
      <Taskbar />
      <Video />
      <BD />
    </div>
    //test
  );
}

export default App;

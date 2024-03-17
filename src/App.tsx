import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Taskbar from "./homepage/Taskbar";
import Video from "./homepage/video";
import BD from "./homepage/BD";
import Footer from "./homepage/Footer";

function App() {
  return (
    <div className="App">
      <Taskbar />
      <Video />
      <BD />
      <Footer />
    </div>
  );
}

export default App;

/** @format */

import "./App.css";
import Taskbar from "./homepage/Taskbar";
import Video from "./homepage/video";
import BD from "./homepage/BD";
import Engagement from "./homepage/Engagement";
import Footer from "./homepage/footer";

function App(): JSX.Element {
  return (
    <div className="App">
      <Taskbar />
      <Video />
      <BD />
      <Engagement />
      <Footer />
    </div>
    //test
  );
}

export default App;

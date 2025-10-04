import "./App.css";
import Taskbar from "./homepage/Taskbar";
import Video from "./homepage/video";
import BD from "./homepage/BD";
import Footer from "./homepage/footer";

function App(): JSX.Element {
  return (
    <div className="App">
      <Taskbar />
      <Video />
      <BD />
      <Footer />
    </div>
    //test
  );
}

export default App;

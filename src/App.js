import "./App.css";

import EagleImg from "./imgs/5.jpg";
import Img2 from "./imgs/bgimg.jpg";
import DisplayScreen from "./components/DisplayScreen";
function App() {
  return (
    <>
      <DisplayScreen imagess={EagleImg} images3={Img2} />
    </>
  );
}

export default App;

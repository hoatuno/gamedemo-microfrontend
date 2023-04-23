import "./App.css";
import Birds from "./components/Birds";
import Bricks from "./components/Bricks";
import Clouds from "./components/Clouds";
import Mario from "./components/Mario";
import Obstacles from "./components/Obstacles";
import Sun from "./components/Sun";
import KeyMessage from "./components/KeyMessage";
import LoadingScreen from "./components/LoadingScreen";

// redux
import { useSelector } from "react-redux";
import Score from "./components/Score";
import MobileControls from "./components/MobileControls";
import Title from "./components/Title";

function App() {
  const isPlay = useSelector((state) => state.engine.play);
  const isLoading = useSelector((state) => state.engine.loadingScreen);
  return (
    <div className="center-box">
      <div className="block-mario">
        {isLoading && <LoadingScreen />}
        <div className="App-mario">
          <Title />
          {!isPlay && <KeyMessage />}
          <Bricks />
          <Mario />
          <Sun />
          <Clouds />
          <Birds />
          <Obstacles />
          <Score />
        </div>
        <MobileControls />
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./LoadingScreen.css";
import { setLoadingScreen } from "../redux/engineSlice";
import { useDispatch } from "react-redux";
// import { baseConfig } from "../config";
import MarioCharacter from "../assets/mario-run.gif";
// const MarioCharacter = baseConfig.resolvePath("mario-run.gif");
const LoadingScreen = () => {
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 5000);
  }, []);

  return (
    <div className="loading-screen-container">
      <img src={MarioCharacter} alt="" className="loading-mario" />
      {!isReady && <h1 className="loading-title">Loading...</h1>}
      {isReady && (
        <button
          className="enter-button"
          onClick={() => dispatch(setLoadingScreen(false))}
        >
          ENTER
        </button>
      )}
    </div>
  );
};
export default LoadingScreen;

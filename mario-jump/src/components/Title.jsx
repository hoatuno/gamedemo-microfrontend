import "./Title.css";
// import { baseConfig } from "../config";

// assets
// const Mario = baseConfig.resolvePath("mario.png");
import Mario from "../assets/mario.png";

const Title = () => {
  return (
    <div className="title-container">
      <img src={Mario} alt="" className="mario-logo" />
      <h1 className="title">Mario Jump</h1>
    </div>
  );
};
export default Title;

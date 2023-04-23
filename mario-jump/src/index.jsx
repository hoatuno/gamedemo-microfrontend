// index.jsx
import Game from "./indexGame";
import { declarePiece } from "piepiece-cli";
declarePiece({
  name: "mario-jump",
  component: Game,
  framework: "react",
});

const MarioJump = () => {
  return <marito-jump />;
};
export default MarioJump;

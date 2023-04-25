import App from "./App";
import { declarePiece } from "piepiece-cli";

declarePiece({
  name: "ant-react",
  component: App,
  framework: "react",
});
const PieceReact = () => <ant-react />;

export default PieceReact;

//index.jsx
import App from "./App.vue";
import { declarePiece } from "piepiece-cli";
import { h } from "vue";
import "./assets/scss/font.scss";
declarePiece({
  name: "vue-2048",
  component: App,
  framework: "vue",
});

const Vue2048 = h(
  "vue-2048" // type
);
export default Vue2048;

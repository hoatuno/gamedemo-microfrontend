import { createApp } from "vue";
import Vue2048 from "./index.jsx";
import App from "./App.vue";
// import "./assets/scss/style.scss";
// import "./assets/scss/main.scss";
console.log("Vue2048", Vue2048);
console.log("App", App);
createApp(Vue2048).mount("#app");

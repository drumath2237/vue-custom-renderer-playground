// import { render, showdownNodeTree } from "./nodeOps";

// function main() {
//   const div = document.getElementById("app");
//   if (!(div instanceof HTMLDivElement)) {
//     return;
//   }

//   const root = render();
//   console.log("root", root);

//   div.textContent = showdownNodeTree({ node: root });
// }

// main();

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

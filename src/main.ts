import "./style.css";

import { render } from "./nodeOps";

function main() {
  const div = document.getElementById("app");
  if (!(div instanceof HTMLDivElement)) {
    return;
  }

  div.textContent = "Hello";

  render();
}

main();

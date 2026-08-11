import "./style.css";

import { a } from "./nodeOps";

function main() {
  const div = document.getElementById("app");
  if (!(div instanceof HTMLDivElement)) {
    return;
  }

  div.textContent = "Hello";

  a();
}

main();

import "./style.css";

function main() {
  const div = document.getElementById("app");
  if (!(div instanceof HTMLDivElement)) {
    return;
  }

  div.textContent = "Hello";
}

main();

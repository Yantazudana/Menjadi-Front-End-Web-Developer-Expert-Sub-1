import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import "./data.js";

const buttonElement = document.querySelector("#drawer");
const navElement = document.querySelector("#navbar");
const bodyElement = document.querySelector("body");

buttonElement.addEventListener("click", (event) => {
  navElement.classList.toggle("open");
  event.stopPropagation();
});

bodyElement.addEventListener("click", (event) => {
  navElement.classList.remove("open");
  event.stopPropagation();
});

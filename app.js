const switchButton = document.querySelector(".dn-switch");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const title = document.querySelector(".heading");
const theBody = document.querySelector("body");
const sunIcon = document.querySelector(".sun-above");
const mooonIcon = document.querySelector(".moon-above");
const cursor = document.getElementById("cursor");

dark.addEventListener("click", function () {
  title.classList.add("heading-dark");
  title.innerHTML = "Good Night";
  theBody.classList.add("body-dark");
  dark.classList.add("light-to-dark");
  mooonIcon.classList.add("moon-dark");
  sunIcon.classList.add("sun-dark");
  cursor.classList.add("cursor-dark");
});

light.addEventListener("click", function () {
  title.classList.remove("heading-dark");
  title.innerHTML = "Good Day";
  theBody.classList.remove("body-dark");
  dark.classList.remove("light-to-dark");
  mooonIcon.classList.remove("moon-dark");
  sunIcon.classList.remove("sun-dark");
  cursor.classList.remove("cursor-dark");
});

/// Fun

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

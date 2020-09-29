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

/// Zezanje

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

function getDateTime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  if (month.toString().length == 1) {
    month = "0" + month;
  }
  if (day.toString().length == 1) {
    day = "0" + day;
  }
  if (hour.toString().length == 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length == 1) {
    minute = "0" + minute;
  }
  if (second.toString().length == 1) {
    second = "0" + second;
  }
  var dateTime =
    year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
  return dateTime;
}

// example usage: realtime clock
setInterval(function () {
  currentTime = getDateTime();
  document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);

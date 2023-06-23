const clock = document.querySelector("#clock h1");
const btn = document.querySelector("#clock i");
const CHANGED_KEY = "changed";
let intervalId;

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  if (JSON.parse(localStorage.getItem(CHANGED_KEY))) {
    clock.innerText = new Date().toLocaleTimeString();
  } else {
    clock.innerText = `${hours}:${minutes}:${seconds}`;
  }
}

btn.addEventListener("click", () => {
  const key = !JSON.parse(localStorage.getItem(CHANGED_KEY));
  localStorage.setItem(CHANGED_KEY, key);
  clearInterval(intervalId);
  getClock();
  intervalId = setInterval(getClock, 1000);
});

getClock();
setInterval(getClock, 1000);

const counter = document.querySelector(".counter-notification");
const stateNotification = document.querySelectorAll(".state-notification");
const infoBlock = document.querySelector(".block-info");
const allNotification = document.querySelector(".all-notification");
const user = document.querySelectorAll(".user-notification");
counter.innerText = `${user.length}`;
let counterNotification = parseInt(counter.textContent);
let counterElement = 0;

allNotification.addEventListener("click", () => {
  user.forEach((element, index) => {
    if (element.classList.contains("not-mark")) {
      if (element.classList.contains("info-block")) {
        infoBlock.classList.remove("inactive");
      }
      element.classList.remove("not-mark");
      stateNotification[index].classList.remove("state-notification");
    }
    counterNotification = 0;
  });
  counter.innerText = `${counterNotification}`;
});

user.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("not-mark")) {
      if (element.classList.contains("info-block")) {
        infoBlock.classList.remove("inactive");
      }
      stateNotification[index].classList.remove("state-notification");
      element.classList.remove("not-mark");
      counterElement++;
      counter.innerText = `${counterNotification - counterElement}`;
    }
  });
});

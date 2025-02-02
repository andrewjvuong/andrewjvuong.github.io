"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 9;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});
noButton.addEventListener("mouseover", function () {
    if (noCount === MAX_IMAGES) {
        noButton.style.visibility = "hidden";
    }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImageYes("yes");
}

function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.3;
    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Pookie please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry...",
    ":((((((",
    ":(",
    ">>>:(",
    "THATS IT MOVE YOUR CURSOR AWAY FROM THE BUTTON AND BACK WATCH"
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `catimg/cat-${image}.jpg`;
}
function changeImageYes(image) {
    catImg.src = `catimg/cat-${image}.gif`;
}

const button = document.getElementById('btn');

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
  button.style.left = `${Math.ceil(Math.random() * 90)}%`;
  button.style.top = `${Math.ceil(Math.random() * 90)}%`;
}

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const Text = document.getElementById("text");
const Img = document.getElementById("image");
const btnContainer = document.getElementById("btn-container");

yesBtn.addEventListener("click", () => {
  Text.innerHTML = "Love you too <3";
  Img.src =
    "https://i.pinimg.com/originals/17/57/6d/17576d138bcc88f6d4385d2d02c4eebd.gif";
  btnContainer.style.display = "none";
});

noBtn.addEventListener("click", () => {
  let randomX = Math.floor(Math.random() * 100);
  let randomY = Math.floor(Math.random() * 100);

  if (randomX > 90) {
    randomX = Math.floor(Math.random() * 100);
  }
  if (randomY > 90) {
    randomY = Math.floor(Math.random() * 100);
  }

  noBtn.style.position = "absolute";
  noBtn.style.top = randomY + "%";
  noBtn.style.left = randomX + "%";
});

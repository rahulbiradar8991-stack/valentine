// Floating hearts generator (low frequency)
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random() * 10) + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}, 1500);


// Button actions
function celebrate(choice) {
  document.getElementById("mainContent").classList.add("hidden");
  document.getElementById("celebration").classList.remove("hidden");

  const img = document.getElementById("resultImage");

  if (choice === "yes") {
    img.src = "image1.jpg";
  } else {
    img.src = "image2.jpg";
  }

  startConfetti();
}


// Simple Confetti
function startConfetti() {
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("heart");
    confetti.innerText = "💜";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 6000);
  }
}

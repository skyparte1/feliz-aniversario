const cards = document.querySelectorAll(".card");
const modals = document.querySelectorAll(".modal");
const closes = document.querySelectorAll(".close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const modalId = card.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
    spawnModalHearts(modal);
    burstEmoji(event.clientX, event.clientY);
  });
});

closes.forEach(close => {
  close.addEventListener("click", () => {
    close.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});


const particlesContainer = document.getElementById("particles");
const colors = ["#ffd6e7", "#b0c9ec", "#e8c4d0", "#d4b8e8", "#ffeef5"];
const particleImages = ["imgs/lugia.png", "imgs/lugiashiny.png"];

for (let i = 0; i < 30; i++) {
  const useImage = Math.random() < 0.4; 
  const p = useImage ? document.createElement("img") : document.createElement("div");
  p.classList.add("particle");

  const size = Math.random() * 14 + 5;
  p.style.width = size + "px";
  p.style.height = size + "px";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = (Math.random() * 14 + 10) + "s";
  p.style.animationDelay = (Math.random() * 12) + "s";

  if (useImage) {
    p.src = particleImages[Math.floor(Math.random() * particleImages.length)];
    p.style.width = size + "px";
     p.style.height = size + "px";
  } else {
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.borderRadius = "50%";
  }

  particlesContainer.appendChild(p);
}

const heartsContainer = document.getElementById("floatingHearts");
const heartEmojis = ["💕", "💗", "💖", "✨", "🌸", "💫", "🎀"];

function createFloatingHeart() {
  const h = document.createElement("div");
  h.classList.add("heart-float");
  h.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  h.style.left = Math.random() * 100 + "vw";
  const duration = Math.random() * 8 + 7;
  h.style.animationDuration = duration + "s";
  h.style.animationDelay = "0s";
  h.style.fontSize = (Math.random() * 1 + 0.8) + "rem";
  heartsContainer.appendChild(h);

  setTimeout(() => h.remove(), duration * 1000);
}
setInterval(createFloatingHeart, 900);
for (let i = 0; i < 6; i++) {
  setTimeout(createFloatingHeart, i * 400);
}

function spawnModalHearts(modal) {
  const container = modal.querySelector(".modal-hearts");
  if (!container) return;
  container.innerHTML = "";

  for (let i = 0; i < 8; i++) {
    const h = document.createElement("span");
    h.classList.add("modal-heart");
    h.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    h.style.left = (10 + Math.random() * 80) + "%";
    h.style.bottom = (5 + Math.random() * 20) + "%";
    h.style.animationDelay = (Math.random() * 2) + "s";
    h.style.animationDuration = (2 + Math.random() * 2) + "s";
    container.appendChild(h);
  }
}

function burstEmoji(x, y) {
  const burst = ["🌸", "💖", "✨", "🎉", "💕", "⭐"];
  const el = document.createElement("div");
  el.classList.add("click-burst");
  el.textContent = burst[Math.floor(Math.random() * burst.length)];
  el.style.left = x + "px";
  el.style.top  = y + "px";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 700);
}

document.addEventListener("click", (e) => {
  const isCard = e.target.closest(".card");
  if (!isCard) {
    burstEmoji(e.clientX, e.clientY);
  }
});
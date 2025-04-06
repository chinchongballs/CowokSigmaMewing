const reasons = [
  "You're actually mad cute 😳",
  "You’re funny in a lowkey way",
  "You care about stuff more than you show",
  "You're the realest out here",
  "You’re mad easy to talk to",
  "Your laugh? Literally serotonin",
  "You match my weird in the best way",
  "You're lowkey my comfort person",
  "You're unexpectedly deep sometimes",
  "You just got *that* vibe idk"
];

const list = document.getElementById("reasons-list");
reasons.forEach(reason => {
  const li = document.createElement("li");
  li.textContent = reason;
  list.appendChild(li);
});

// Bouncey Skibidi Logic
const imageArea = document.getElementById("image-area");
const maxImages = 8;
let currentImages = 0;

function createBouncingImage() {
  if (currentImages >= maxImages) return;

  const img = document.createElement("img");
  img.src = "skibidi.jpeg";
  img.style.width = "80px";
  img.style.height = "80px";
  img.style.position = "absolute";

  let x = Math.random() * (window.innerWidth - 80);
  let y = Math.random() * (window.innerHeight - 80);
  let dx = (Math.random() * 4 + 2) * (Math.random() < 0.5 ? 1 : -1);
  let dy = (Math.random() * 4 + 2) * (Math.random() < 0.5 ? 1 : -1);

  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  imageArea.appendChild(img);
  currentImages++;

  function animate() {
    x += dx;
    y += dy;

    if (x <= 0 || x >= window.innerWidth - 120) dx = -dx;
    if (y <= 0 || y >= window.innerHeight - 120) dy = -dy;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    requestAnimationFrame(animate);
  }

  animate();
}

const interval = setInterval(() => {
  if (currentImages < maxImages) {
    createBouncingImage();
  } else {
    clearInterval(interval);
  }
}, 1000);

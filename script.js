// 💌 Your custom reasons
const reasons = [
  "You're effortlessly funny 💀",
  "You always make dry convos feel alive 😭",
  "Your vibes are chaotic but comforting",
  "You understand more than you let on",
  "You make simple stuff feel fun",
  "You're kinda smart ngl 🤨",
  "You're not like the others fr 😤",
  "You got that lowkey main character energy",
  "You’re honest. Like brutally. And I respect that.",
  "You made me write this 🤡"
];

const listElement = document.getElementById("reasons-list");

reasons.forEach(reason => {
  const li = document.createElement("li");
  li.textContent = reason;
  listElement.appendChild(li);
});

// 🧼 Bouncing image logic
const MAX_IMAGES = 8;
const imgSrc = "skibidi.jpeg"; // use your own image
const imgSize = 150;

const container = document.getElementById("image-area");
const bouncingImages = [];

function createBouncingImage(x = 100, y = 100) {
  if (bouncingImages.length >= MAX_IMAGES) return;

  const img = document.createElement("img");
  img.src = imgSrc;
  img.style.width = imgSize + "px";
  img.style.height = imgSize + "px";
  img.style.position = "absolute";
  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.zIndex = 10;
  container.appendChild(img);

  const direction = {
    dx: Math.random() > 0.5 ? 2 : -2,
    dy: Math.random() > 0.5 ? 2 : -2
  };

  const instance = { img, x, y, ...direction };
  bouncingImages.push(instance);
}

function update() {
  bouncingImages.forEach((item) => {
    item.x += item.dx;
    item.y += item.dy;

    if (item.x <= 0 || item.x + imgSize >= window.innerWidth) {
      item.dx *= -1;
      if (bouncingImages.length < MAX_IMAGES) {
        createBouncingImage(item.x, item.y);
      }
    }

    if (item.y <= 0 || item.y + imgSize >= window.innerHeight) {
      item.dy *= -1;
      if (bouncingImages.length < MAX_IMAGES) {
        createBouncingImage(item.x, item.y);
      }
    }

    item.img.style.left = item.x + "px";
    item.img.style.top = item.y + "px";
  });
}

createBouncingImage();
setInterval(update, 10);

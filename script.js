const reasons = [
  "Youre Cute.",
  "You get my weird jokes.",
  "Youre Cute.",
  "You somehow always know what to say.",
  "Youre Cute.",
  "You’re chill and lowkey nice.",
  "Youre Cute.",
  "Even when you’re quiet, it’s comforting.",
  "Youre Cute.",
  "Youre Cute."
];

const list = document.getElementById("reasons-list");
reasons.forEach(text => {
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
});

const imageArea = document.getElementById("image-area");
let images = [];
let maxImages = 6;

function createImage() {
  if (images.length >= maxImages) return;
  const img = document.createElement("img");
  img.src = "skibidi.jpeg"; // Make sure this exists
  img.className = "bouncing-image";

  let posX = Math.random() * (window.innerWidth - 80);
  let posY = Math.random() * (window.innerHeight - 80);
  let velX = 2 * (Math.random() < 0.5 ? -1 : 1);
  let velY = 2 * (Math.random() < 0.5 ? -1 : 1);

  img.style.left = `${posX}px`;
  img.style.top = `${posY}px`;

  imageArea.appendChild(img);
  images.push({ img, posX, posY, velX, velY });
}

function animate() {
  images.forEach(obj => {
    obj.posX += obj.velX;
    obj.posY += obj.velY;

    if (obj.posX <= 0 || obj.posX >= window.innerWidth - 80) obj.velX *= -1;
    if (obj.posY <= 0 || obj.posY >= window.innerHeight - 80) obj.velY *= -1;

    obj.img.style.left = `${obj.posX}px`;
    obj.img.style.top = `${obj.posY}px`;
  });
  requestAnimationFrame(animate);
}

setInterval(createImage, 1500);
animate();


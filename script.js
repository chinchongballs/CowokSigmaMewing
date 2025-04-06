const imageArea = document.getElementById("image-area");
const imgSrc = "skibidi.jpeg"; // make sure this image is in the same folder
const images = [];
const maxImages = 8;

for (let i = 0; i < maxImages; i++) {
  const img = document.createElement("img");
  img.src = imgSrc;
  img.classList.add("bouncing");
  img.style.left = `${Math.random() * window.innerWidth}px`;
  img.style.top = `${Math.random() * window.innerHeight}px`;
  imageArea.appendChild(img);

  images.push({
    el: img,
    dx: (Math.random() < 0.5 ? 1 : -1) * (1 + Math.random() * 2),
    dy: (Math.random() < 0.5 ? 1 : -1) * (1 + Math.random() * 2)
  });
}

function animate() {
  images.forEach(obj => {
    let rect = obj.el.getBoundingClientRect();

    let x = rect.left + obj.dx;
    let y = rect.top + obj.dy;

    if (x <= 0 || x + rect.width >= window.innerWidth) obj.dx *= -1;
    if (y <= 0 || y + rect.height >= window.innerHeight) obj.dy *= -1;

    obj.el.style.left = `${x}px`;
    obj.el.style.top = `${y}px`;
  });

  requestAnimationFrame(animate);
}

animate();

const reasons = [
  "You're funny without trying too hard.",
  "You make things feel lighter just by being there.",
  "You get my weird jokes.",
  "Talking to you feels easy.",
  "You actually listen, like for real.",
  "You're just... different in a good way.",
  "You make boring days less boring.",
  "I don't need a reason, I just do.",
  "You feel like comfort.",
  "You're lowkey cool and you don't even try."
];

const list = document.getElementById("reasons-list");

reasons.forEach(reason => {
  const li = document.createElement("li");
  li.textContent = reason;
  list.appendChild(li);
});

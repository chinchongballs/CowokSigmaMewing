const reasons = [
  "You're fun to talk to, even about random stuff.",
  "You laugh at things I didn't expect.",
  "You're cool without acting like it.",
  "Conversations with you never feel forced.",
  "You're smart but not annoying about it.",
  "You’ve got that chill energy I like.",
  "You somehow make boring stuff better.",
  "You say real things, not just surface talk.",
  "You got your own vibe and I respect that.",
  "It just feels right, no extra reason needed."
];

const list = document.getElementById("reasons-list");

reasons.forEach(reason => {
  const li = document.createElement("li");
  li.textContent = reason;
  list.appendChild(li);
});

// Bouncing image setup
const imageArea = document.getElementById("image-area");
const img = document.createElement("img");
img.src = "skibidi.jpeg"; // make sure this is in the same folder
img.classList.add("bouncing");
imageArea.appendChild(img);

let dx = 2;
let dy = 2;
let x = Math.random() * (window.innerWidth - 100);
let y = Math.random() * (window.innerHeight - 100);

function bounce() {
  if (x <= 0 || x + 80 >= window.innerWidth) dx *= -1;
  if (y <= 0 || y + 80 >= window.innerHeight) dy *= -1;

  x += dx;
  y += dy;

  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  requestAnimationFrame(bounce);
}

bounce();

const reasons = [
  "you lowk cute",
  "your vibe unmatched",
  "you funny without trying",
  "your voice kinda comforting ngl",
  "i feel chill around you",
  "ur energy >>>",
  "you make mid days better",
  "you got good taste fr",
  "talking to you feels easy",
  "idk... just something about you"
];

const list = document.getElementById("reasons-list");

reasons.forEach((reason, index) => {
  const item = document.createElement("li");
  item.textContent = `${index + 1}. ${reason}`;
  list.appendChild(item);
});

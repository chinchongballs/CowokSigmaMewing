// Optional: Make the gifs bounce subtly
const leftGif = document.querySelector('.cat-gif.left');
const rightGif = document.querySelector('.cat-gif.right');

let angle = 0;
function animateGifs() {
  angle += 0.05;
  const offset = Math.sin(angle) * 10;
  leftGif.style.transform = `translateY(calc(-50% + ${offset}px))`;
  rightGif.style.transform = `translateY(calc(-50% + ${offset}px))`;
  requestAnimationFrame(animateGifs);
}
animateGifs();


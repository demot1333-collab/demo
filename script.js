// Music toggle
const music = document.getElementById('bgMusic');
const musicButton = document.getElementById('musicButton');
let playing = false;

musicButton.addEventListener('click', () => {
  if (!playing) {
    music.play();
    playing = true;
    musicButton.innerText = "Pause Music ⏸️";
  } else {
    music.pause();
    playing = false;
    musicButton.innerText = "Play Music 🎵";
  }
});

// Floating heart animation
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (5 + Math.random() * 5) + 's';
  document.getElementById('hearts').appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 300);

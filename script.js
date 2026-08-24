const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const buttonsWrap = document.getElementById('buttons');
const question = document.getElementById('question');
const subtext = document.getElementById('subtext');
const message = document.getElementById('message');
const heartsBg = document.getElementById('heartsBg');
 
let dodgeCount = 0;
 
const teaseMessages = [
  "Choose wisely...",
  "Nice try ",
  "Not so fast...",
  "Catch me if you can",
  "Is that a yes yet?",
  "Getting warmer? "
];
 
function moveNoButton() {
  const rect = noBtn.getBoundingClientRect();
  const btnWidth = rect.width;
  const btnHeight = rect.height;

  const viewportWidth = document.documentElement.clientWidth;
  const viewportHeight = document.documentElement.clientHeight;

  const margin = 15; // keep the button fully on screen with breathing room

  // How much room the button actually has to move in
  const rangeX = Math.max(0, viewportWidth - btnWidth - margin * 2);
  const rangeY = Math.max(0, viewportHeight - btnHeight - margin * 2);

  // Random whole-pixel position within that range, then shift in by the margin
  const randomX = Math.floor(Math.random() * rangeX) + margin;
  const randomY = Math.floor(Math.random() * rangeY) + margin;

  noBtn.style.position = 'fixed';
  noBtn.style.left = randomX + 'px';
  noBtn.style.top = randomY + 'px';
 
  dodgeCount++;
  const msgIndex = Math.min(dodgeCount, teaseMessages.length - 1);
  subtext.textContent = teaseMessages[msgIndex];
 

  const scale = 1 + Math.min(dodgeCount * 0.08, 0.6);
  yesBtn.style.transform = `scale(${scale})`;
}

// Safety net: if the window resizes after the button has moved,
// make sure it's still fully within the visible screen
window.addEventListener('resize', () => {
  if (noBtn.style.position === 'fixed') {
    const rect = noBtn.getBoundingClientRect();
    const maxLeft = document.documentElement.clientWidth - rect.width - 15;
    const maxTop = document.documentElement.clientHeight - rect.height - 15;
    const currentLeft = parseFloat(noBtn.style.left);
    const currentTop = parseFloat(noBtn.style.top);
    noBtn.style.left = Math.min(currentLeft, Math.max(0, maxLeft)) + 'px';
    noBtn.style.top = Math.min(currentTop, Math.max(0, maxTop)) + 'px';
  }
});
 
// this is for incase when you want to use mobile phone to access this webpage. Mouse hover and touchscreen touch and both work.
noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', function (e) {
  e.preventDefault();
  moveNoButton();
}, { passive: false });
 
yesBtn.addEventListener('click', () => {
  question.style.display = 'none';
  subtext.style.display = 'none';
  buttonsWrap.style.display = 'none';
  message.style.display = 'block';
  burstHearts();
});
 
// this is the floating hearts in the background.
function spawnHeart() {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.textContent = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
  const duration = 6 + Math.random() * 6;
  heart.style.animationDuration = duration + 's';
  heartsBg.appendChild(heart);
 
  setTimeout(() => heart.remove(), duration * 1000);
}
 
setInterval(spawnHeart, 800);
 
// this is the extra hearts when the yes button is pressed.
function burstHearts() {
  for (let i = 0; i < 20; i++) {
    setTimeout(spawnHeart, i * 50);
  }
}

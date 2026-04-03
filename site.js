const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
const favicon = document.getElementById('favicon');

function circleFavicon(color) {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;

  const context = canvas.getContext('2d');
  context.fillStyle = color;
  context.beginPath();
  context.arc(32, 32, 22, 0, Math.PI * 2);
  context.fill();
  return canvas.toDataURL('image/png');
}

function syncFavicon(event) {
  favicon.href = circleFavicon(event.matches ? '#ffffff' : '#444a57');
}

syncFavicon(colorScheme);
colorScheme.addEventListener('change', syncFavicon);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-W2JL66MRHM');

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const instances = [...document.querySelectorAll<HTMLElement>('[data-pixelated-hover]')];

instances.forEach((container) => {
  const img = container.querySelector('img');
  if (!img) return;
  img.addEventListener('load', () => createPixelatedHover(container, img));
});

function createPixelatedHover(container: HTMLElement, img: HTMLImageElement) {
  const pixelSize = +(container.dataset?.pixelatedHover || '20');
  const previousPixelated = container.querySelector<HTMLImageElement>('img.__pixelated');
  const pixelated = previousPixelated || document.createElement('img');
  const width = Math.floor(img.width / pixelSize);
  const height = Math.floor(img.height / pixelSize);

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 0, 0, width, height);

  pixelated.src = canvas.toDataURL();
  pixelated.classList.add('__pixelated');

  if (!previousPixelated) {
    container.appendChild(pixelated);
  }
}
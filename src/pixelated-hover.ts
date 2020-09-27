const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const instancesToPixelate = [...document.querySelectorAll<HTMLElement>('[data-pixelated-hover]')];

type Base64ImageString = string;

function pixelate(img: HTMLImageElement, pixelSize: number): Base64ImageString {
  const width = Math.ceil(img.width / pixelSize);
  const height = Math.ceil(img.height / pixelSize);

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 0, 0, width, height);

  return canvas.toDataURL();
}

function instantiatePixelatedHover(wrap: HTMLElement) {
  const img = wrap.querySelector<HTMLImageElement>('img:first-child');
  if (!img) return;
  img.addEventListener('load', () => updatePixelatedHover(wrap, img));
}

function updatePixelatedHover(wrap: HTMLElement, img: HTMLImageElement) {
  const pixelSize = +(wrap.dataset.pixelatedHover) || 20;
  const previousPixelated = wrap.querySelector<HTMLImageElement>('img.__pixelated-hover-mask');
  const pixelated = previousPixelated || document.createElement('img');

  pixelated.src = pixelate(img, pixelSize);
  pixelated.classList.add('__pixelated-hover-mask');

  if (!previousPixelated) {
    wrap.appendChild(pixelated);
  }
}

instancesToPixelate.forEach(instantiatePixelatedHover);

export {
  instantiatePixelatedHover,
  updatePixelatedHover,
  pixelate,
};
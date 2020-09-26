const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const instances = [...document.querySelectorAll('[data-pixelated-hover]')];
const pixelSize = 10;

instances.forEach((el) => {
  const img = el.querySelector('img');

  if (!img) return;

  img.addEventListener('load', createPixelatedHover);
});

function getIndexFromCoords(x: number, y: number, width: number) {
  return (y * (width * 4)) + (x * 4);
}

function getPixelData(imageData: ImageData, x: number, y: number) {
  const { data, width } = imageData;
  const i = getIndexFromCoords(x, y, width);
  return data.slice(i, i + 4);
}

function createPixelatedHover() {
  const img: HTMLImageElement = this;
  const container = img.parentElement;
  const pixelSize = +(container.dataset?.pixelatedHover || '20');
  const pixelated = document.createElement('img');
  const { width: domWidth, height: domHeight } = img;
  const cols = Math.floor(domWidth / pixelSize);
  const rows = Math.floor(domHeight / pixelSize);

  // draw image to canvas to inspect it's imageData
  canvas.width = domWidth;
  canvas.height = domHeight;
  ctx.drawImage(img, 0, 0, domWidth, domHeight);
  const originalImageData = ctx.getImageData(0, 0, domWidth, domHeight);

  // create pixelated imageData
  const pixelatedImageData = ctx.createImageData(cols, rows);
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const sx = Math.floor(((x + 1) * pixelSize) - (pixelSize / 2));
      const sy = Math.floor(((y + 1) * pixelSize) - (pixelSize / 2));
      const [r, g, b, a] = getPixelData(originalImageData, sx, sy);
      const i = getIndexFromCoords(x, y, cols);

      pixelatedImageData.data[i    ] = r;
      pixelatedImageData.data[i + 1] = g;
      pixelatedImageData.data[i + 2] = b;
      pixelatedImageData.data[i + 3] = a;
    }
  }

  // draw pixelated image to canvas
  canvas.width = cols;
  canvas.height = rows;
  ctx.putImageData(pixelatedImageData, 0, 0);

  // set src of pixelated img to base64 of pixelated imageData
  pixelated.width = domWidth;
  pixelated.height = domHeight;
  pixelated.src = canvas.toDataURL();
  pixelated.classList.add('__js-pixelated-hover__pixel-image');

  container.appendChild(pixelated);
}
const catSpriteSources = {
  blackCat: "/assets/sprites/black-cat.png",
  calico: "/assets/sprites/calico.png",
  greyTabby: "/assets/sprites/grey-tabby.png",
  maineCoon: "/assets/sprites/maine-coon.png",
  orangeCat: "/assets/sprites/orange-cat.png",
  ragdoll: "/assets/sprites/ragdoll.png",
  britishShorthair: "/assets/sprites/british-shorthair.png",
  siamese: "/assets/sprites/siamese.png",
  tuxedo: "/assets/sprites/tuxedo.png",
  whiteCat: "/assets/sprites/white-cat.png"
};

const loadedCatSprites = new Map();

function getCatSprite(catId) {
  if (!loadedCatSprites.has(catId)) {
    const image = new Image();
    image.decoding = "async";
    image.src = catSpriteSources[catId];
    loadedCatSprites.set(catId, image);
  }
  return loadedCatSprites.get(catId);
}

function drawCatFrame(canvas, image, frameIndex) {
  const context = canvas.getContext("2d");
  const frameSize = 256;
  const rowIndex = Number(canvas.dataset.row || 6);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.imageSmoothingEnabled = true;
  context.drawImage(
    image,
    frameIndex * frameSize,
    rowIndex * frameSize,
    frameSize,
    frameSize,
    0,
    0,
    canvas.width,
    canvas.height
  );
}

function animateCatCanvas(canvas) {
  const frameCount = 6;
  const frameDuration = 180;
  let frameIndex = Number(canvas.dataset.offset || 0) % frameCount;
  let lastFrameTime = 0;

  function drawCurrentFrame() {
    const image = getCatSprite(canvas.dataset.cat);
    if (!image.complete) {
      image.addEventListener("load", () => drawCatFrame(canvas, image, frameIndex), { once: true });
      return;
    }
    drawCatFrame(canvas, image, frameIndex);
  }

  function tick(time) {
    if (time - lastFrameTime >= frameDuration) {
      frameIndex = (frameIndex + 1) % frameCount;
      lastFrameTime = time;
      drawCurrentFrame();
    }
    window.requestAnimationFrame(tick);
  }

  function start() {
    drawCurrentFrame();
    window.requestAnimationFrame(tick);
  }

  const image = getCatSprite(canvas.dataset.cat);
  if (image.complete) {
    start();
  } else {
    image.addEventListener("load", start, { once: true });
  }
}

function bootCatAnimations(root = document) {
  root.querySelectorAll(".cat-canvas").forEach((canvas) => {
    if (canvas.dataset.animated === "true") return;
    canvas.dataset.animated = "true";
    animateCatCanvas(canvas);
  });
}

window.setCatCanvas = function setCatCanvas(canvas, catId, rowIndex = 6) {
  canvas.dataset.cat = catId;
  canvas.dataset.row = String(rowIndex);
  const image = getCatSprite(catId);
  if (image.complete) drawCatFrame(canvas, image, 0);
};

bootCatAnimations();

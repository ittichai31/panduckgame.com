const catAnimationIds = {
  blackCat: "black-cat",
  calico: "calico",
  greyTabby: "grey-tabby",
  maineCoon: "maine-coon",
  orangeCat: "orange-cat",
  ragdoll: "ragdoll",
  britishShorthair: "british-shorthair",
  siamese: "siamese",
  tuxedo: "tuxedo",
  whiteCat: "white-cat"
};

const catAnimationFiles = {
  sitting: { sheet: "sheet-1", row: "row-06", label: "sitting" },
  grooming: { sheet: "sheet-2", row: "row-02", label: "grooming" },
  walking: { sheet: "sheet-1", row: "row-01", label: "walking" },
  running: { sheet: "sheet-1", row: "row-02", label: "running" },
  sleeping: { sheet: "sheet-2", row: "row-01", label: "sleep" },
  petting: { sheet: "sheet-1", row: "row-08", label: "petting" }
};

function catAnimationPath(catId, action = "sitting") {
  const catSlug = catAnimationIds[catId] || catAnimationIds.orangeCat;
  const animation = catAnimationFiles[action] || catAnimationFiles.sitting;
  const fileName = `${catSlug}_${animation.sheet}_${animation.row}_${animation.label}.gif`;
  return `/animations/${catSlug}/${animation.sheet}/${fileName}`;
}

function applyCatAnimation(image, catId, action = "sitting") {
  image.dataset.cat = catId;
  image.dataset.action = action;
  image.src = catAnimationPath(catId, action);
}

function bootCatAnimations(root = document) {
  root.querySelectorAll(".cat-animation").forEach((image) => {
    applyCatAnimation(image, image.dataset.cat, image.dataset.action);
  });
}

window.setCatAnimation = function setCatAnimation(image, catId, action = "sitting") {
  applyCatAnimation(image, catId, action);
};

bootCatAnimations();

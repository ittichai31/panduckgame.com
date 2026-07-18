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

const catAnimationOverrides = {
  blackCat: {
    walking: "/animations/black-cat/sheet-1/black-cat_sheet-1_row-01_walking_v2.webp",
    running: "/animations/black-cat/sheet-1/black-cat_sheet-1_row-02_running_v2.webp",
    sitting: "/animations/black-cat/sheet-1/black-cat_sheet-1_row-06_sitting_v2.webp",
    petting: "/animations/black-cat/sheet-1/black-cat_sheet-1_row-08_petting_v2.webp",
    sleeping: "/animations/black-cat/sheet-2/black-cat_sheet-2_row-01_sleep_v2.webp",
    grooming: "/animations/black-cat/sheet-2/black-cat_sheet-2_row-02_grooming_v2.webp"
  },
  orangeCat: {
    walking: "/animations/orange-cat/sheet-1/orange-cat_sheet-1_row-01_walking_v2.webp",
    running: "/animations/orange-cat/sheet-1/orange-cat_sheet-1_row-02_running_v2.webp",
    sitting: "/animations/orange-cat/sheet-1/orange-cat_sheet-1_row-06_sitting_v2.webp",
    petting: "/animations/orange-cat/sheet-1/orange-cat_sheet-1_row-08_petting_v2.webp",
    sleeping: "/animations/orange-cat/sheet-2/orange-cat_sheet-2_row-01_sleep_v2.webp",
    grooming: "/animations/orange-cat/sheet-2/orange-cat_sheet-2_row-02_grooming_v2.webp"
  },
  whiteCat: {
    walking: "/animations/white-cat/sheet-1/white-cat_sheet-1_row-01_walking_v2.webp",
    running: "/animations/white-cat/sheet-1/white-cat_sheet-1_row-02_running_v2.webp",
    sitting: "/animations/white-cat/sheet-1/white-cat_sheet-1_row-06_sitting_v2.webp",
    petting: "/animations/white-cat/sheet-1/white-cat_sheet-1_row-08_petting_v2.webp",
    sleeping: "/animations/white-cat/sheet-2/white-cat_sheet-2_row-01_sleep_v2.webp",
    grooming: "/animations/white-cat/sheet-2/white-cat_sheet-2_row-02_grooming_v2.webp"
  }
};

function catAnimationPath(catId, action = "sitting") {
  const override = catAnimationOverrides[catId]?.[action];
  if (override) {
    return override;
  }

  const catSlug = catAnimationIds[catId] || catAnimationIds.orangeCat;
  const animation = catAnimationFiles[action] || catAnimationFiles.sitting;
  const fileName = `${catSlug}_${animation.sheet}_${animation.row}_${animation.label}.gif`;
  return `/animations/${catSlug}/${animation.sheet}/${fileName}`;
}

function applyCatAnimation(image, catId, action = "sitting") {
  image.dataset.cat = catId;
  image.dataset.action = action;
  image.src = catAnimationPath(catId, action);
  image.classList.toggle("moving-cat", action === "walking" || action === "running");
  image.classList.toggle("running-cat", action === "running");
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

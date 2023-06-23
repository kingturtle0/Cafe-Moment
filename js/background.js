const images = [0, 1, 2, 3, 4, 5, 6, 7];

const todaysImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${todaysImage}.jpg`;
bgImage.id = "background";

document.body.prepend(bgImage);

const images = [0, 1, 2, 3, 4, 5];

const todaysImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${todaysImage}.jpg`;

document.body.prepend(bgImage);

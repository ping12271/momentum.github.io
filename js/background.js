const images = ["01.jpeg", "02.jpeg"];

const windowImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${windowImage}`;
document.body.appendChild(bgImage);
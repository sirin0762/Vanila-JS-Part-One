const body = document.querySelector("body");
const IMAGUE_NUMBER = 8;
const BACKGROUND_IMAGE = "bgImage";

function loadImage(randomNumber){
    const image = new Image();
    image.src = `image/${randomNumber+1}.jpg`;
    image.classList.add(BACKGROUND_IMAGE);
    body.prepend(image);
}

function getRandom(){
    return Math.floor(Math.random() * IMAGUE_NUMBER);
}

function init(){
    const randomNumber = getRandom();
    loadImage(randomNumber);
}
init();
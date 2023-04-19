
const imageSrcList = [
    "img/back1.JPG",
    "img/back2.JPG",
    "img/back3.JPG",
    "img/back4.JPG",
];

const loadRandomImage = () => {
    const idx = Math.floor( (Math.random() * imageSrcList.length) );
    const imageSrc = imageSrcList[idx];
    const tag = document.querySelector("#main-image");
    tag.src = imageSrc;
    tag.alt = imageSrc;
};
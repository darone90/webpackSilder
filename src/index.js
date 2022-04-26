import foto1 from '../public/assets/image1.jpg';
import foto2 from '../public/assets/image2.jpg';
import './sass/index.scss';

import addingFoto from './tools/fotoAdd';

addingFoto('slider__image-container--first', foto1, 'obrazek pierwszy');
addingFoto('slider__image-container--second', foto2, 'obrazek drugi');

const imagesContainer = document.querySelector('.slider__images-container');
const imgE1 = document.querySelector('.slider__image-container--first img');
const imgE2 = document.querySelector('.slider__image-container--second img');
const imgE1Container = document.querySelector('.slider__image-container--first');
const imgE2Container = document.querySelector('.slider__image-container--second');
const divider = document.querySelector('.silder__divider');
const handle = document.querySelector('.slider__divider-handle');

let containerWidth;
let dragging = false;
let leftDistance;

const getOffset = (left) => {
    const offset = left - leftDistance;
    if(offset < 0) {
        return 0
    } else if (offset > containerWidth) {
        return containerWidth;
    } else return offset;
}

const move = (left) => {
    const offset = getOffset(left);
    const percent = (offset / containerWidth * 100);
    divider.style.left = percent + '%';
    imgE2Container.style.width = percent + '%';
}
const initEvent = () => {
    handle.addEventListener('mousedown', () => {
        dragging = true;
    });

    handle.addEventListener('mouseup', () => {
        dragging = false;
    });

    handle.addEventListener('touchstart', () => {
        dragging = true;
    });

    handle.addEventListener('touchend', () => {
        dragging = false;
    });

    window.addEventListener('mousemove', (e) => {
        if(dragging) {
            move(e.clientX);
        }
    });

    window.addEventListener('touchmove', (e) => {
        if(dragging) {
            move(e.touches[0].clientX);
        }
    })
}
const resizeFunc = () => {
    containerWidth = imagesContainer.offsetWidth;
    imgE1.style.width = containerWidth + 'px';
    imgE2.style.width = containerWidth + 'px';
    leftDistance = imagesContainer.offsetLeft;
};


window.addEventListener('resize', resizeFunc)
resizeFunc();
initEvent();
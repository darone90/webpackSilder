import foto1 from '../public/assets/image1.jpg';
import foto2 from '../public/assets/image2.jpg';
import './sass/index.scss';

import addingFoto from './tools/fotoAdd';

addingFoto('slider__image-container--first', foto1, 'obrazek pierwszy');
addingFoto('slider__image-container--second', foto2, 'obrazek drugi');

const imagesContainer = document.querySelector('.slider__images-container');

const imgE1 = document.querySelector('.slider__image-container--first img');

const imgE2 = document.querySelector('.slider__image-container--second img');

const dragging = false;


const resizeFunc = () => {
    const containerWidth = imagesContainer.offsetWidth;
    imgE1.style.width = containerWidth + 'px';
    imgE2.style.width = containerWidth + 'px';
};
resizeFunc()



window.addEventListener('resize', resizeFunc)

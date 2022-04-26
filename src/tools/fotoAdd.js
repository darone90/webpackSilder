const addingFoto = (className, foto, alt) => {
    const container = document.querySelector(`.${className}`);
    const img = document.createElement('img');
    img.src = foto;
    img.alt = alt;
    img.draggable = false;
    container.appendChild(img);
};

export default addingFoto;
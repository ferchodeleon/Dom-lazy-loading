import {registerImage} from './lazy'

const minium = 1;
const maxium = 122;
const random = () => Math.floor(Math.random() * (maxium - minium) + minium);

const createImageNode = () => {
    const container = document.createElement('div');
    container.className = 'p-4';

    const image = document.createElement('img');
    image.className = 'mx-auto';
    image.width = '320';
    image.dataset.src =`https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(image);

    return container;
}

const imageContainer = document.getElementById('images');

const addButton = document.querySelector('.addImage');
const deletedButton = document.querySelector('.deletedImage');

const addImage = () => {
    const newImage = createImageNode();
    imageContainer.append(newImage);
    registerImage(newImage);
};

const deleteImage = () => {
    imageContainer.lastChild.remove();
}

addButton.addEventListener('click', addImage);
deletedButton.addEventListener('click', deleteImage);
// mountNode.appendChild(newImage);

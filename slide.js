'use strict';
const images = [{
        'id': '1',
        'url': './img/amarela.jpg'
    },
    {
        'id': '2',
        'url': './img/banhia.jpg'
    },
    {
        'id': '3',
        'url': './img/bragança.jpg'
    },
    {
        'id': '4',
        'url': './img/capivara.jpg'
    },
    {
        'id': '5',
        'url': './img/carpa.jpg'
    },
    {
        'id': '6',
        'url': './img/coração.jpg'
    },
    {
        'id': '7',
        'url': './img/ipe.jpg'
    },
    {
        'id': '8',
        'url': './img/jardim.jpg'
    },
    {
        'id': '9',
        'url': './img/lago.jpg'
    },
    {
        'id': '10',
        'url': './img/morango.jpg'
    },
    {
        'id': '11',
        'url': './img/paraiso.jpg'
    },
    {
        'id': '12',
        'url': './img/pedra-grande.jpg'
    },
    {
        'id': '13',
        'url': './img/principe.webp'
    },
    {
        'id': '14',
        'url': './img/rosa.jpg'
    },
    {
        'id': '15',
        'url': './img/sagitario.webp'
    },
    {
        'id': '16',
        'url': './img/sagui.jpg'
    },
    {
        'id': '17',
        'url': './img/tucanos.jpg'
    },
    {
        'id': '18',
        'url': './img/vejo-borboleta.jpg'
    },
    {
        'id': '19',
        'url': './img/vista.jpg'
    },
    {
        'id': '20',
        'url': './img/vo.jpg'
    },
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += ` 
        <div class='item'>
           <img src='${image.url}'
        </div>
     `

    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');
const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}
const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', next);
document.querySelector('#next').addEventListener('click', previous);
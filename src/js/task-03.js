const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryList = document.querySelector('.gallery');
console.log(galleryList);

const galleryImg = images.map(imgEl => `<li class="gallery__item">
<img class="gallery__img" src="${imgEl.url}" alt="${imgEl.alt}">
</li>`);

galleryList.insertAdjacentHTML("afterbegin", galleryImg)





// const galleryList = document.querySelector('.gallery');
// console.log(galleryList);

// const galleryImg = images.map(imgEl => {

//   const galleryItem = document.createElement('li');
//   galleryItem.classList.add('gallery__item');

//   const galleryImgItem = document.createElement('img');
//   galleryImgItem.classList.add('gallery__img');
//   galleryImgItem.src = imgEl.url;
//   galleryImgItem.alt = imgEl.alt;

//   galleryItem.appendChild(galleryImgItem);
  
//   return galleryItem;
// }); 

// galleryList.insertAdjacentHTML('afterbegin', galleryImg);
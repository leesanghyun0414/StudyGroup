
'use strict';

const images = ['../img/fashion2.jpg','../img/fashion3.jpg','../img/fashion4.jpg','../img/fashion5.jpg',
  '../img/fashion6.jpg'];
let current = 0;

function changeImage(num){
  if (current + num >= 0 && current + num < images.length){
    current += num;
    document.getElementById('main_image').src = images[current];
  }
}

document.getElementById('prev').onclick = function () {
  changeImage(-1);
};
document.getElementById('next').onclick = function () {
changeImage(1);
};



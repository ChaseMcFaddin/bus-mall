'use strict';

var imgArray = [];

var leftImg = document.getElementById('image1');
var centerImg = document.getElementById('image2');
var rightImg = document.getElementById('image3');

function SaleItems(name, src) {
  this.views = 0;
  this.clicks = 0;
  this.name = name;
  this.src = src;

  imgArray.push(this);

}

new SaleItems('bag', './img/bag.jpg');
new SaleItems('banana', './img/banana.jpg');
new SaleItems('bathroom', './img/bathroom.jpg');
new SaleItems('boots', './img/boots.jpg');
new SaleItems('breakfast', './img/breakfast.jpg');
new SaleItems('bubblegum', './img/bubblegum.jpg');
new SaleItems('chair', './img/chair.jpg');
new SaleItems('cthulhu', './img/cthulhu.jpg');
new SaleItems('dog-duck', './img/dog-duck.jpg');
new SaleItems('dragon', './img/dragon.jpg');
new SaleItems('pen', './img/pen.jpg');
new SaleItems('pet-sweep', './img/pet-sweep.jpg');
new SaleItems('scissors', './img/scissors.jpg');
new SaleItems('shark', './img/shark.jpg');
new SaleItems('unicorn', './img/unicorn.jpg');
new SaleItems('usb', './img/usb.gif');
new SaleItems('water-can', './img/water-can.jpg');
new SaleItems('tauntaun', './img/tauntaun.jpg');
new SaleItems('wine-glass', './img/wine-glass.jpg');
new SaleItems('sweep', './img/sweep.png');

console.log(imgArray);

function randomNumber(max) {
  return Math.floor(Math.random() * max); //excludes 20//
}

function renderImages() {
  var leftImg = imgArray[randomNumber(imgArray.length)];
  var centerImg = imgArray[randomNumber(imgArray.length)];
  var rightImg = imgArray[randomNumber(imgArray.length)];

  while (leftImg === centerImg, leftImg === rightImg) {
    leftImg = imgArray[randomNumber(imgArray.length)];
    while (centerImg === rightImg)
      centerImg = imgArray[randomNumber(imgArray.length)];
  }

  // leftImg.src = leftImg.src;
  // centerImgEl.src = centerImg.src;
  // rightImgEl.src = rightImg.src;

  // leftImg.alt = leftImg.name;
  // centerImgEl.alt = centerImg.name;
  // rightImgEl.alt = rightImg.name;

  leftImg.views++;
  centerImg.views++;
  rightImg.views++;

}

leftImg.addEventListener('click', eventHandler);
centerImg.addEventListener('click', eventHandler);
rightImg.addEventListener('click', eventHandler);


function eventHandler(e) {
  for (var i = 0; i < imgArray.length; i++) {
    if (imgArray[i].name === e.target.alt) {
      imgArray[i].clicks++;
      renderImages();
    }
  }

}

renderImages;





















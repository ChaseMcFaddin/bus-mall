'use strict';

// global variables //
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
new SaleItems('sweep', './img/sweep.png');
new SaleItems('tauntaun', './img/tauntaun.jpg');
new SaleItems('unicorn', './img/unicorn.jpg');
new SaleItems('usb', './img/usb.gif');
new SaleItems('water-can', './img/water-can.jpg');
new SaleItems('wine-glass', './img/wine-glass.jpg');

console.log(imgArray);

function randomNumber(max) {
  return Math.floor(Math.random() * max); //excludes 20//
}

function render() {
  var imgOne = imgArray[randomNumber(imgArray.length)];
  var imgTwo = imgArray[randomNumber(imgArray.length)];
  var imgThree = imgArray[randomNumber(imgArray.length)];
  while (imgOne === imgTwo || imgOne === imgThree || imgTwo === imgThree) {
    imgOne = imgArray[randomNumber(imgArray.length)];
  }
  // ------------- tried to run two different while loops ----------
  //   imgTwo = imgArray[randomNumber(imgArray.length)];
  // }
  // while (imgOne === imgThree, imgTwo === imgThree) {
  //   imgThree = imgArray[randomNumber(imgArray.length)];
  leftImg.src = imgOne.src;
  centerImg.src = imgTwo.src;
  rightImg.src = imgThree.src;
  leftImg.alt = imgOne.name;
  centerImg.alt = imgTwo.name;
  rightImg.alt = imgThree.name;
  imgOne.views++;
  imgTwo.views++;
  imgThree.views++;
}

// function render() {
//   var imgOne = imgArray[randomNumber(imgArray.length)];
//   var imgTwo = imgArray[randomNumber(imgArray.length)];
//   while (imgOne === imgTwo) {
//     imgTwo = imgArray[randomNumber(imgArray.length)];
//   }
//   var imgThree = imgArray[randomNumber(imgArray.length)];
//   while (imgOne === imgThree, imgTwo === imgThree) {
//     imgThree = imgArray[randomNumber(imgArray.length)];
//   }
//   leftImg.src = imgOne.src;
//   centerImg.src = imgTwo.src;
//   rightImg.src = imgThree.src;
//   leftImg.alt = imgOne.name;
//   centerImg.alt = imgTwo.name;
//   rightImg.alt = imgThree.name;
//   imgOne.views++;
//   imgTwo.views++;
//   imgThree.views++;
// }

leftImg.addEventListener('click', eventHandler);
centerImg.addEventListener('click', eventHandler);
rightImg.addEventListener('click', eventHandler);


function eventHandler(e) {
  for (var i = 0; i < imgArray.length; i++) {
    if (imgArray[i].name === e.target.alt) {
      imgArray[i].clicks++;
      render();
    }
  }
}

render();

function resultsChart() {
  var clicksArray = [];
  var viewsArray = [];
  var namesArray = [];
}
for (var i = 0; i < imgArray.length; i++) {
  namesArray.push(imgArray[i].name);
  clicksArray.push(imgArray[i].clicks);
  viewsArray.push(imgArray[i].views);
}


var iHopeThisWorks = {
  type: 'bar',
  data: {
    labels: namesArray,
    datasets: [{
      label: '# of Votes',
      data: clicksArray,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      hoverBackgroundColor: 'teal',
      borderWidth: 1
    }, {
      label: '# of Votes',
      data: viewsArray,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      hoverBackgroundColor: 'silver',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    responsive: false,
  }
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, iHopeThisWorks); //eslint-disable-line
};






// ----------------------- local storage ---------------------------------//

// var myContainer = document.getElementById('container');

// var siteVisitCount = 0;
// siteVisitCount = localStorage.getItem('visitCount');
// siteVisitCount++;

// var paragraph = document.createElement('p');
// paragraph.textContent = `this site has been visited ${siteVisitCount} times!`
// myContainer.appendChild(paragraph);

// // setting item to local storage takes TWO parameters key & value
// // 1. key - a string
// // 2. value = THE DATA
// localStorage.setItem('visitCount',siteVisitCount);

// // JSON == javaScript Object Notation


// renderImages();
// if (clicks === maxClicks){
//   myContainer.removeEventListener('click', handleClick);
//   renderChart();
//   renderList();
//   // need to 'parse data here FIRST
//   // localstorage.setItem('gaots', allGoats);
//   // does this 
// }

// // in JavaScript I can stringify things
// var stringifiedGoats = JSON.stringifiedGoats;
// console.log(stringifiedGoats);
// localStorage.setItem('savedGoats', stringifiedGoats);

// // JSON.parse
// retrievedGoats = localStorage.getItem('savedGoats');

// var parsedRetrievedGoats = JSON.parse(retrievedGoats);

// // if local storage exists use storage
// // else instantiate goats

// if (retrievedGoats) {
//   allGoats = JSON.parse(retrievedGoats);
// } else {
//   newGoats('....');
//   newGoats('....');
// }







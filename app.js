'use strict';

// ------------------------------- global variables ------------------------------- //

var imgArray = [];
// var renderQueue = [];
var leftImg = document.getElementById('image-1');
var centerImg = document.getElementById('image-2');
var rightImg = document.getElementById('image-3');
var myContainer = document.getElementById('box');
var myList = document.getElementById('list');
var clicks = 0;
var maxClicksAllowed = 5;

// ------------------------------- local storage ------------------------------- //

var retrievedImages = localStorage.getItem('busmall-images');
if (retrievedImages) {
  imgArray = JSON.parse(retrievedImages);
} else {
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
}

// -------------------------------  constructor ------------------------------- //

function SaleItems(name, src) {
  this.name = name;
  this.src = src;
  this.viewed = 0;
  this.clicked = 0;
  imgArray.push(this);
}

// ------------------------------- functions ------------------------------- //

function randomNumber() {
  var num = Math.floor(Math.random() * Math.floor(imgArray.legnth));
  return num;
}

// function createRenderQueue() {
//   while (renderQueue.length > 3) {
//     renderQueue.pop();
//   }
//   while (renderQueue.length < 6) {
//     var i = randomNumber();
//     while (renderQueue.includes(i)) {
//       i = randomNumber();
//     }
//     renderQueue.unshift(i);
//   }
// }

// function renderImages() {
//   createRenderQueue();

//   leftImg.src = imgArray[renderQueue[0]].src;
//   leftImg.alt = imgArray[renderQueue[0]].name;
//   imgArray[renderQueue[0]].viewed++;

//   centerImg.src = imgArray[renderQueue[1]].src;
//   centerImg.alt = imgArray[renderQueue[1]].name;
//   imgArray[renderQueue[1]].viewed++;

//   rightImg.src = imgArray[renderQueue[2]].src;
//   rightImg.alt = imgArray[renderQueue[2]].name;
//   imgArray[renderQueue[2]].viewed++;

function renderImages() {
  // createRenderQueue();
  var imgOne = imgArray[randomNumber(imgArray.length)];
  var imgTwo = imgArray[randomNumber(imgArray.length)];
  while (imgOne === imgTwo) {
    imgTwo = imgArray[randomNumber(imgArray.length)];
  }
  var imgThree = imgArray[randomNumber(imgArray.length)];
  while (imgOne === imgThree, imgTwo === imgThree) {
    imgThree = imgArray[randomNumber(imgArray.length)];
  }
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

// }

function renderList() {
  for (var i = 0; i < imgArray.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${imgArray[i].name} had ${imgArray[i].clicked} votes and was shown ${imgArray[i].viewed} times`;
    myList.appendChild(liEl);
  }
}

function resultsChart() {
  var namesArray = [];
  var clicksArray = [];
  var viewedArray = [];

  for (var i = 0; i < imgArray.length; i++) {
    namesArray.push(imgArray[i].name);
    clicksArray.push(imgArray[i].clicked);
    viewedArray.push(imgArray[i].viewed);
  }

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
      labels: namesArray,
      datasets: [{
        label: '# of Clicks',
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
        borderWidth: 1
      }]
    },
    options: {
      responsive: false,
      animation: {
        duraction: 3000,
        easing: 'easeOutBounce'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

// -------------------------------  event handler ------------------------------- //

function eventHandler(event) {
  clicks++;
  var clickedItem = event.target.alt;

  for (var i = 0; i < imgArray.length; i++) {
    if (clickedItem === imgArray[i].name) {
      imgArray[i].clicked++;
    }
  }

  renderImages();

  if (clicks === maxClicksAllowed) {
    myContainer.removeEventListener('click', eventHandler);
    renderList();
    resultsChart();
    var stringifiedImages = JSON.stringify(imgArray);
    localStorage.setItem('busmall-images', stringifiedImages);
  }
}

// ------------------------------- event listener ------------------------------- //

myContainer.addEventListener('click', eventHandler);

// ------------------------------- end bus-mall ------------------------------- //



// 'use strict';

// // global variables //
// var imgArray = [];

// // var leftImg = document.getElementById('image1');
// // var centerImg = document.getElementById('image2');
// // var rightImg = document.getElementById('image3');




// function SaleItems(name, src) {
//   this.views = 0;
//   this.clicks = 0;
//   this.name = name;
//   this.src = src;

//   imgArray.push(this);

// }

// new SaleItems('bag', './img/bag.jpg');
// new SaleItems('banana', './img/banana.jpg');
// new SaleItems('bathroom', './img/bathroom.jpg');
// new SaleItems('boots', './img/boots.jpg');
// new SaleItems('breakfast', './img/breakfast.jpg');
// new SaleItems('bubblegum', './img/bubblegum.jpg');
// new SaleItems('chair', './img/chair.jpg');
// new SaleItems('cthulhu', './img/cthulhu.jpg');
// new SaleItems('dog-duck', './img/dog-duck.jpg');
// new SaleItems('dragon', './img/dragon.jpg');
// new SaleItems('pen', './img/pen.jpg');
// new SaleItems('pet-sweep', './img/pet-sweep.jpg');
// new SaleItems('scissors', './img/scissors.jpg');
// new SaleItems('shark', './img/shark.jpg');
// new SaleItems('sweep', './img/sweep.png');
// new SaleItems('tauntaun', './img/tauntaun.jpg');
// new SaleItems('unicorn', './img/unicorn.jpg');
// new SaleItems('usb', './img/usb.gif');
// new SaleItems('water-can', './img/water-can.jpg');
// new SaleItems('wine-glass', './img/wine-glass.jpg');

// console.log(imgArray);

// function randomNumber(max) {
//   return Math.floor(Math.random() * max); //excludes 20//
// }

// function render() {
//   var imgOne = imgArray[randomNumber(imgArray.length)];
//   var imgTwo = imgArray[randomNumber(imgArray.length)];
//   var imgThree = imgArray[randomNumber(imgArray.length)];
//   while (imgOne === imgTwo || imgOne === imgThree || imgTwo === imgThree) {
//     imgOne = imgArray[randomNumber(imgArray.length)];
//   }
//   // ------------- tried to run two different while loops ----------
//   //   imgTwo = imgArray[randomNumber(imgArray.length)];
//   // }
//   // while (imgOne === imgThree, imgTwo === imgThree) {
//   //   imgThree = imgArray[randomNumber(imgArray.length)];
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

// leftImg.addEventListener('click', eventHandler);
// centerImg.addEventListener('click', eventHandler);
// rightImg.addEventListener('click', eventHandler);


// function eventHandler(e) {
//   for (var i = 0; i < imgArray.length; i++) {
//     if (imgArray[i].name === e.target.alt) {
//       imgArray[i].clicks++;
//       render();
//     }
//   }
// }

// render();

// function resultsChart() {
//   var clicksArray = [];
//   var viewsArray = [];
//   var namesArray = [];
// }
// for (var i = 0; i < imgArray.length; i++) {
//   namesArray.push(imgArray[i].name);
//   clicksArray.push(imgArray[i].clicks);
//   viewsArray.push(imgArray[i].views);
// }


// var iHopeThisWorks = {
//   type: 'bar',
//   data: {
//     labels: namesArray,
//     datasets: [{
//       label: '# of Votes',
//       data: clicksArray,
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)'
//       ],
//       hoverBackgroundColor: 'teal',
//       borderWidth: 1
//     }, {
//       label: '# of Votes',
//       data: viewsArray,
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)'
//       ],
//       hoverBackgroundColor: 'silver',
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero: true
//         }
//       }]
//     },
//     responsive: false,
//   }
//   var ctx = document.getElementById('myChart').getContext('2d');
//   var myChart = new Chart(ctx, iHopeThisWorks); //eslint-disable-line
// };

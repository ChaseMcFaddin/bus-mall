'use strict';

// // ------------------------------- global variables ------------------------------- //

var imgArray = [];
var renderQueue = [];
var leftImg = document.getElementById('image-1');
var centerImg = document.getElementById('image-2');
var rightImg = document.getElementById('image-3');
var myContainer = document.getElementById('box');
var myList = document.getElementById('list');
var clicks = 0;
var maxClicksAllowed = 25;

// -------------------------------  constructor ------------------------------- //

function Img(name, src) {
  this.name = name;
  this.src = src;
  this.viewed = 0;
  this.clicked = 0;
  imgArray.push(this);
}
// ------------------------------- local storage ------------------------------- //

var retrievedImg = localStorage.getItem('busmall-img');
if (retrievedImg) {
  imgArray = JSON.parse(retrievedImg);
} else {
  new Img('bag', './img/bag.jpg');
  new Img('banana', './img/banana.jpg');
  new Img('bathroom', './img/bathroom.jpg');
  new Img('boots', './img/boots.jpg');
  new Img('breakfast', './img/breakfast.jpg');
  new Img('bubblegum', './img/bubblegum.jpg');
  new Img('chair', './img/chair.jpg');
  new Img('cthulhu', './img/cthulhu.jpg');
  new Img('dog-duck', './img/dog-duck.jpg');
  new Img('dragon', './img/dragon.jpg');
  new Img('pen', './img/pen.jpg');
  new Img('pet-sweep', './img/pet-sweep.jpg');
  new Img('scissors', './img/scissors.jpg');
  new Img('shark', './img/shark.jpg');
  new Img('sweep', './img/sweep.png');
  new Img('tauntaun', './img/tauntaun.jpg');
  new Img('unicorn', './img/unicorn.jpg');
  new Img('usb', './img/usb.gif');
  new Img('water-can', './img/water-can.jpg');
  new Img('wine-glass', './img/wine-glass.jpg');
}


// ------------------------------- functions ------------------------------- //

function randomNumber() {
  var num = Math.floor(Math.random() * Math.floor(imgArray.length));
  return num;
}

function createRenderQueue() {
  while (renderQueue.length > 3) {
    renderQueue.pop();
  }
  while (renderQueue.length < 6) {
    var i = randomNumber(imgArray.length);
    while (renderQueue.includes(i)) {
      i = randomNumber(imgArray.length);
    }
    renderQueue.unshift(i);
  }
}

function renderimg() {
  createRenderQueue();

  var imgElOne = imgArray[renderQueue[0]];
  var imgElTwo = imgArray[renderQueue[1]];
  var imgElThree = imgArray[renderQueue[2]];

  leftImg.src = imgElOne.src;
  leftImg.alt = imgElOne.name;
  imgElOne.viewed++;

  centerImg.src = imgElTwo.src;
  centerImg.alt = imgElTwo.name;
  imgElTwo.viewed++;

  rightImg.src = imgElThree.src;
  rightImg.alt = imgElThree.name;
  imgElThree.viewed++;

  // leftImg.src = imgArray[renderQueue[0]].src;
  // leftImg.alt = imgArray[renderQueue[0]].name;
  // imgArray[renderQueue[0]].viewed++;

  // centerImg.src = imgArray[renderQueue[1]].src;
  // centerImg.alt = imgArray[renderQueue[1]].name;
  // imgArray[renderQueue[1]].viewed++;

  // rightImg.src = imgArray[renderQueue[2]].src;
  // rightImg.alt = imgArray[renderQueue[2]].name;
  // imgArray[renderQueue[2]].viewed++;
}

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
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
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

  renderimg();

  if (clicks === maxClicksAllowed) {
    myContainer.removeEventListener('click', eventHandler);
    renderList();
    resultsChart();
    var stringifiedimg = JSON.stringify(imgArray);
    localStorage.setItem('busmall-img', stringifiedimg);
  }
}

// ------------------------------- event listener ------------------------------- //

myContainer.addEventListener('click', eventHandler);

// // ------------------------------- end bus-mall ------------------------------- //

// // --------------------------------------------------------------------------------- //

// // --------------------------------------------------------------------------------- //

// // --------------------------------------------------------------------------------- //

// // --------------------------------------------------------------------------------- //

// // --------------------------------------------------------------------------------- //

// // --------------------------------------------------------------------------------- //

// // ------------------------------ attempt number 1 --------------------------------- //

// // --------------------------------------------------------------------------------- //

// // --------------------------------------------------------------------------------- //

// // --------------------------------------------------------------------------------- //

// // --------------------------------------------------------------------------------- //

// // --------------------------------------------------------------------------------- //

// // --------------------------------------------------------------------------------- //

// // --------------------------------------------------------------------------------- //



// 'use strict';

// // global variables //
// var imgArray = [];

// // var leftImg = document.getElementById('image1');
// // var centerImg = document.getElementById('image2');
// // var rightImg = document.getElementById('image3');




// function Img(name, src) {
//   this.views = 0;
//   this.clicks = 0;
//   this.name = name;
//   this.src = src;

//   imgArray.push(this);

// }

// new Img('bag', './img/bag.jpg');
// new Img('banana', './img/banana.jpg');
// new Img('bathroom', './img/bathroom.jpg');
// new Img('boots', './img/boots.jpg');
// new Img('breakfast', './img/breakfast.jpg');
// new Img('bubblegum', './img/bubblegum.jpg');
// new Img('chair', './img/chair.jpg');
// new Img('cthulhu', './img/cthulhu.jpg');
// new Img('dog-duck', './img/dog-duck.jpg');
// new Img('dragon', './img/dragon.jpg');
// new Img('pen', './img/pen.jpg');
// new Img('pet-sweep', './img/pet-sweep.jpg');
// new Img('scissors', './img/scissors.jpg');
// new Img('shark', './img/shark.jpg');
// new Img('sweep', './img/sweep.png');
// new Img('tauntaun', './img/tauntaun.jpg');
// new Img('unicorn', './img/unicorn.jpg');
// new Img('usb', './img/usb.gif');
// new Img('water-can', './img/water-can.jpg');
// new Img('wine-glass', './img/wine-glass.jpg');

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

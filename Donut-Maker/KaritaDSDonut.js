let autoClickInterval;
let autoClickerCost = 100;
let donutsCount = 0;
let autoClicks = 0;

const donutBtn = document.querySelector('.countBtn button');
const donutCount = document.querySelector('.countNum h2');
let donutClicks = 0;
clear.addEventListener('click', resetAll);



function resetAll(){
  location.reload ()
}




donutBtn.addEventListener('click', () => {
  donutClicks++;
  donutsCount = calculateDonuts();
  donutCount.innerHTML = donutsCount;

});

const moreDonutBtn = document.querySelector('.countsBtn2 button');
const moreDonutCount = document.querySelector('.countsNum2 h3');
let moreDonutClicks = 0;

moreDonutBtn.addEventListener('click', () => {
  moreDonutClicks++;
  donutsCount = calculateDonuts();
  moreDonutCount.innerHTML = moreDonutClicks;
});

const evenMoreDonutBtn = document.querySelector('.countBtn3 button');
const evenMoreDonutCount = document.querySelector('.counterNum3 h4');
let evenMoreDonutClicks = 0;

evenMoreDonutBtn.addEventListener('click', () => {
  evenMoreDonutClicks++;
  donutsCount = calculateDonuts();
  evenMoreDonutCount.innerHTML = evenMoreDonutClicks;
});

function addAutoClick() {
  if (donutsCount >= autoClickerCost) {
    autoClicks++;

    donutsCount -= autoClickerCost;
    autoClickerCost = Math.round(autoClickerCost * 110);
    clearInterval(autoClickInterval);
    autoClickInterval = setInterval(() => {
      donutClicks += autoClicks;
      donutsCount = calculateDonuts();
      donutCount.innerHTML = donutsCount;
      moreDonutClicks += autoClicks;
      moreDonutCount.innerHTML = moreDonutClicks;
    }, 110);
  } else {
    alert("Hey, you need more donuts!");
  }
}




function calculateDonuts() {
  return donutClicks + (evenMoreDonutClicks * 3) 
}

function autoClick() {
  if (donutsCount >= autoClickerCost) {
    autoClicks++;

    donutsCount -= autoClickerCost;
    autoClickerCost = Math.round(autoClickerCost * 120);

    clearInterval(autoClickInterval);
    autoClickInterval = setInterval(() => {
      donutClicks += autoClicks;
      donutsCount = calculateDonuts();
      donutCount.innerHTML = donutsCount;
      moreDonutClicks += autoClicks;
      moreDonutCount.innerHTML = moreDonutClicks;
      evenMoreDonutClicks += autoClicks;
      evenMoreDonutCount.innerHTML = evenMoreDonutClicks;
    }, 120);
  } else {
    alert("Hey, you need more donuts!");
  }
}

function calculateDonuts() {
  return donutClicks + (moreDonutClicks * 2) + (evenMoreDonutClicks * 3) + donutsCount;}


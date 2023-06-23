const score = document.querySelectorAll(".score");
const totalScore = document.querySelectorAll(".total-score");
const sum = document.querySelectorAll(".sum");
const play = document.querySelector(".play");
const triangle = document.querySelector(".triangle");
const warning = document.querySelector(".warning");
const reset = document.querySelector(".reset");
let count = 0;
let totalScores = 0;

reset.addEventListener('click', function () {
  reload()
})  

play.addEventListener("click", function () {
  rollBall();
});

 function reload () {
  window.location.reload()
} 

function rollBall() {
  
  for (let i = 0; i < score.length; i++) {
    count++;
  }
  let standingPins = 10;
  const firstHit = getRandomPin(standingPins);
  console.log(firstHit);
  standingPins = standingPins - firstHit;
  const secondHits = getRandomPin(standingPins);
  const totalHits = firstHit + secondHits;
  totalScores += totalHits;

  if (count === 10) {
    triangle.style.flexDirection = 'column-reverse'
    score[0].innerHTML = `${firstHit}, ${secondHits}`;
    sum[0].innerHTML = `${firstHit + secondHits} `
    totalScore[0].innerHTML = '/';
  } else if (count === 20) {
    triangle.style.flexDirection = 'column'
    score[1].innerHTML = `${firstHit}, ${secondHits}`;
    sum[1].innerHTML = `${firstHit + secondHits} `
    totalScore[1].innerHTML = totalScores;
  } else if (count === 30) {
    triangle.style.flexDirection = 'column-reverse'
    score[2].innerHTML = `${firstHit}, ${secondHits}`;
    sum[2].innerHTML = `${firstHit + secondHits} `
    totalScore[2].innerHTML = totalScores;
  } else if (count === 40) {
    triangle.style.flexDirection = 'column'
    score[3].innerHTML = `${firstHit}, ${secondHits}`;
    sum[3].innerHTML = `${firstHit + secondHits} `
    totalScore[3].innerHTML = totalScores;
  } else if (count === 50) {
    triangle.style.flexDirection = 'column-reverse'
    score[4].innerHTML = `${firstHit}, ${secondHits}`;
    sum[4].innerHTML = `${firstHit + secondHits} `
    totalScore[4].innerHTML = totalScores;
  } else if (count === 60) {
    triangle.style.flexDirection = 'column-reverse'
    score[5].innerHTML = `${firstHit}, ${secondHits}`;
    sum[5].innerHTML = `${firstHit + secondHits} `
    totalScore[5].innerHTML = totalScores;
  } else if (count === 70) {
    triangle.style.flexDirection = 'column'
    score[6].innerHTML = `${firstHit}, ${secondHits}`;
    sum[6].innerHTML = `${firstHit + secondHits} `
    totalScore[6].innerHTML = totalScores;
  } else if (count === 80) {
    triangle.style.flexDirection = 'column-reverse'
    score[7].innerHTML = `${firstHit}, ${secondHits}`;
    sum[7].innerHTML = `${firstHit + secondHits} `
    totalScore[7].innerHTML = totalScores;
  } else if (count === 90) {
    triangle.style.flexDirection = 'column'
    score[8].innerHTML = `${firstHit}, ${secondHits}`;
    sum[8].innerHTML = `${firstHit + secondHits} `
    totalScore[8].innerHTML = totalScores;
  } else if (count === 100) {
    triangle.style.flexDirection = 'column-reverse'
    score[9].innerHTML = `${firstHit}, ${secondHits}`;
    sum[9].innerHTML = `${firstHit + secondHits} `
    totalScore[9].innerHTML = totalScores;
  } else {
    warning.innerHTML = 'Sorry!!! You have exceeded the number of frame'
  }

  console.log(firstHit, secondHits);
  console.log(count);
}

function getRandomPin(remainingPins) {
  return Math.round(Math.random() * remainingPins);
}

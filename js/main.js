
// ---------------intro-----------------
let intro =document.querySelector('.intro');
let Temp3 =document.querySelector('.Temp3');
let template =document.querySelectorAll('.template');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        // return node list 
        template.forEach((span, idx) => {
            
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 500)
        });

        setTimeout(() => {
            template.forEach((span, idx) => {
                

                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                } ,(idx+1) *600)
                
            })
        }, 2000)
        setTimeout(() => {
            intro.style.top="-120vh"
        }, 6300);
    })  
});
// --------------- End intro-----------------

// ----------------  start counter  Stats----------------
let nums =document.querySelectorAll(".nums .num")
let section =document.querySelector("#stats")


function startCount(el) {
  let lemet = el.dataset.lemet;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == lemet) {
      clearInterval(count);
    }
  }, 2000 / lemet);
}

startCount(document.querySelectorAll("nums .num")[0])

// ----------------  End counter  Stats----------------

data-lemet




























// /*
//  ** Countdown Timer
//  ** Video URL: https://www.youtube.com/watch?v=eFsiOTJrrE8
//  */

// // The End Of The Year Date
// // 1000 milliseconds = 1 Second

// let countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();
// // console.log(countDownDate);

// let counter = setInterval(() => {
//   // Get Date Now
//   let dateNow = new Date().getTime();

//   // Find The Date Difference Between Now And Countdown Date
//   let dateDiff = countDownDate - dateNow;

//   // Get Time Units
//   // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
//   let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

//   document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
//   document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
//   document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
//   document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

//   if (dateDiff < 0) {
//     clearInterval(counter);
//   }
// }, 1000);

// /*
//  ** Animate Width On Scrolling
//  ** Video URL: https://youtu.be/sbIoIKI9FOc
//  */

// /*
//  ** Increase Numbers On Scrolling
//  ** Video URL: https://youtu.be/PLsUdgLnzgQ
//  */

// let progressSpans = document.querySelectorAll(".the-progress span");
// let section = document.querySelector(".our-skills");

// let nums = document.querySelectorAll(".stats .number");
// let statsSection = document.querySelector(".stats");
// let started = false; // Function Started ? No

// window.onscroll = function () {
//   // Skills Animate Width
//   if (window.scrollY >= section.offsetTop - 250) {
//     progressSpans.forEach((span) => {
//       span.style.width = span.dataset.width;
//     });
//   }
//   // Stats Increase Number
//   if (window.scrollY >= statsSection.offsetTop) {
//     if (!started) {
//       nums.forEach((num) => startCount(num));
//     }
//     started = true;
//   }
// };

// function startCount(el) {
//   let goal = el.dataset.goal;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == goal) {
//       clearInterval(count);
//     }
//   }, 2000 / goal);
// }

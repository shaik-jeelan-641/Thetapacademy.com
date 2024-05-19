

// reviews 


let currentIndex = 0; // Variable to keep track of the current slide index

// Function to show the current slide and hide others
function showSlides() {
    const slides = document.querySelectorAll('.slide-review');
    slides.forEach((slide, index) => {
        if (index === currentIndex || index === currentIndex + 1 || index === currentIndex + 2 ) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });
}

// Function to handle the next button click
function next() {
    currentIndex++;
    if (currentIndex > document.querySelectorAll('.slide-review').length - 3) {
        currentIndex = 0; // Reset to the first slide if at the end
    }
    showSlides();
}

// Function to handle the previous button click
function prev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = document.querySelectorAll('.slide-review').length - 3; // Move to the last set of slides if at the beginning
    }
    showSlides();
}
setInterval(next, 2000);


showSlides();



// var count = document.getElementsByClassName("count");

// function intervalFunc() {
//     for (let i = 0; i < count.length; i++) {
//         let currentCount = parseInt(count[i].innerHTML.replace(/,/g, ''), 10); // Remove commas from innerHTML and parse as integer
//         let maxData = parseInt(count[i].getAttribute("max-data").replace(/,/g, ''), 10); // Remove commas from max-data attribute and parse as integer
//         let increment = Math.ceil((maxData - currentCount) / 150); // Calculate increment based on difference between current count and max-data
        
//         if (currentCount < maxData) {
//             let newCount = currentCount + increment;
//             if (newCount > maxData) {
//                 newCount = maxData; // Ensure count doesn't exceed max-data
//             }
//             count[i].innerHTML = newCount.toLocaleString(); // Format number with commas
//         }
//     }
// }

// setInterval(intervalFunc, 100); // Run the function every 100 milliseconds (10 times per second)



// // scroll animation

// var main = document.getElementById("main");
// window.onscroll = function(){
//     var timer= setInterval(()=>{
//     var topElem = main.offsetTop;
//     var btmElem = main.offsetTop+main.clientHeight;
//     var topScreen =window.pageYOffset;
//     var btmScreen = window.pageYOffset+window.innerHeight;
//     if(btmScreen>topElem && topScreen < btmElem){
//         intervalFunc();

//     }
//     else{
//         clearInterval(timer)
//         for (let i = 0; i < count.length; i++) {
//             count[i].innerHTML=1;
//             inc=[];
//         }
//     }
//     },100);
    



// }


// // nav bar 
// const bar = document.getElementById('bar');
// const close = document.getElementById('close');

// const nav = document.getElementById('navbar');

// if(bar){
//     bar.addEventListener('click',()=>{
//         nav.classList.add('active');
//     })
// }

// if(close){
//     close.addEventListener('click',()=>{
//         nav.classList.remove('active');
//     })
// }





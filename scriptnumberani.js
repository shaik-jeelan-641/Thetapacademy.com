
var count = document.getElementsByClassName("count");

function intervalFunc() {
    for (let i = 0; i < count.length; i++) {
        let currentCount = parseInt(count[i].innerHTML.replace(/,/g, ''), 10); // Remove commas from innerHTML and parse as integer
        let maxData = parseInt(count[i].getAttribute("max-data").replace(/,/g, ''), 10); // Remove commas from max-data attribute and parse as integer
        let increment = Math.ceil((maxData - currentCount) / 150); // Calculate increment based on difference between current count and max-data

        if (currentCount < maxData) {
            let newCount = currentCount + increment;
            if (newCount > maxData) {
                newCount = maxData; // Ensure count doesn't exceed max-data
            }
            count[i].innerHTML = newCount.toLocaleString(); // Format number with commas
        }
    }
}

setInterval(intervalFunc, 100); // Run the function every 100 milliseconds (10 times per second)



// scroll animation

var main = document.getElementById("main");
window.onscroll = function () {
    var timer = setInterval(() => {
        var topElem = main.offsetTop;
        var btmElem = main.offsetTop + main.clientHeight;
        var topScreen = window.pageYOffset;
        var btmScreen = window.pageYOffset + window.innerHeight;
        if (btmScreen > topElem && topScreen < btmElem) {
            intervalFunc();

        }
        else {
            clearInterval(timer)
            for (let i = 0; i < count.length; i++) {
                count[i].innerHTML = 1;
                inc = [];
            }
        }
    }, 100);




}


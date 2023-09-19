const scriptURL = 'https://script.google.com/macros/s/AKfycbx6amujNGN0o9NZf4rHmhmHiJWUYnW7uKz1aWIWWCavgqs4R46lAjqU7fUQz2r_PKkJ/exec'
const form = document.forms['submit-to-google-sheet']
const thanksText = document.getElementById("thanks-text")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            thanksText.innerHTML = "Thank You For Subscribing!"
            setTimeout(function () {
                thanksText.innerHTML = ""
            }, 4000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


//--------------- Countdown Timer

var countDownDate = new Date("Sep 20, 2024 15:37:25").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();


    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);
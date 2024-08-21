//var url = "https://Z4ckStudios.com/DisC";
var url = "https://Z4ckStudios.github.io/Z4ckStudios/DisC";
window.history.replaceState(null, document.title, url);

var homeButton = document.querySelector(".homeButton");

const countdownInterval = setInterval(countdownTimer, 1000);

function countdownTimer(){
    const time = new Date(`August 31, 2024 00:00:00`);
    const currentTime = new Date();

    const difference = time - currentTime;

    let days = Math.floor(difference / 1000 / 3600 / 24);
    let hours = Math.floor(difference / 1000 / 3600 % 24);
    let minutes = Math.floor(difference / 1000 / 60 % 60);
    let seconds = Math.floor(difference / 1000 % 60);

    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector(".eventTimer").innerHTML =
    `${days} : 
    ${hours} : 
    ${minutes} : 
    ${seconds}`;

    if(currentTime > new Date(`August 31, 2024 00:00:00`))
    {document.querySelector(".eventTimer").innerHTML = "00 : 00 : 00 : 00"
    clearInterval(countdownInterval);}
}

homeButton.addEventListener("click",
function() {

    //location.replace("index.html");
    //location.replace("https://Z4ckStudios.com/index.html");
    location.replace("https://Z4ckStudios.github.io/Z4ckStudios/index.html");
})
homeButton.addEventListener("mouseover",
function() {

    homeButton.style.cursor = "pointer";
    homeButton.style.background = "white";
    homeButton.style.color = "black";
})
homeButton.addEventListener("mouseout",
function() {

    homeButton.style.cursor = "default";
    homeButton.style.background = "transparent";
    homeButton.style.color = "white";
})
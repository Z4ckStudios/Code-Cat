var url = "../RETURN";
window.history.replaceState(null, document.title, url);

var CODE = document.getElementById("CODE");
var Ciphered = document.getElementById("Ciphered");

var eventTimer = document.getElementById("eventTimer");
var homeButton = document.getElementById("homeButton");

var recurringValue = 20;
var ranVars = (recurringValue, 80);

var mathRandomTop = null;
var mathRandomLeft = null;

function recallLoops() {
    mathRandomTop = Math.floor(Math.random() * ranVars);
    mathRandomLeft = Math.floor(Math.random() * ranVars);

    while(mathRandomTop < recurringValue) {
        mathRandomTop = Math.floor(Math.random() * ranVars);
    }
    while(mathRandomLeft < recurringValue) {
        mathRandomLeft = Math.floor(Math.random() * ranVars);
    }
}
recallLoops();

CODE.style.top = `${mathRandomTop}vh`;
CODE.style.left = `${mathRandomLeft}vw`;

recallLoops();

Ciphered.style.marginTop = `${mathRandomTop}vh`;
Ciphered.style.marginLeft = `${mathRandomLeft}vw`;

var RETURNDate = new Date(`May 7, 2026 16:00:00`);

var DateList = [
    RETURNDate,
];

var ProjectDate = null;

DateList.forEach(date => {
    ProjectDate = date;
});

const countdownInterval = setInterval(countdownTimer, 1000);

function countdownTimer(){
    const time = ProjectDate;
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

    eventTimer.innerHTML =
    `${days}d : 
    ${hours}h : 
    ${minutes}m : 
    ${seconds}s`;

    if(days == 0) {
        eventTimer.innerHTML = `${hours}h : ${minutes}m : ${seconds}s`;
    }
    else
    if(hours == 0) {
        eventTimer.innerHTML = `${days}d : ${minutes}m : ${seconds}s`;
    }
    else
    if(minutes == 0) {
        eventTimer.innerHTML = `${days}d : ${hours}h : ${seconds}s`;
    }
    else
    if(seconds == 0) {
        eventTimer.innerHTML = `${days}d : ${hours}h : ${minutes}m`;
    }

    if(hours == 0 && minutes == 0 && seconds == 0) {
        eventTimer.innerHTML = `${days}d`;
    }
    if(days == 0 && minutes == 0 && seconds == 0) {
        eventTimer.innerHTML = `${hours}h`;
    }
    if(days == 0 && hours == 0 && seconds == 0) {
        eventTimer.innerHTML = `${minutes}m`;
    }

    if(days == 0 && hours == 0) {
        eventTimer.innerHTML = `${minutes}m : ${seconds}s`;
    }
    if(hours == 0 && minutes == 0) {
        eventTimer.innerHTML = `${days}d : ${seconds}s`;
    }
    if(minutes == 0 && seconds == 0) {
        eventTimer.innerHTML = `${days}d : ${hours}h`;
    }

    if(days == 0 && minutes == 0) {
        eventTimer.innerHTML = `${hours}h : ${seconds}s`;
    }
    if(days == 0 && seconds == 0) {
        eventTimer.innerHTML = `${hours}h : ${minutes}m`;
    }
    if(hours == 0 && seconds == 0) {
        eventTimer.innerHTML = `${days}d : ${minutes}m`;
    }

    if(eventTimer.innerHTML == `${days}d : ` + "00m") {
        eventTimer.innerHTML = `${days}d`;
    }
    if(eventTimer.innerHTML == "00d : " + `${minutes}m`) {
        eventTimer.innerHTML = `${minutes}m`;
    }
    if(eventTimer.innerHTML == "00h : " + `${seconds}s`) {
        eventTimer.innerHTML = `${seconds}s`;
    }

    if(seconds <= 10 &&
    eventTimer.innerHTML == `${seconds}s`) {
        eventTimer.style.color = "#FF0000";
    }

    if(currentTime > ProjectDate) {
        eventTimer.innerHTML = "THE CREATOR HAS RETURNED";
        eventTimer.style.textWrap = "wrap";
        eventTimer.style.width = "90vw";
        eventTimer.style.textShadow = "0px 5px 10px #FFFFFF";

        Ciphered.style.display = "none";
        CODE.style.display = "none";

        clearInterval(countdownInterval);
    }
}

homeButton.addEventListener("click",
function() {
    location.replace("../index.html");
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
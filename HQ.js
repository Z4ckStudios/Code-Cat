// var url = "https://Z4ckStudios.com/HQ";
var url = "https://Z4ckStudios.github.io/Z4ckStudios/HQ";

if(document.baseURI == "https://z4ckstudios.github.io/Z4ckStudios/HQ.html") {
    window.history.replaceState(null, document.title, url);
}

var body = document.getElementById("body");
var eventTimer = document.getElementById("eventTimer");
var homeButton = document.getElementById("homeButton");

var DeviceRatio = localStorage.getItem("DeviceRatio");

if(window.innerWidth > window.innerHeight) {
    localStorage.setItem("DeviceRatio", "Landscape");
}
else
if(window.innerWidth < window.innerHeight) {
    localStorage.setItem("DeviceRatio", "Portrait");
}

if(DeviceRatio == "Landscape" && eventTimer.innerHTML == "0") {
    body.style.background = "red";
}
else
if(DeviceRatio == "Portrait" && eventTimer.innerHTML == "0") {
    body.style.background = "blue";
}

const countdownInterval = setInterval(countdownTimer, 1000);

function countdownTimer(){
    const time = new Date(`July 31, 2025 19:00:00`);
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

    if(currentTime > new Date(`July 31, 2025 19:00:00`)) {
        eventTimer.innerHTML = "Hue Quest is out now on PC platforms at: <a style='color: #FF5555; text-shadow: 0px 5px 10px #FF5555;' href='https://Z4ckStudios.itch.io/huequest'>https://Z4ckStudios.itch.io/huequest</a>";
        eventTimer.style.fontFamily = "monospace";
        eventTimer.style.fontSize = "3vw";
        eventTimer.style.textWrap = "wrap";
        eventTimer.style.width = "90vw";
        eventTimer.style.color = "#FFFFFF";
        eventTimer.style.textShadow = "0px 5px 10px #FFFFFF";
        clearInterval(countdownInterval);
    }
}

homeButton.addEventListener("click",
function() {
    // location.replace("https://Z4ckStudios.com/index.html");

    if(document.baseURI == "https://z4ckstudios.github.io/Z4ckStudios/TZP.html") {
        location.replace("https://Z4ckStudios.github.io/Z4ckStudios/");
    }
    else {
        location.replace("index.html");
    }
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

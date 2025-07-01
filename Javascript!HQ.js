// var url = "https://Z4ckStudios.com/HQ";
var url = "https://Z4ckStudios.github.io/Z4ckStudios/HQ";
window.history.replaceState(null, document.title, url);

var body = document.querySelector("body");
var eventTimer = document.querySelector(".eventTimer");
var homeButton = document.querySelector(".homeButton");

var DeviceRatio = localStorage.getItem("DeviceRatio");

if(window.innerWidth >= "1000")
{localStorage.setItem("DeviceRatio", "Desktop");}
else
if(window.innerWidth <= "1000")
{localStorage.setItem("DeviceRatio", "Mobile");}

if(DeviceRatio == "Desktop" && eventTimer.innerHTML == "0")
{body.style.background = "red";}
else
if(DeviceRatio == "Mobile" && eventTimer.innerHTML == "0")
{body.style.background = "blue";}

const countdownInterval = setInterval(countdownTimer, 1000);

function countdownTimer(){
    const time = new Date(`July 31, 2025 00:00:00`);
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

    if(minutes == 0)
    {eventTimer.innerHTML =
    `${days}d : 
    ${hours}h : 
    ${seconds}s`;}

    if(days == 0)
    {eventTimer.innerHTML =
    `${hours}h : 
    ${minutes}m : 
    ${seconds}s`;}

    if(days == 0 && hours == 0)
    {eventTimer.innerHTML =
    `${minutes}m : 
    ${seconds}s`;}

    if(days == 0 && minutes == 0)
    {eventTimer.innerHTML =
    `${hours}h : 
    ${seconds}s`;}

    if(days == 0 && hours == 0 && minutes == 0)
    {eventTimer.innerHTML =
    `${seconds}s`;}

    if(days == 0 && hours == 0 && minutes == 0 && seconds <= 10 && eventTimer.innerHTML == `${seconds}s`)
    {eventTimer.style.color = "#FF0000";}

    if(currentTime > new Date(`July 31, 2025 00:00:00`))
    {eventTimer.innerHTML = "0"
    eventTimer.style.display = 'none';
    clearInterval(countdownInterval);}
}

homeButton.addEventListener("click",
function() {

    // location.replace("index.html");
    // location.replace("https://Z4ckStudios.com/index.html");
    location.replace("https://Z4ckStudios.github.io/Z4ckStudios/");
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

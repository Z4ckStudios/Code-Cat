//var url = "https://Z4ckStudios.com/TZP";
var url = "https://Z4ckStudios.github.io/Z4ckStudios/TZP";
window.history.replaceState(null, document.title, url);

var body = document.querySelector("body");
var eventTimer = document.querySelector(".eventTimer");
var homeButton = document.querySelector(".homeButton");
var TZPDarken = document.querySelector(".TZPDarken");
var FLBackground = document.querySelector(".FLBackground");
var TCTSText = document.querySelector(".TCTSText");
var FLTitle = document.querySelector(".FLTitle");
var TZPMix = document.querySelector(".TZPMix");
var TheZenProject = document.querySelector(".TheZenProject");
var boxSep = document.querySelector(".boxSep");

var DeviceRatio = localStorage.getItem("DeviceRatio");

if(window.innerWidth >= "1000")
{localStorage.setItem("DeviceRatio", "Desktop");}
else
if(window.innerWidth <= "1000")
{localStorage.setItem("DeviceRatio", "Mobile");}

if(DeviceRatio == "Desktop")
{body.style.background = "blue";}
else
if(DeviceRatio == "Mobile")
{body.style.background = "red";}

const countdownInterval = setInterval(countdownTimer, 1000);

function countdownTimer(){
    const time = new Date(`October 31, 2024 22:00:00`);
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

    if(currentTime > new Date(`October 31, 2024 22:00:00`))
    {eventTimer.innerHTML = "0"
    eventTimer.style.display = 'none';
    body.style.background = "black";
    TZPDarken.style.display = "none";
    TheZenProject.style.display = "inline";
    FLTitle.style.display = "inline";
    TCTSText.style.display = "inline";
    boxSep.style.display = "inline";
    clearInterval(countdownInterval);}
}

homeButton.addEventListener("click",
function() {

    //location.replace("index.html");
    //location.replace("https://Z4ckStudios.com/index.html");
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

TCTSText.addEventListener("click",
function() {

    if(TCTSText.innerHTML == "Season 1")
    {TheZenProject.style.display = "none";
    FLTitle.style.color = "rgb(200, 50, 50)";
    TCTSText.innerHTML = "Season 1: The Core That Sparks";
    TCTSText.style.left = "45.77%";
    TCTSText.style.color = "white";
    body.style.background = "#222222";
    boxSep.style.width = "99%";
    boxSep.style.left = "50%";
    boxSep.style.borderBottom = "1px solid #FFFFFF";
    boxSep.style.borderRight = "0px";
    boxSep.style.borderLeft = "0px";}
})
TCTSText.addEventListener("mouseover",
function() {

    if(TCTSText.innerHTML == "Season 1")
    {TCTSText.style.cursor = "pointer";
    TCTSText.style.color = "rgb(150, 25, 25)";}
})
TCTSText.addEventListener("mouseout",
function() {

    if(TCTSText.innerHTML == "Season 1")
    {TCTSText.style.cursor = "default";
    TCTSText.style.color = "rgb(200, 50, 50)";}
    else
    {TCTSText.style.cursor = "default";
    TCTSText.style.color = "rgb(255, 255, 255)";}
})

FLTitle.addEventListener("click",
function() {

    if(TCTSText.innerHTML == "Season 1: The Core That Sparks" && DeviceRatio == "Desktop")
    {TheZenProject.style.display = "inline";
    body.style.background = "black";
    TCTSText.style.color = "rgb(200, 50, 50)";
    TCTSText.innerHTML = "Season 1";
    TCTSText.style.left = "28.5%";
    FLTitle.style.left = "10.8%";
    FLTitle.style.color = "white";
    boxSep.style.width = "20.6%";
    boxSep.style.borderBottom = "0px";
    boxSep.style.borderRight = "1px solid white";
    boxSep.style.borderLeft = "1px solid white";}
    else
    if(TCTSText.innerHTML == "Season 1: The Core That Sparks" && DeviceRatio == "Mobile")
    {TheZenProject.style.display = "inline";
    body.style.background = "black";
    TCTSText.style.color = "rgb(200, 50, 50)";
    TCTSText.innerHTML = "Season 1";
    FLTitle.style.borderRight = "0px";
    FLTitle.style.paddingRight = "0px";
    FLTitle.style.borderLeft = "0px";
    FLTitle.style.paddingLeft = "0px";
    FLTitle.style.left = "100%";
    FLTitle.style.color = "white";
    boxSep.style.width = "20%";
    boxSep.style.borderBottom = "0px";
    boxSep.style.borderRight = "1px solid white";
    boxSep.style.borderLeft = "1px solid white";}
})
FLTitle.addEventListener("mouseover",
function() {

    if(TCTSText.innerHTML == "Season 1: The Core That Sparks")
    {FLTitle.style.cursor = "pointer";
    FLTitle.style.color = "rgb(150, 25, 25)";}
})
FLTitle.addEventListener("mouseout",
function() {

    if(TCTSText.innerHTML == "Season 1: The Core That Sparks")
    {FLTitle.style.cursor = "default";
    FLTitle.style.color = "rgb(200, 50, 50)";}
    else
    {FLTitle.style.cursor = "default";
    FLTitle.style.color = "rgb(255, 255, 255)";}
})

TZPMix.addEventListener("click",
function() {

    FLTitle.style.display = "none";
    TCTSText.style.display = "none";
    eventTimer.style.display = 'inline';
    FLBackground.style.display = "none";
    boxSep.style.display = "none";
    TZPMix.style.display = "none";

    eventTimer.innerHTML = "See you soon.. :)";

    let SYSTimer = 0;
    const SYSInterval = setInterval(SYSInt, 1000);

    function SYSInt() {
        SYSTimer++

        if(SYSTimer > 1)
        {FLTitle.style.display = "inline";
        TCTSText.style.display = "inline";
        eventTimer.style.display = 'none';
        TZPMix.style.display = "inline";
        boxSep.style.display = "inline";

        FLBackground.style.display = "inline";

        eventTimer.innerHTML = "0";
        clearInterval(SYSInterval);}
    }
})
TZPMix.addEventListener("mouseover",
function() {

    TZPMix.style.cursor = "pointer";
    TZPMix.style.opacity = "1";
})
TZPMix.addEventListener("mouseout",
function() {

    TZPMix.style.cursor = "default";
    TZPMix.style.opacity = "0";
})
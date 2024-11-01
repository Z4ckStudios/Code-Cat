//var url = "https://Z4ckStudios.com/TZP";
var url = "https://Z4ckStudios.github.io/Z4ckStudios/TZP";
window.history.replaceState(null, document.title, url);

var body = document.querySelector("body");
var eventTimer = document.querySelector(".eventTimer");
var homeButton = document.querySelector(".homeButton");
var TZPDarken = document.querySelector(".TZPDarken");
var FLBackground = document.querySelector(".FLBackground");
var FLBackgroundMobile = document.querySelector(".FLBackgroundMobile");
var TCTSText = document.querySelector(".TCTSText");
var FLTitle = document.querySelector(".FLTitle");
var TZPMix = document.querySelector(".TZPMix");
var TheZenProject = document.querySelector(".TheZenProject");
var boxSep = document.querySelector(".boxSep");

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

    location.replace("https://www.youtube.com/watch?v=GOr_cB_ZdRo&ab_channel=DefectiveC0deAnimations");
})
TCTSText.addEventListener("mouseover",
function() {

    TCTSText.style.cursor = "pointer";
    TCTSText.style.borderBottom = "2px solid #0000FF";
})
TCTSText.addEventListener("mouseout",
function() {

    TCTSText.style.cursor = "default";
    TCTSText.style.borderBottom = "none";
})

TZPMix.addEventListener("click",
function() {

    FLTitle.style.display = "none";
    TCTSText.style.display = "none";
    eventTimer.style.display = 'inline';
    FLBackground.style.display = "none";
    FLBackgroundMobile.style.display = "none";
    boxSep.style.display = "none";
    TZPMix.style.display = "none";

    eventTimer.innerHTML = "See you soon.. :)";

    if(TZPMix.style.fontSize = "24px")
    {let SYSTimer = 0;
    const SYSInterval = setInterval(SYSInt, 1000);

    function SYSInt() {
        SYSTimer++

        if(SYSTimer > 1)
        {FLTitle.style.display = "inline";
        TCTSText.style.display = "inline";
        eventTimer.style.display = 'none';
        boxSep.style.display = "inline";
        TZPMix.style.display = "inline";

        FLBackground.style.display = "inline";
        FLBackgroundMobile.style.display = "none";

        eventTimer.innerHTML = "0";
        clearInterval(SYSInterval);}
    }}

    if(TZPMix.style.fontSize = "14px")
    {let SYSTimer = 0;
    const SYSInterval = setInterval(SYSInt, 1000);

    function SYSInt() {
        SYSTimer++

        if(SYSTimer > 1)
        {FLTitle.style.display = "inline";
        TCTSText.style.display = "inline";
        eventTimer.style.display = 'none';
        boxSep.style.display = "inline";
        TZPMix.style.display = "inline";

        FLBackground.style.display = "none";
        FLBackgroundMobile.style.display = "inline";

        eventTimer.innerHTML = "0";
        clearInterval(SYSInterval);}
    }}
})
TZPMix.addEventListener("mouseover",
function() {

    TZPMix.style.cursor = "pointer";
    TZPMix.style.borderBottom = "2px solid #0000FF";
    TZPMix.style.opacity = "0.2";
})
TZPMix.addEventListener("mouseout",
function() {

    TZPMix.style.cursor = "default";
    TZPMix.style.borderBottom = "none";
    TZPMix.style.opacity = "0.1";
})
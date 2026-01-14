var url = "../Upcoming/";
window.history.replaceState(null, document.title, url);

var bgImg = document.getElementById("bgImg");

var HQbg = document.getElementById("HQbg");

var MainWrapper = document.getElementById("MainWrapper");
var PN = document.getElementById("PN");

var HQB = document.getElementById("HQB");
var HQBC = HQB.childNodes;

var HueQuest = document.getElementById("HueQuest");

var eventTimer = document.getElementById("eventTimer");
var homeButton = document.getElementById("homeButton");

var HQStatusExpired = localStorage.getItem("HQStatusExpired");

var HueQuestDate = new Date(`July 31, 2025 19:00:00`);

var DateList = [
    HueQuestDate,
];

var ProjectName = null;
var ProjectDate = null;

DateList.forEach(projectd => {
    ProjectDate = projectd;
});

var HQBExpired = false;

if(HQStatusExpired == "true") {
    HQBExpired = true;
}

setInterval(checkExpiry, 1);
function checkExpiry() {
    if(HQBExpired == true) {
        HQBC.forEach(child => {
            if(child.id == "ProjectStatusNE") {
                child.textContent = "Status: Closed";
                child.id = "ProjectStatusE";
            }
        })
    }
}

PN.style.width = `${PN.textContent.length-1}vw`;

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
        eventTimer.innerHTML = "Hue Quest is out now on PC platforms at: <a style='color: #FF5555; text-shadow: 0px 5px 10px #FF5555;' href='https://store.steampowered.com/app/4149900/Hue_Quest/'>store.steampowered.com/app/4149900/Hue_Quest/</a>";
        eventTimer.style.fontFamily = "monospace";
        eventTimer.style.fontSize = "3vw";
        eventTimer.style.textWrap = "wrap";
        eventTimer.style.width = "90vw";
        eventTimer.style.color = "#FFFFFF";
        eventTimer.style.textShadow = "0px 5px 10px #FFFFFF";
        localStorage.setItem("HQStatusExpired", true);

        HQBC.forEach(child => {
            if(child.id == "ProjectStatusNE") {
                child.textContent = "Status: Closed";
                child.id = "ProjectStatusE";
            }
        })
        clearInterval(countdownInterval);
    }
}

homeButton.addEventListener("click",
function() {
    if(homeButton.innerHTML == "← Back") {
        url = "../Upcoming/";
        window.history.replaceState(null, document.title, url);

        eventTimer.style.display = "none";
        bgImg.style.display = "inline";
        MainWrapper.style.display = "inline";
        HueQuest.style.display = "none";

        bgImg.style.opacity = 0.25;
        HQbg.style.opacity = 0;

        HQbg.style.width = `${40}vw`;

        homeButton.innerHTML = "← Back Home";
    } else {
        location.replace("../index.html");
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

PN.addEventListener("click",
function() {
    eventTimer.style.display = "inline";
    MainWrapper.style.display = "none";
    bgImg.style.display = "none";
    homeButton.innerHTML = "← Back";

    if(PN.parentElement.id == "HQB") {
        // url = "../Upcoming/Hue-Quest";
        // window.history.replaceState(null, document.title, url);

        ProjectName = "Hue Quest";
        ProjectDate = HueQuestDate;

        HueQuest.style.display = "inline";
        
        HQbg.style.width = `${100}vw`;

        let displaytimer = 0;
        const displayInterval = setInterval(displayInt, 1);

        function displayInt() {
            displaytimer++;

            if(displaytimer > 1) {
                bgImg.style.opacity = 0;
                HQbg.style.opacity = 0.25;
                clearInterval(displayInterval);
            }
        }
    }
})
PN.addEventListener("mouseover",
function() {
    bgImg.style.opacity = 0;
    
    if(PN.parentElement.id == "HQB") {
        PN.style.cursor = "pointer";
        PN.style.borderBottom = "1px solid #ffffff";
        HQbg.style.opacity = 0.25;
    }
})
PN.addEventListener("mouseout",
function() {
    bgImg.style.opacity = 0.25;
    
    if(PN.parentElement.id == "HQB") {
        PN.style.borderBottom = "none";
        HQbg.style.opacity = 0;
    }
})
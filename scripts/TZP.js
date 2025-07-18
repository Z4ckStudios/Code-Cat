// var url = "https://Z4ckStudios.com/TZP";
var url = "https://Z4ckStudios.github.io/Z4ckStudios/TZP";

if(document.baseURI == "https://z4ckstudios.github.io/Z4ckStudios/TZP.html") {
    window.history.replaceState(null, document.title, url);
}

var eventTimer = document.getElementById("eventTimer");
var homeButton = document.getElementById("homeButton");
var TZPDarken = document.getElementById("TZPDarken");
var FLBackground = document.getElementById("FLBackground");
var TCTSText = document.getElementById("TCTSText");
var FLTitle = document.getElementById("FLTitle");
var TZPMix = document.getElementById("TZPMix");
var TheZenProject = document.getElementById("TheZenProject");
var boxSep = document.getElementById("boxSep");
var TZPPadlock = document.getElementById("TZPPadlock");
var CodeInput = document.getElementById("CodeInput");
var VerifyButton = document.getElementById("VerifyButton");

var Input2 = document.getElementById("Input2");
var Input1 = document.getElementById("Input1");
var Input3 = document.getElementById("Input3");

var LockClick = new Audio();
LockClick.src = "assets/audio/ZS - Lock Click.mp3";

var DeviceRatio = localStorage.getItem("DeviceRatio");

if(window.innerWidth > window.innerHeight) {
    localStorage.setItem("DeviceRatio", "Landscape");
}
else
if(window.innerWidth < window.innerHeight) {
    localStorage.setItem("DeviceRatio", "Portrait");
}

if(DeviceRatio == "Landscape") {
    FLBackground.innerHTML = "red";
}
else
if(DeviceRatio == "Portrait") {
    FLBackground.innerHTML = "blue";
}

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

    if(currentTime > new Date(`October 31, 2024 22:00:00`)) {
        eventTimer.innerHTML = "~ Forbidden Entry ~";
        // eventTimer.style.display = "none";
        // document.body.style.background = "black";
        // TZPDarken.style.display = "none";
        // TheZenProject.style.display = "inline";
        // FLTitle.style.display = "inline";
        // TCTSText.style.display = "inline";
        // boxSep.style.display = "inline";
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

TCTSText.addEventListener("click",
function() {
    if(TCTSText.innerHTML == "Season 1") {
        TheZenProject.style.display = "none";
        FLTitle.style.color = "rgb(200, 50, 50)";
        TCTSText.innerHTML = "Season 1: The Core That Sparks";
        TCTSText.style.left = "45.77%";
        TCTSText.style.color = "white";
        document.body.style.background = "#222222";
        boxSep.style.width = "99%";
        boxSep.style.left = "50%";
        boxSep.style.borderBottom = "1px solid #FFFFFF";
        boxSep.style.borderRight = "0px";
        boxSep.style.borderLeft = "0px";
}
})
TCTSText.addEventListener("mouseover",
function() {
    if(TCTSText.innerHTML == "Season 1") {
        TCTSText.style.cursor = "pointer";
        TCTSText.style.color = "rgb(150, 25, 25)";
}
})
TCTSText.addEventListener("mouseout",
function() {
    if(TCTSText.innerHTML == "Season 1") {
        TCTSText.style.cursor = "default";
        TCTSText.style.color = "rgb(200, 50, 50)";
}
    else {
        TCTSText.style.cursor = "default";
        TCTSText.style.color = "rgb(255, 255, 255)";
}
})

FLTitle.addEventListener("click",
function() {
    if(TCTSText.innerHTML == "Season 1: The Core That Sparks" && DeviceRatio == "Desktop") {
        TheZenProject.style.display = "inline";
        document.body.style.background = "black";
        TCTSText.style.color = "rgb(200, 50, 50)";
        TCTSText.innerHTML = "Season 1";
        TCTSText.style.left = "28.5%";
        FLTitle.style.left = "10.8%";
        FLTitle.style.color = "white";
        boxSep.style.width = "20.6%";
        boxSep.style.borderBottom = "0px";
        boxSep.style.borderRight = "1px solid white";
        boxSep.style.borderLeft = "1px solid white";
    }
    else
    if(TCTSText.innerHTML == "Season 1: The Core That Sparks" && DeviceRatio == "Mobile") {
        TheZenProject.style.display = "inline";
        document.body.style.background = "black";
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
        boxSep.style.borderLeft = "1px solid white";
    }
})
FLTitle.addEventListener("mouseover",
function() {
    if(TCTSText.innerHTML == "Season 1: The Core That Sparks") {
        FLTitle.style.cursor = "pointer";
        FLTitle.style.color = "rgb(150, 25, 25)";
    }
})
FLTitle.addEventListener("mouseout",
function() {
    if(TCTSText.innerHTML == "Season 1: The Core That Sparks") {
        FLTitle.style.cursor = "default";
        FLTitle.style.color = "rgb(200, 50, 50)";
    }
    else {
        FLTitle.style.cursor = "default";
        FLTitle.style.color = "rgb(255, 255, 255)";
    }
})

TZPMix.addEventListener("click",
function() {
    FLTitle.style.display = "none";
    TCTSText.style.display = "none";
    eventTimer.style.display = "inline";
    FLBackground.style.display = "none";
    boxSep.style.display = "none";
    TZPMix.style.display = "none";

    eventTimer.innerHTML = "See you soon.. :)";

    let SYSTimer = 0;
    const SYSInterval = setInterval(SYSInt, 1000);

    function SYSInt() {
        SYSTimer++

        if(SYSTimer > 1) {
            if(TCTSText.style.display == "none") {
                eventTimer.innerHTML = "This project is currently being rebuilt, why'd you come back here?";

                TZPMix.style.display = "inline";
                eventTimer.style.display = "inline";
                FLBackground.style.display = "inline";
            }
            else {
                FLTitle.style.display = "inline";
                TCTSText.style.display = "inline";
                eventTimer.style.display = "none";
                TZPMix.style.display = "inline";
                boxSep.style.display = "inline";

                FLBackground.style.display = "inline";

                eventTimer.innerHTML = "0";
            }
            clearInterval(SYSInterval);
        }
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

TZPPadlock.addEventListener("click",
function() {
    if(CodeInput.className == "notVisible") {
        CodeInput.style.display = "inline";
        eventTimer.style.marginTop = "4.9%";
        eventTimer.style.top = "0%";
        eventTimer.style.transform = "";
        CodeInput.className = "visible";

        LockClick.src = "assets/audio/ZS - Lock Click.mp3";
        LockClick.play();
    }
    else
    if(CodeInput.className == "visible") {
        CodeInput.style.display = "none";
        eventTimer.style.color = "#ffffff";
        eventTimer.style.marginTop = "0%";
        eventTimer.style.top = "50%";
        eventTimer.style.transform = "translate(-50%, -50%)";
        eventTimer.innerHTML = "~ Forbidden Entry ~";
        eventTimer.style.fontSize = "4vw";
        Input2.innerHTML = "";
        Input1.innerHTML = "";
        Input3.innerHTML = "";
        CodeInput.className = "notVisible";
        
        LockClick.src = "assets/audio/ZS - Lock Click.mp3";
        LockClick.play();
    }
})
TZPPadlock.addEventListener("mouseover",
function() {
    TZPPadlock.style.cursor = "pointer";
})

Input2.addEventListener("click",
function() {
    Input2.innerHTML = "";
    Input2.style.cursor = "pointer";
})

Input1.addEventListener("click",
function() {
    Input1.innerHTML = "";
    Input1.style.cursor = "pointer";
})

Input3.addEventListener("click",
function() {
    Input3.innerHTML = "";
    Input3.style.cursor = "pointer";
})

var eventInfo = ["Fallen Lands - A story about many other stories being torn in two by AZT, all to protect the entity they call Z E N...", "Moreover, Fallen Lands is a combination of both TZP and AZT."];
var EI = 2;

A017Info = ["Term No.1 - A material capable of producing enough energy to rip a hole in the fabric of a universe, a gateway through the in between...", "Please contact your local authorities if you find this material being used, it is not to be created and risky if done."];
A017I = 2;

VerifyButton.addEventListener("click",
function() {
    if(Input2.innerHTML == "kay" &&
    Input1.innerHTML == "len" &&
    Input3.innerHTML == "ski") {
        eventTimer.innerHTML = "Term No.1 - Although being the 1st name, the Xâlãneí (zal - en - ãy) was first introduced.";
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
    }
    else
    if(Input2.innerHTML == "Ksalanskiy" &&
    Input1.innerHTML == "=" &&
    Input3.innerHTML == "Xâlãneí") {
        eventTimer.innerHTML = "6th Dimension Species - The Ksalanskiy and Xâlãneí are 2 names for the same beings.";
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
    }
    else
    if(Input2.innerHTML == "The" || Input2.innerHTML == "T" &&
    Input1.innerHTML == "Zen" || Input1.innerHTML == "Z" &&
    Input3.innerHTML == "Project" || Input3.innerHTML == "P") {
        eventTimer.innerHTML = "This project is currently being rebuilt, why'd you come back here?";
        eventTimer.style.marginTop = "0%";
        eventTimer.style.color = "#ffffff";
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.top = "50%";
        eventTimer.style.transform = "translate(-50%, -50%)";
        document.body.style.background = "black";
        TZPDarken.style.display = "none";
        TheZenProject.style.display = "inline";
        CodeInput.style.display = "none";
        TZPPadlock.style.display = "none";
    }
    else
    if(Input2.innerHTML == "Fallen" &&
    Input1.innerHTML == "Lands" &&
    Input3.innerHTML == "") {
        EI = EI < eventInfo.length ? ++EI : EI - 2;
        EI = EI < eventInfo.length ? +EI : EI - 2;
        eventTimer.innerHTML = eventInfo[EI];
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
    }
    else
    if(Input2.innerHTML == "Code" &&
    Input1.innerHTML == "" &&
    Input3.innerHTML == "") {
        eventTimer.innerHTML = "Haha, very funny. Have a Twitter link just for that.";
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
        window.open("https://twitter.com/Z4ckStudios");
    }
    else
    if(Input2.innerHTML == "zal" &&
    Input1.innerHTML == "en" &&
    Input3.innerHTML == "ãy") {
        eventTimer.innerHTML = "Term No.2 - The Xâlãneí, more commonly known as the Ksalanskiy. Entities from another Dimension, just beyond the walls of our own. The Ksalanskiy is a cannibalistic lifeform and seem to be smart enough to use said cannibalism as a threat towards one's own speices.";
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
    }
    else
    if(Input2.innerHTML == "9021" &&
    Input1.innerHTML == "2432" &&
    Input3.innerHTML == "0593") {
        eventTimer.innerHTML = "1921 Input Lock - Manufactured and used by Incentrix Labs for their convenience, this lock is entirely technology powered and cannot be bypassed as it contains no springs.";
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
    }
    else
    if(Input2.innerHTML == "Incentrix" &&
    Input1.innerHTML == "Labs" &&
    Input3.innerHTML == "") {
        eventTimer.innerHTML = "The Incentrix - A top secret government facility that will delete my programming if I tell you anything else about them, no one knows who they are or what they're capable of.";
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
    }
    else
    if(Input2.innerHTML == "Z" &&
    Input1.innerHTML == "E" &&
    Input3.innerHTML == "N") {
        eventTimer.innerHTML = "Project ZEN - An abandoned entity that only authorized personal are allowed to visit, they buried a safeguard against 'Artifact 017' in case crisis were to happen... again.";
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
    }
    else
    if(Input2.innerHTML == "A" &&
    Input1.innerHTML == "Z" &&
    Input3.innerHTML == "T") {
        eventTimer.innerHTML = "Gateway 101 - A man-eating horror show of a dimension called the 'Astral Zone of Timespace' that drives you to the point of insanity with its' white void and complete lack of physics.";
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
    }
    else
    if(Input2.innerHTML == "Artifact" &&
    Input1.innerHTML == "017" &&
    Input3.innerHTML == "") {
        eventTimer.innerHTML = "Term No.2 - The Artifact, more commonly known as 'Acrodite', a classified material responsible for the death of millions.";
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
    }
    else
    if(Input2.innerHTML == "Acrodite" &&
    Input1.innerHTML == "" &&
    Input3.innerHTML == "") {
        A017I = A017I < A017Info.length ? ++A017I : A017I - 2;
        A017I = A017I < A017Info.length ? +A017I : A017I - 2;
        eventTimer.innerHTML = A017Info[A017I];
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
    }
    else {
        eventTimer.innerHTML = "Invalid Input";
        eventTimer.style.fontSize = "4vw";
        eventTimer.style.color = "#ff0000";
    }
})
VerifyButton.addEventListener("mouseover",
function() {
    VerifyButton.style.cursor = "pointer";
    VerifyButton.style.background = "#005500";
    VerifyButton.style.border = "5px solid #003300";
})
VerifyButton.addEventListener("mouseout",
function() {
    VerifyButton.style.background = "green";
    VerifyButton.style.border = "5px solid darkgreen";
})
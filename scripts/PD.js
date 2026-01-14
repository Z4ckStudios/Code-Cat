var url = "../Project-Dashboard/";
window.history.replaceState(null, document.title, url);

var bgImg = document.getElementById("bgImg");

var TZPbg = document.getElementById("TZPbg");
var PFGbg = document.getElementById("PFGbg");
var Cbg = document.getElementById("Cbg");

var MainWrapper = document.getElementById("MainWrapper");
var PN = document.getElementById("PN");

var TZPWrapper = document.getElementById("TZPWrapper");
var eventTimer = document.getElementById("eventTimer");
var homeButton = document.getElementById("homeButton");
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

var InputList = [
    Input2,
    Input1,
    Input3,
];

var LockClick = new Audio();
LockClick.src = "assets/audio/ZS - Lock Click.mp3";

function PNNLClicked() {
    MainWrapper.style.display = "none";
    bgImg.style.display = "none";
    homeButton.innerHTML = "← Back";
}

var PNlist = MainWrapper.childNodes;

for(i = 1; i < PNlist.length; i += 2) {
    console.log(PNlist[i])
    PNlist[i].style.width = `${PNlist[i].textContent.length-1}vw`;
}

PNlist.forEach(node => {
    node.addEventListener("click",
    function() {
        if(node.textContent == "The Zen Project") {
            url = "../Project-Dashboard/The-Zen-Project";
            window.history.replaceState(null, document.title, url);

            TZPWrapper.style.display = "inline";
            TZPbg.style.width = `${100}vw`;
            PNNLClicked();
        }
        if(node.textContent == "Project FoxGrounds") {
            window.open("https://Z4ckStudios.github.io/FoxGrounds")
        }
        if(node.textContent == "Ciphered") {
            window.open("https://Z4ckStudios.github.io/Ciphered")
        }

        let displaytimer = 0;
        const displayInterval = setInterval(displayInt, 1);

        function displayInt() {
            displaytimer++;

            if(displaytimer > 1) {
                if(node.textContent == "The Zen Project") {
                    TZPbg.style.opacity = 0.25;
                    bgImg.style.opacity = 0;
                }

                clearInterval(displayInterval);
            }
        }
    })
    node.addEventListener("mouseover",
    function() {
        node.style.cursor = "pointer";
        node.style.borderBottom = "1px solid #ffffff";
        bgImg.style.opacity = 0;
        
        if(node.textContent == "The Zen Project") {
            TZPbg.style.opacity = 0.25;
        }
        if(node.textContent == "Project FoxGrounds") {
            PFGbg.style.opacity = 0.25;
        }
        if(node.textContent == "Ciphered") {
            Cbg.style.opacity = 0.25;
        }
    })
    node.addEventListener("mouseout",
    function() {
        bgImg.style.opacity = 0.25;
        node.style.borderBottom = "none";
        
        if(node.textContent == "The Zen Project") {
            TZPbg.style.opacity = 0;
        }
        if(node.textContent == "Project FoxGrounds") {
            PFGbg.style.opacity = 0;
        }
        if(node.textContent == "Ciphered") {
            Cbg.style.opacity = 0;
        }
    })
})

eventTimer.innerHTML = "~ Forbidden Entry ~";

homeButton.addEventListener("click",
function() {
    if(TZPPadlock.style.display == "none") {
        TZPbg.style.display = "inline";
        eventTimer.innerHTML = "~ Forbidden Entry ~";
        eventTimer.style.fontSize = "4vw";
        TheZenProject.style.display = "none";
        TZPPadlock.style.display = "inline";
        CodeInput.className = "notVisible";
    }
    else
    if(MainWrapper.style.display == "none") {
        url = "../Project-Dashboard/";
        window.history.replaceState(null, document.title, url);

        bgImg.style.display = "inline";
        MainWrapper.style.display = "inline";
        TZPWrapper.style.display = "none";

        bgImg.style.opacity = 0.25;
        TZPbg.style.opacity = 0;
        TZPbg.style.width = `${40}vw`;

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
    if(TCTSText.innerHTML == "Season 1: The Core That Sparks") {
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
    if(TCTSText.innerHTML == "Season 1: The Core That Sparks") {
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
    TZPbg.style.display = "none";
    homeButton.style.display = "none";

    eventTimer.innerHTML = "See you soon... :)";

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
                homeButton.style.display = "inline";
            }
            else {
                FLTitle.style.display = "inline";
                TCTSText.style.display = "inline";
                eventTimer.style.display = "none";
                TZPMix.style.display = "inline";
                boxSep.style.display = "inline";
                TZPbg.style.display = "inline";
                homeButton.style.display = "inline";

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
        InputList.forEach(input => {
            input.innerHTML = "";
        })
        CodeInput.className = "notVisible";
        
        LockClick.src = "assets/audio/ZS - Lock Click.mp3";
        LockClick.play();
    }
})
TZPPadlock.addEventListener("mouseover",
function() {
    TZPPadlock.style.cursor = "pointer";
})

InputList.forEach(input => {
    input.addEventListener("click",
    function() {
        input.innerHTML = "";
        input.style.cursor = "pointer";
    })
})

var eventInfo = ["Fallen Lands - A story about many other stories being torn in two by AZT, all to protect the entity they call Z E N...", "Moreover, Fallen Lands is a combination of both TZP and AZT."];
var EI = 2;

A017Info = ["Term No.1 - A material capable of producing enough energy to rip a hole in the fabric of a universe, a gateway through the in-between...", "Please contact your local authorities if you find this material being used, it is not to be created and risky if done."];
A017I = 2;

VerifyButton.addEventListener("click",
function() {
    if(Input2.innerHTML.toLowerCase() == "kay" &&
    Input1.innerHTML.toLowerCase() == "len" &&
    Input3.innerHTML.toLowerCase() == "ski") {
        eventTimer.innerHTML = "Term No.1 - Although being the 1st name, the Xâlãneí (zal - en - ãy) was first introduced.";
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
    }
    else
    if(Input2.innerHTML.toLowerCase() == "ksalanskiy" &&
    Input1.innerHTML == "=" &&
    Input3.innerHTML.toLowerCase() == "xâlãneí") {
        eventTimer.innerHTML = "6th Dimension Species - The Ksalanskiy and Xâlãneí are 2 names for the same beings.";
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
    }
    else
    if(Input2.innerHTML.toLowerCase() == "the" || Input2.innerHTML.toLowerCase() == "t" &&
    Input1.innerHTML.toLowerCase() == "zen" || Input1.innerHTML.toLowerCase() == "z" &&
    Input3.innerHTML.toLowerCase() == "project" || Input3.innerHTML.toLowerCase() == "p") {
        eventTimer.innerHTML = "This project is currently being rebuilt, why'd you come back here?";
        eventTimer.style.marginTop = "0%";
        eventTimer.style.color = "#ffffff";
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.top = "50%";
        eventTimer.style.transform = "translate(-50%, -50%)";
        TheZenProject.style.display = "inline";
        CodeInput.style.display = "none";
        TZPPadlock.style.display = "none";
        InputList.forEach(input => {
            input.innerHTML = "";
        })
    }
    else
    if(Input2.innerHTML.toLowerCase() == "fallen" &&
    Input1.innerHTML.toLowerCase() == "lands" &&
    Input3.innerHTML == "") {
        EI = EI < eventInfo.length ? ++EI : EI - 2;
        EI = EI < eventInfo.length ? +EI : EI - 2;
        eventTimer.innerHTML = eventInfo[EI];
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
    }
    else
    if(Input2.innerHTML.toLowerCase() == "code" &&
    Input1.innerHTML == "" &&
    Input3.innerHTML == "") {
        eventTimer.innerHTML = "Haha, very funny. Have a Twitter link just for that.";
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
        window.open("https://twitter.com/Z4ckStudios");
    }
    else
    if(Input2.innerHTML.toLowerCase() == "zal" &&
    Input1.innerHTML.toLowerCase() == "en" &&
    Input3.innerHTML.toLowerCase() == "ãy") {
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
    if(Input2.innerHTML.toLowerCase() == "incentrix" &&
    Input1.innerHTML.toLowerCase() == "labs" &&
    Input3.innerHTML == "") {
        eventTimer.innerHTML = "The Incentrix - A top secret government facility that will delete my programming if I tell you anything else about them, no one knows who they are or what they're capable of.";
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
    }
    else
    if(Input2.innerHTML.toLowerCase() == "z" &&
    Input1.innerHTML.toLowerCase() == "e" &&
    Input3.innerHTML.toLowerCase() == "n") {
        eventTimer.innerHTML = "Project ZEN - An abandoned entity that only authorized personal are allowed to visit, they buried a safeguard against 'Artifact 017' in case crisis were to happen... again.";
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
    }
    else
    if(Input2.innerHTML.toLowerCase() == "a" &&
    Input1.innerHTML.toLowerCase() == "z" &&
    Input3.innerHTML.toLowerCase() == "t") {
        eventTimer.innerHTML = "Gateway 101 - A man-eating horror show of a dimension called the 'Astral Zone of Timespace' that drives you to the point of insanity with its' white void and complete lack of physics.";
        eventTimer.style.fontSize = "2vw";
        eventTimer.style.color = "#ffffff";
    }
    else
    if(Input2.innerHTML.toLowerCase() == "artifact" &&
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
    VerifyButton.style.background = "#550000";
    VerifyButton.style.border = "5px solid #220000";
    VerifyButton.style.color = "#ffffff";
})
VerifyButton.addEventListener("mouseout",
function() {
    VerifyButton.style.cursor = "default";
    VerifyButton.style.background = "transparent";
    VerifyButton.style.border = "5px solid #000000";
    VerifyButton.style.color = "#AAAAAA";
})
var url = "../Game-Dashboard";
window.history.replaceState(null, document.title, url);

var bgcss = document.getElementById("bgcss");

var imgList = [
    "../assets/images/TheCG.png",
    "../assets/images/HQLogo.png",
];

var gameList = [
    "The Colors Game",
    "Hue Quest",
];
var ACList = [
    "TCG",
    "HQ",
];
var genreList = [
    "Strategy",
    "Adventure",
];

var buttonsList = [];

for(let i = 1; i < 3; i++) {
    var gameObject = document.createElement("div");
    var gameBackground = document.createElement("p");
    var gameBorder = document.createElement("p");
    var gameImg = document.createElement("img");
    var gameTitle = document.createElement("p");
    var gameSubTitle = document.createElement("p");
    var gameGenre = document.createElement("p");
    var windowsPlatform = document.createElement("img");
    var gameButton = document.createElement("p");

    var posDirectory = 10;

    var textList = [
      gameTitle,
      gameSubTitle,
      gameGenre,
    ];

    buttonsList.push(gameButton);

    gameObject.id = "gameObject" + i;

    gameBackground.id = "gameBackground";
    gameBorder.id = "gameBorder";
    gameImg.id = "gameImg";
    gameTitle.id = "gameTitle";
    gameSubTitle.id = "gameSubTitle";
    gameGenre.id = "gameGenre";
    windowsPlatform.id = "windowsPlatform";

    gameButton.id = "gameButton" + i;

    gameImg.draggable = false;
    windowsPlatform.draggable = false;

    gameImg.src = imgList[i-1];

    gameTitle.textContent = gameList[i-1];
    gameSubTitle.textContent = ACList[i-1];
    gameGenre.textContent = genreList[i-1];

    for(let a = 0; a < textList.length; a++) {
        textList[a].style.top = `${posDirectory}vw`;
        if(a == textList.length-1) {
            windowsPlatform.style.top = `${posDirectory}vw`;
        }
        
        posDirectory++;
    }

    if(gameTitle.textContent == gameList[0]) {
        windowsPlatform.className = "windows";
        windowsPlatform.id = "";
    }

    windowsPlatform.src = "../assets/images/WindowsLogo.png";

    bgcss.appendChild(gameObject);
    gameObject.appendChild(gameBackground);
    gameObject.appendChild(gameBorder);
    gameObject.appendChild(gameImg);
    gameObject.appendChild(gameTitle);
    gameObject.appendChild(gameSubTitle);
    gameObject.appendChild(gameGenre);
    gameObject.appendChild(windowsPlatform);
    gameObject.appendChild(gameButton);
}

var InstructionWrapper = document.getElementById("InstructionWrapper");
var closeIWB = document.getElementById("closeIWB");

var homeButton = document.getElementById("homeButton");

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

closeIWB.addEventListener("mousedown",
function() {
    InstructionWrapper.style.display = "none";
})
closeIWB.addEventListener("mouseover",
function() {
    closeIWB.style.cursor = "pointer";
    closeIWB.style.border = "2.5px solid #222222";
    closeIWB.style.background = "#555555";
})
closeIWB.addEventListener("mouseout",
function() {
    closeIWB.style.border = "2.5px solid #555555";
    closeIWB.style.background = "#777777";
})

var gameLinks = [
    "https://z4ckstudios.itch.io/thecolorsgame",
    "https://store.steampowered.com/app/4149900/Hue_Quest/",
];
var extraGL = [
    "../Game-Dashboard.html",
    "https://z4ckstudios.itch.io/huequest",
];

buttonsList.forEach(element => {
    element.addEventListener("mousedown",
    function() {
        for(let i = 0; i < gameList.length; i++) {
            if(element.id == "gameButton" + parseInt(i+1)) {
                window.open(gameLinks[i]);
                location.replace(extraGL[i]);
            }
        }
    })
    element.addEventListener("mouseover",
    function() {
        element.style.cursor = "pointer";
    })
});
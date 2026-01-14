import {CNum, CText} from "./ChangelogElems.js";

var url = "../";
window.history.replaceState(null, document.title, url);

var CWrapper = document.getElementById("CWrapper");

var LinksWrapper = document.getElementById("LinksWrapper");
var OSMPanelB = document.getElementById("OSMPanelB");

var ZSChangelog = document.getElementById("ZSChangelog");
var CChangelogB = document.getElementById("CChangelogB");

var DockButtons = document.getElementById("DockButtons");
var VisualDocks = document.getElementById("VisualDocks");

var TwitterB = document.getElementById("TwitterB");
var YTB = document.getElementById("YTB");
var TwitchB = document.getElementById("TwitchB");
var DiscordB = document.getElementById("DiscordB");

var pagesWrapper = document.getElementById("pagesWrapper");
var PWChildren = pagesWrapper.childNodes;

var PageContent = [
    "Upcoming",
    "Project Dashboard",
    "Game Dashboard",
    "About Us",
    "",
];

for(let i = 0; i < 3; i++) {
    var PageSep = document.createElement("span");
    var Page = PageSep.cloneNode();

    PageSep.id = "PageSlash" + [i+1];
    PageSep.className = "SLNum";
    PageSep.textContent = " / ";

    Page.id = "Page" + [i+1];
    Page.textContent = PageContent[i];

    pagesWrapper.appendChild(PageSep);
    pagesWrapper.appendChild(Page);
}

var dockSwitcher = document.getElementById("dockSwitcher");
var pageSwitcher = document.getElementById("pageSwitcher");

var LWStatus = localStorage.getItem("LWStatus");
var ZSCStatus = localStorage.getItem("ZSCStatus");
var CurrentSwitcher = localStorage.getItem("CurrentSwitcher");
var Pages = localStorage.getItem("Pages");

var CNEList = [];

for(let i = 0; i < CText.length; i++) {
    CNum[i].id = "C" + [i+1];
    CNum[i].textContent = CText[i];

    CNEList.push(CNum[i]);
    CWrapper.appendChild(CNum[i]);
}

for(let i = 0; i < CText.length; i++) {
    if(CNEList[i].textContent.includes("/~")) {
        CNEList[i].style.color = "#808080";
        CNEList[i].style.textAlign = "left";
        CNEList[i].style.fontSize = "0.6vw";
        CNEList[i].style.lineHeight = "normal";
        CNEList[i].textContent = CNEList[i].textContent.replace("/~", "");
    } else {
        CNEList[i].style.color = "#ffffff";
        CNEList[i].style.lineHeight = "normal";
        CNEList[i].style.marginTop = `${10}%`;
    }
}

if(CurrentSwitcher == null, "pageSwitcher") {
    // url = "../Pages";
    // window.history.replaceState(null, document.title, url);

    pageSwitcher.style.display = "inline";
    dockSwitcher.style.display = "none";
    pagesWrapper.style.display = "inline";
}
if(CurrentSwitcher == "dockSwitcher") {
    // url = "../Docks";
    // window.history.replaceState(null, document.title, url);

    pageSwitcher.style.display = "none";
    dockSwitcher.style.display = "inline";
    pagesWrapper.style.display = "none";
}

if(Pages == null, "true") {
    DockButtons.style.display = "none";
    VisualDocks.style.display = "none";
}

if(CurrentSwitcher == "dockSwitcher") {
    DockButtons.style.display = "inline";
    VisualDocks.style.display = "inline";
}

if(LWStatus == null, "Closed") {
    LinksWrapper.style.bottom = `${-50.7}vh`;
    OSMPanelB.style.color = "#00ff00";
    OSMPanelB.textContent = "< Open SM Panel >";
}
if(LWStatus == "Open") {
    LinksWrapper.style.bottom = `${0}vh`;
    OSMPanelB.style.color = "#ff0000";
    OSMPanelB.textContent = "> Close SM Panel <";
}

if(ZSCStatus == null, "Open") {
    ZSChangelog.style.right = `${0}vw`;
    CChangelogB.style.color = "#ff0000";
    CChangelogB.textContent = "> Close Changelog <";
}
if(ZSCStatus == "Closed") {
    ZSChangelog.style.right = `${-23.9}vw`;
    CChangelogB.style.color = "#00ff00";
    CChangelogB.textContent = "< Open Changelog >";
}

pageSwitcher.addEventListener("click",
function() {
    // url = "../Docks";
    // window.history.replaceState(null, document.title, url);

    localStorage.setItem("Pages", "false");

    pageSwitcher.style.display = "none";
    dockSwitcher.style.display = "inline";

    localStorage.setItem("CurrentSwitcher", "dockSwitcher");

    pagesWrapper.style.display = "none";
    DockButtons.style.display = "inline";
    VisualDocks.style.display = "inline";
})
pageSwitcher.addEventListener("mouseover",
function() {
    pageSwitcher.style.opacity = "1";
    pageSwitcher.style.border = "1px solid rgb(0, 255, 255)";
    pageSwitcher.style.background = "none";
    pageSwitcher.style.cursor = "pointer";
})
pageSwitcher.addEventListener("mouseout",
function() {
    pageSwitcher.style.opacity = "0.5";
    pageSwitcher.style.border = "none";
    pageSwitcher.style.background = "rgb(15, 15, 15)";
    pageSwitcher.style.cursor = "default";
})

dockSwitcher.addEventListener("click",
function() {
    // url = "../Pages";
    // window.history.replaceState(null, document.title, url);
    
    localStorage.setItem("Pages", "true");

    pageSwitcher.style.display = "inline";
    dockSwitcher.style.display = "none";

    localStorage.setItem("CurrentSwitcher", "pageSwitcher");

    pagesWrapper.style.display = "inline";
    DockButtons.style.display = "none";
    VisualDocks.style.display = "none";
})
dockSwitcher.addEventListener("mouseover",
function() {
    dockSwitcher.style.opacity = "1";
    dockSwitcher.style.cursor = "pointer";
    dockSwitcher.style.textDecoration = "underline";
})
dockSwitcher.addEventListener("mouseout",
function() {
    dockSwitcher.style.opacity = "0.5";
    dockSwitcher.style.cursor = "default";
    dockSwitcher.style.textDecoration = "none";
})

PWChildren.forEach(page => {
    if(page.id == "Page1") {
        page.addEventListener("click",
        function() {
            location.replace("../Upcoming.html");
        })
    }
    if(page.id == "Page2") {
        page.addEventListener("click",
        function() {    
            location.replace("../Project-Dashboard.html");
        })
    }
    if(page.id == "Page3") {
        page.addEventListener("click",
        function() {
            location.replace("../Game-Dashboard.html");
        })
    }
    if(page.id == "Page1" ||
    page.id == "Page2" ||
    page.id == "Page3"||
    page.id == "Page4" ||
    page.id == "Page5") {
        page.addEventListener("mouseover",
        function() {
            page.style.opacity = "1";
            page.style.textDecoration = "underline";
            page.style.cursor = "pointer";
        })
        page.addEventListener("mouseout",
        function() {
            page.style.opacity = "0.5";
            page.style.textDecoration = "none";
            page.style.cursor = "default";
        })
    }
})

OSMPanelB.addEventListener("click",
function() {
    if(LinksWrapper.style.bottom == `${-50.7}vh`) {
        LinksWrapper.style.bottom = `${0}vh`;
        OSMPanelB.style.color = "#ff0000";
        OSMPanelB.style.border = "1px solid #ff0000";
        OSMPanelB.textContent = "> Close SM Panel <";

        localStorage.setItem("LWStatus", "Open");
    } else {
        LinksWrapper.style.bottom = `${-50.7}vh`;
        OSMPanelB.style.color = "#00ff00";
        OSMPanelB.style.border = "1px solid #00ff00";
        OSMPanelB.textContent = "< Open SM Panel >";

        localStorage.setItem("LWStatus", "Closed");
    }
})
OSMPanelB.addEventListener("mouseover",
function() {
    OSMPanelB.style.opacity = "1";
    OSMPanelB.style.background = "none";
    OSMPanelB.style.cursor = "pointer";

    if(LinksWrapper.style.bottom == `${-50.7}vh`) {
        OSMPanelB.style.border = "1px solid #00ff00";
    } else {
        OSMPanelB.style.border = "1px solid #ff0000";
    }
})
OSMPanelB.addEventListener("mouseout",
function() {
    OSMPanelB.style.opacity = "0.5";
    OSMPanelB.style.border = "none";
    OSMPanelB.style.background = "rgb(15, 15, 15)";
})

CChangelogB.addEventListener("click",
function() {
    if(ZSChangelog.style.right == `${0}vw`) {
        ZSChangelog.style.right = `${-23.9}vw`;
        CChangelogB.style.color = "#00ff00";
        CChangelogB.style.border = "1px solid #00ff00";
        CChangelogB.textContent = "< Open Changelog >";
        
        localStorage.setItem("ZSCStatus", "Closed");
    } else {
        ZSChangelog.style.right = `${0}vw`;
        CChangelogB.style.color = "#ff0000";
        CChangelogB.style.border = "1px solid #ff0000";
        CChangelogB.textContent = "> Close Changelog <";

        localStorage.setItem("ZSCStatus", "Open");
    }
})
CChangelogB.addEventListener("mouseover",
function() {
    CChangelogB.style.opacity = "1";
    CChangelogB.style.background = "none";
    CChangelogB.style.cursor = "pointer";

    if(ZSChangelog.style.right == `${-23.9}vw`) {
        CChangelogB.style.border = "1px solid #00ff00";
    } else {
        CChangelogB.style.border = "1px solid #ff0000";
    }
})
CChangelogB.addEventListener("mouseout",
function() {
    CChangelogB.style.opacity = "0.5";
    CChangelogB.style.border = "none";
    CChangelogB.style.background = "rgb(15, 15, 15)";
})

TwitterB.addEventListener("click",
function() {

    window.open("https://twitter.com/Ph4nt0mZStudios");
})
TwitterB.addEventListener("mouseover",
function() {

    TwitterB.style.width = "110%";
    TwitterB.style.marginLeft = "-5%";
    TwitterB.style.cursor = "pointer";
})
TwitterB.addEventListener("mouseout",
function() {
    
    TwitterB.style.width = "100%";
    TwitterB.style.marginLeft = "0%";
})

YTB.addEventListener("click",
function() {

    window.open("https://youtube.com/@Ph4nt0mZStudios");
})
YTB.addEventListener("mouseover",
function() {

    YTB.style.width = "110%";
    YTB.style.marginLeft = "-5%";
    YTB.style.cursor = "pointer";
})
YTB.addEventListener("mouseout",
function() {
    
    YTB.style.width = "100%";
    YTB.style.marginLeft = "0%";
})

TwitchB.addEventListener("click",
function() {

    window.open("https://twitch.tv/Z4ckStudios");
})
TwitchB.addEventListener("mouseover",
function() {

    TwitchB.style.width = "110%";
    TwitchB.style.marginLeft = "-5%";
    TwitchB.style.cursor = "pointer";
})
TwitchB.addEventListener("mouseout",
function() {
    
    TwitchB.style.width = "100%";
    TwitchB.style.marginLeft = "0%";
})

DiscordB.addEventListener("click",
function() {

    window.open("https://discord.gg/37uZ7ty9qW");
})
DiscordB.addEventListener("mouseover",
function() {

    DiscordB.style.width = "110%";
    DiscordB.style.marginLeft = "-5%";
    DiscordB.style.cursor = "pointer";
})
DiscordB.addEventListener("mouseout",
function() {
    
    DiscordB.style.width = "100%";
    DiscordB.style.marginLeft = "0%";
})
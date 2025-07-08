// var url = "https://Z4ckStudios.com/";
var url = "https://Z4ckStudios.github.io/Z4ckStudios/";

if(document.baseURI == "https://z4ckstudios.github.io/Z4ckStudios/index.html") {
    window.history.replaceState(null, document.title, url);
}

var CWrapper = document.getElementById("CWrapper");

var LinksWrapper = document.getElementById("LinksWrapper");
var OSMPanelB = document.getElementById("OSMPanelB");
var CSMPanelB = document.getElementById("CSMPanelB");

var ZSChangelog = document.getElementById("ZSChangelog");
var OChangelogB = document.getElementById("OChangelogB");
var CChangelogB = document.getElementById("CChangelogB");

var TwitterB = document.getElementById("TwitterB");
var YTB = document.getElementById("YTB");
var TwitchB = document.getElementById("TwitchB");
var DiscordB = document.getElementById("DiscordB");

var pagesWrapper = document.getElementById("pagesWrapper");
var Page1 = document.getElementById("Page1");
var Page2 = document.getElementById("Page2");
var Page3 = document.getElementById("Page3");
var Page4 = document.getElementById("Page4");
var Page5 = document.getElementById("Page5");

var dockSwitcher = document.getElementById("dockSwitcher");
var pageSwitcher = document.getElementById("pageSwitcher");

var DConsoleText = document.getElementById("DConsoleText");
var DConsoleButton = document.getElementById("DConsoleButton");
var ZSIPortfolio = document.getElementById("ZSIPortfolio");

var LWStatus = localStorage.getItem("LWStatus");
var ZSCStatus = localStorage.getItem("ZSCStatus");
var CurrentSwitcher = localStorage.getItem("CurrentSwitcher");
var Pages = localStorage.getItem("Pages");
var HostedIP = localStorage.getItem("HostedIP");

var C1 = document.createElement("p");
var C2 = C1.cloneNode(); var C3 = C1.cloneNode(); var C4 = C1.cloneNode(); var C5 = C1.cloneNode(); var C6 = C1.cloneNode(); var C7 = C1.cloneNode(); var C8 = C1.cloneNode(); var C9 = C1.cloneNode(); var C10 = C1.cloneNode(); var C11 = C1.cloneNode(); var C12 = C1.cloneNode(); var C13 = C1.cloneNode(); var C14 = C1.cloneNode(); var C15 = C1.cloneNode(); var C16 = C1.cloneNode(); var C17 = C1.cloneNode(); var C18 = C1.cloneNode(); var C19 = C1.cloneNode(); var C20 = C1.cloneNode(); var C21 = C1.cloneNode(); var C22 = C1.cloneNode(); var C23 = C1.cloneNode(); var C24 = C1.cloneNode(); var C25 = C1.cloneNode(); var C26 = C1.cloneNode(); var C27 = C1.cloneNode(); var C28 = C1.cloneNode(); var C29 = C1.cloneNode(); var C30 = C1.cloneNode(); var C31 = C1.cloneNode(); var C32 = C1.cloneNode(); var C33 = C1.cloneNode(); var C34 = C1.cloneNode(); var C35 = C1.cloneNode(); var C36 = C1.cloneNode(); var C37 = C1.cloneNode(); var C38 = C1.cloneNode(); var C39 = C1.cloneNode(); var C40 = C1.cloneNode(); var C41 = C1.cloneNode(); var C42 = C1.cloneNode(); var C43 = C1.cloneNode(); var C44 = C1.cloneNode(); var C45 = C1.cloneNode(); var C46 = C1.cloneNode(); var C47 = C1.cloneNode(); var C48 = C1.cloneNode(); var C49 = C1.cloneNode(); var C50 = C1.cloneNode(); var C51 = C1.cloneNode(); var C52 = C1.cloneNode();

var CText = [
    `+ "PZS" has been renamed to "Z4ck Studios"`,
    `(6/16/2024 7:29 AM GMT-6)`,
    `+ Added the "Z4ck Studios - Changelog"`,
    `(6/16/2024 7:38 AM GMT-6)`,
    `+ Added the Z4ck Studios Social Media slider`,
    `(6/16/2024 7:41 AM GMT-6)`,
    `- Removed the unecessary background links`,
    `(6/16/2024 7:51 AM GMT-6)`,
    `+ Changed the site Logo`,
    `(6/16/2024 7:52 AM GMT-6)`,
    `+ Added Javascript functions`,
    `(6/16/2024 7:53 AM GMT-6)`,
    `+ Changed the CSS path`,
    `(6/16/2024 7:53 AM GMT-6)`,
    `+ Moved the personality introduction to the top of the page`,
    `(6/16/2024 7:55 AM GMT-6)`,
    `+ Created a Site domain to appeal more visually`,
    `(6/16/2024 7:57 AM GMT-6)`,
    `- Removed User-Select permissions`,
    `(6/16/2024 7:58 AM GMT-6)`,
    `+ Changed the Scrollbar visuals`,
    `(6/16/2024 8:22 AM GMT-6)`,
    `+ Added save functions through localStorage`,
    `(6/16/2024 8:54 AM GMT-6)`,
    `+ Added a cool LED lights background`,
    `(6/16/2024 10:13 AM GMT-6)`,
    `+ Added reverse ending to the LED lights background to create seamless visuals`,
    `(6/16/2024 11:50 AM GMT-6)`,
    `+ Added site Logos to Social Media name URLs`,
    `(6/16/2024 12:37 PM GMT-6)`,
    `+ Added hover popouts for Social Media Links`,
    `(6/16/2024 1:34 PM GMT-6)`,
    `+ Changed Trigger Buttons theme`,
    `(6/16/2024 2:25 PM GMT-6)`,
    `+ Added Changelog configuration button`,
    `(6/16/2024 2:27 PM GMT-6)`,
    `+ Added Javascript functions for the Changelog position`,
    `(6/16/2024 3:10 PM GMT-6)`,
    `+ Changed the way Social hovers react upon mouse hover`,
    `(7/1/2024 10:45 AM GMT-6)`,
    `+ Added Main Title borders`,
    `(8/2/2024 8:59 PM GMT-6)`,
    `+ Finally added mobile config (Hello mobile users!)`,
    `(8/19/2024 4:00 AM GMT-6)`,
    `+ Yet again, some more bug fixes`,
    `(8/19/2024 4:55 AM GMT-6)`,
    `+ Added mobile portrait indicators to all html pages`,
    `(8/21/2024 3:43 AM GMT-6)`,
    `+ Fixed the Pages view for mobile devices`,
    `(8/21/2024 3:45 AM GMT-6)`,
    `+ Added a "Back Home" button to all current active html timers`,
    `(8/21/2024 3:46 AM GMT-6)`,
];
var CT = 0;

var CNum = [
    C1,C2,C3,C4,C5,C6,C7,C8,C9,C10,C11,C12,C13,C14,C15,C16,C17,C18,C19,C20,C21,C22,C23,C24,C25,C26,C27,C28,C29,C30,C31,C32,C33,C34,C35,C36,C37,C38,C39,C40,C41,C42,C43,C44,C45,C46,C47,C48,C49,C50,C51,C52,
];
var CList = [
    {name: "C1"},{name: "C2"},{name: "C3"},{name: "C4"},{name: "C5"},{name: "C6"},{name: "C7"},{name: "C8"},{name: "C9"},{name: "C10"},{name: "C11"},{name: "C12"},{name: "C13"},{name: "C14"},{name: "C15"},{name: "C16"},{name: "C17"},{name: "C18"},{name: "C19"},{name: "C20"},{name: "C21"},{name: "C22"},{name: "C23"},{name: "C24"},{name: "C25"},{name: "C26"},{name: "C27"},{name: "C28"},{name: "C29"},{name: "C30"},{name: "C31"},{name: "C32"},{name: "C33"},{name: "C34"},{name: "C35"},{name: "C36"},{name: "C37"},{name: "C38"},{name: "C39"},{name: "C40"},{name: "C41"},{name: "C42"},{name: "C43"},{name: "C44"},{name: "C45"},{name: "C46"},{name: "C47"},{name: "C48"},{name: "C49"},{name: "C50"},{name: "C51"},{name: "C52"},
];
var CL = 0;

for(let i = 0; i < CText.length; i++) {
    CNum[CL].id = CList[CL].name;
    CNum[CL].textContent = CText[CT];

    CWrapper.appendChild(CNum[CL]);

    CL += 1;
    CT += 1;
}

if(CurrentSwitcher == null, "pageSwitcher")
{pageSwitcher.style.display = "inline";
dockSwitcher.style.display = "none";
pagesWrapper.style.display = "inline";}

if(CurrentSwitcher == "dockSwitcher")
{pageSwitcher.style.display = "none";
dockSwitcher.style.display = "inline";
pagesWrapper.style.display = "none";}

if(Pages == null, "true")
{LinksWrapper.style.display = "none";
OSMPanelB.style.display = "none";
CSMPanelB.style.display = "none";

ZSChangelog.style.display = "none";
OChangelogB.style.display = "none";
CChangelogB.style.display = "none";

DConsoleButton.style.display = "inline";
DConsoleText.style.display = "inline";
DConsoleButton.style.display = "inline";
ZSIPortfolio.style.display = "inline";}

if(CurrentSwitcher == "dockSwitcher")
{if(LWStatus == "Open")
{LinksWrapper.style.display = "inline";
CSMPanelB.style.display = "inline";
OSMPanelB.style.display = "none";}
else
if(LWStatus == null, "Closed")
{LinksWrapper.style.display = "none";
OSMPanelB.style.display = "inline";
CSMPanelB.style.display = "none";}

if(ZSCStatus == "Closed")
{ZSChangelog.style.display = "none";
OChangelogB.style.display = "inline";
CChangelogB.style.display = "none";}
else
if(ZSCStatus == null, "Open")
{ZSChangelog.style.display = "inline";
CChangelogB.style.display = "inline";
OChangelogB.style.display = "none";}}

if(Page1.className == "")
{Page1.style.display = "none";}
else
{Page1.innerHTML = "HQ - Countdown";}

if(Page2.className == "")
{Page2.style.display = "none";}
else
{Page2.innerHTML = "The Zen Project";}

if(Page3.className == "")
{Page3.style.display = "none";}

if(Page4.className == "")
{Page4.style.display = "none";}

if(Page5.className == "")
{Page5.style.display = "none";}

pageSwitcher.addEventListener("click",
function() {

    localStorage.setItem("Pages", "false");

    pageSwitcher.style.display = "none";
    dockSwitcher.style.display = "inline";

    DConsoleButton.style.display = "none";
    DConsoleText.style.display = "none";
    DConsoleButton.style.display = "none";
    ZSIPortfolio.style.display = "none";

    localStorage.setItem("CurrentSwitcher", "dockSwitcher");

    pagesWrapper.style.display = "none";

        if(LWStatus == "Open")
        {LinksWrapper.style.display = "inline";
        CSMPanelB.style.display = "inline";
        OSMPanelB.style.display = "none";}
        else
        if(LWStatus == null, "Closed")
        {LinksWrapper.style.display = "none";
        OSMPanelB.style.display = "inline";
        CSMPanelB.style.display = "none";}
        
        if(ZSCStatus == "Closed")
        {ZSChangelog.style.display = "none";
        OChangelogB.style.display = "inline";
        CChangelogB.style.display = "none";}
        else
        if(ZSCStatus == null, "Open")
        {ZSChangelog.style.display = "inline";
        CChangelogB.style.display = "inline";
        OChangelogB.style.display = "none";}
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

    localStorage.setItem("Pages", "true");

    pageSwitcher.style.display = "inline";
    dockSwitcher.style.display = "none";

    localStorage.setItem("CurrentSwitcher", "pageSwitcher");

    pagesWrapper.style.display = "inline";

    OSMPanelB.style.display = "none";
    CSMPanelB.style.display = "none";

    OChangelogB.style.display = "none";
    CChangelogB.style.display = "none";

    location.reload();
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

Page1.addEventListener("click",
function() {
    //location.replace("https://Z4ckStudios.com/HQ.html");

    if(document.baseURI == "https://z4ckstudios.github.io/Z4ckStudios/") {
        location.replace("https://Z4ckStudios.github.io/Z4ckStudios/HQ");
    }
    else {
        location.replace("HQ.html");
    }
})
Page1.addEventListener("mouseover",
function() {

    Page1.style.opacity = "1";
    Page1.style.textDecoration = "underline";
    Page1.style.cursor = "pointer";
})
Page1.addEventListener("mouseout",
function() {

    Page1.style.opacity = "0.5";
    Page1.style.textDecoration = "none";
    Page1.style.cursor = "default";
})

Page2.addEventListener("click",
function() {
    //location.replace("https://Z4ckStudios.com/TZP.html");
    
    if(document.baseURI == "https://z4ckstudios.github.io/Z4ckStudios/") {
        location.replace("https://Z4ckStudios.github.io/Z4ckStudios/TZP");
    }
    else {
        location.replace("TZP.html");
    }
})
Page2.addEventListener("mouseover",
function() {
    Page2.style.opacity = "1";
    Page2.style.textDecoration = "underline";
    Page2.style.cursor = "pointer";
})
Page2.addEventListener("mouseout",
function() {

    Page2.style.opacity = "0.5";
    Page2.style.textDecoration = "none";
    Page2.style.cursor = "default";
})

Page3.addEventListener("mouseover",
function() {

    Page3.style.opacity = "1";
    Page3.style.textDecoration = "underline";
    Page3.style.cursor = "pointer";
})
Page3.addEventListener("mouseout",
function() {

    Page3.style.opacity = "0.5";
    Page3.style.textDecoration = "none";
    Page3.style.cursor = "default";
})

Page4.addEventListener("mouseover",
function() {

    Page4.style.opacity = "1";
    Page4.style.textDecoration = "underline";
    Page4.style.cursor = "pointer";
})
Page4.addEventListener("mouseout",
function() {

    Page4.style.opacity = "0.5";
    Page4.style.textDecoration = "none";
    Page4.style.cursor = "default";
})

Page5.addEventListener("mouseover",
function() {

    Page5.style.opacity = "1";
    Page5.style.textDecoration = "underline";
    Page5.style.cursor = "pointer";
})
Page5.addEventListener("mouseout",
function() {

    Page5.style.opacity = "0.5";
    Page5.style.textDecoration = "none";
    Page5.style.cursor = "default";
})

OSMPanelB.addEventListener("click",
function() {
    
    LinksWrapper.style.display = "inline";

    CSMPanelB.style.display = "inline";
    OSMPanelB.style.display = "none";

    localStorage.setItem("LWStatus", "Open");
})
OSMPanelB.addEventListener("mouseover",
function() {

    OSMPanelB.style.opacity = "1";
    OSMPanelB.style.border = "1px solid rgb(0, 255, 0)";
    OSMPanelB.style.background = "none";
    OSMPanelB.style.cursor = "pointer";
})
OSMPanelB.addEventListener("mouseout",
function() {

    OSMPanelB.style.opacity = "0.5";
    OSMPanelB.style.border = "none";
    OSMPanelB.style.background = "rgb(15, 15, 15)";
})

CSMPanelB.addEventListener("click",
function() {

    LinksWrapper.style.display = "none";

    OSMPanelB.style.display = "inline";
    CSMPanelB.style.display = "none";

    localStorage.setItem("LWStatus", "Closed");
})
CSMPanelB.addEventListener("mouseover",
function() {

    CSMPanelB.style.opacity = "1";
    CSMPanelB.style.border = "1px solid rgb(255, 0, 0)";
    CSMPanelB.style.background = "none";
    CSMPanelB.style.cursor = "pointer";
})
CSMPanelB.addEventListener("mouseout",
function() {

    CSMPanelB.style.opacity = "0.5";
    CSMPanelB.style.border = "none";
    CSMPanelB.style.background = "rgb(15, 15, 15)";
})

OChangelogB.addEventListener("click",
function() {

    ZSChangelog.style.display = "inline";
    
    CChangelogB.style.display = "inline";
    OChangelogB.style.display = "none";

    localStorage.setItem("ZSCStatus", "Open");
})
OChangelogB.addEventListener("mouseover",
function() {

    OChangelogB.style.opacity = "1";
    OChangelogB.style.border = "1px solid rgb(0, 255, 0)";
    OChangelogB.style.background = "none";
    OChangelogB.style.cursor = "pointer";
})
OChangelogB.addEventListener("mouseout",
function() {

    OChangelogB.style.opacity = "0.5";
    OChangelogB.style.border = "none";
    OChangelogB.style.background = "rgb(15, 15, 15)";
})

CChangelogB.addEventListener("click",
function() {

    ZSChangelog.style.display = "none";
        
    OChangelogB.style.display = "inline";
    CChangelogB.style.display = "none";
    
    localStorage.setItem("ZSCStatus", "Closed");
})
CChangelogB.addEventListener("mouseover",
function() {

    CChangelogB.style.opacity = "1";
    CChangelogB.style.border = "1px solid rgb(255, 0, 0)";
    CChangelogB.style.background = "none";
    CChangelogB.style.cursor = "pointer";
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

ZSIPortfolio.addEventListener("click",
function() {

    window.open("https://z4ckstudios.itch.io");
})
ZSIPortfolio.addEventListener("mouseover",
function() {

    ZSIPortfolio.style.border = "2px solid rgb(0, 0, 100)";
    ZSIPortfolio.style.cursor = "pointer";
})
ZSIPortfolio.addEventListener("mouseout",
function() {

    ZSIPortfolio.style.border = "2px solid blue";
    ZSIPortfolio.style.cursor = "pointer";
})

DConsoleButton.addEventListener("click",
function() {

    //Preset CMD: localStorage.setItem("HostedIP", "192.168.1.222");

    if(HostedIP == "192.168.1.222")
    {DConsoleText.innerHTML = "ACCESS GRANTED";
    DConsoleText.style.color = "rgb(0, 255, 0)";
    DConsoleButton.style.display = "none";

    TSET = 0;
    const TSETINTERVAL = setInterval(TSETINT, 1000);

    function TSETINT() {
        TSET++

        if(TSET > 1)
        {DConsoleText.innerHTML = "Developer Console";
        DConsoleText.style.color = "white";
        DConsoleButton.style.display = "inline";
        clearInterval(TSETINTERVAL);}
    }
    }
    else
    {DConsoleText.innerHTML = "ACCESS DENIED";
    DConsoleText.style.color = "red";
    DConsoleButton.style.display = "none";

    TSET = 0;
    const TSETINTERVAL = setInterval(TSETINT, 1000);

    function TSETINT() {
        TSET++

        if(TSET > 1)
        {DConsoleText.innerHTML = "Developer Console";
        DConsoleText.style.color = "white";
        DConsoleButton.style.display = "inline";
        clearInterval(TSETINTERVAL);}
    }
    }
})
DConsoleButton.addEventListener("mouseover",
function() {

    DConsoleButton.style.cursor = "pointer";
})

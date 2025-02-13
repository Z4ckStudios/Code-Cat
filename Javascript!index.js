// var url = "https://Z4ckStudios.com/";
var url = "https://Z4ckStudios.github.io/Z4ckStudios/";
// window.history.replaceState(null, document.title, url);

var LinksWrapper = document.querySelector(".LinksWrapper");
var OSMPanelB = document.querySelector(".OSMPanelB");
var CSMPanelB = document.querySelector(".CSMPanelB");

var ZSChangelog = document.querySelector(".ZSChangelog");
var OChangelogB = document.querySelector(".OChangelogB");
var CChangelogB = document.querySelector(".CChangelogB");

var TwitterB = document.querySelector(".TwitterB");
var YTB = document.querySelector(".YTB");
var TwitchB = document.querySelector(".TwitchB");
var DiscordB = document.querySelector(".DiscordB");
var TwitterBCover = document.querySelector(".TwitterBCover");
var YTBCover = document.querySelector(".YTBCover");
var TwitchBCover = document.querySelector(".TwitchBCover");
var DiscordBCover = document.querySelector(".DiscordBCover");

var TwitterLogo = document.querySelector(".TwitterLogo");
var YoutubeLogo = document.querySelector(".YoutubeLogo");
var TwitchLogo = document.querySelector(".TwitchLogo");
var DiscordLogo = document.querySelector(".DiscordLogo");

var pagesWrapper = document.querySelector(".pagesWrapper");
var Page1 = document.querySelector(".Page1");
var Page2 = document.querySelector(".Page2");
var Page3 = document.querySelector(".Page3");
var Page4 = document.querySelector(".Page4");
var Page5 = document.querySelector(".Page5");

var dockSwitcher = document.querySelector(".dockSwitcher");
var pageSwitcher = document.querySelector(".pageSwitcher");

var DConsoleIMG = document.querySelector(".DConsoleIMG");
var DConsoleText = document.querySelector(".DConsoleText");
var DConsoleButton = document.querySelector(".DConsoleButton");
var ZSACLink = document.querySelector(".ZSACLink");
var ZSIPortfolio = document.querySelector(".ZSIPortfolio");

var LWStatus = localStorage.getItem("LWStatus");
var ZSCStatus = localStorage.getItem("ZSCStatus");
var CurrentSwitcher = localStorage.getItem("CurrentSwitcher");
var Pages = localStorage.getItem("Pages");
var HostedIP = localStorage.getItem("HostedIP");

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

DConsoleIMG.style.display = "inline";
DConsoleText.style.display = "inline";
DConsoleButton.style.display = "inline";
ZSACLink.style.display = "inline";
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

if(Page1.id == "")
{Page1.style.display = "none";}
else
{Page1.innerHTML = "CS - Countdown";}

if(Page2.id == "")
{Page2.style.display = "none";}
else
{Page2.innerHTML = "TZP - Main Panel";}

if(Page3.id == "")
{Page3.style.display = "none";}

if(Page4.id == "")
{Page4.style.display = "none";}

if(Page5.id == "")
{Page5.style.display = "none";}

pageSwitcher.addEventListener("click",
function() {

    localStorage.setItem("Pages", "false");

    pageSwitcher.style.display = "none";
    dockSwitcher.style.display = "inline";

    DConsoleIMG.style.display = "none";
    DConsoleText.style.display = "none";
    DConsoleButton.style.display = "none";
    ZSACLink.style.display = "none";
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

    //location.replace("CS.html");
    //location.replace("https://Z4ckStudios.com/CS.html");
    location.replace("https://Z4ckStudios.github.io/Z4ckStudios/CS");
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

    //location.replace("TZP.html");
    //location.replace("https://Z4ckStudios.com/TZP.html");
    location.replace("https://Z4ckStudios.github.io/Z4ckStudios/TZP");
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

TwitterBCover.addEventListener("click",
function() {

    window.open("https://twitter.com/Ph4nt0mZStudios");
})
TwitterBCover.addEventListener("mouseover",
function() {

    TwitterB.style.width = "85%";
    TwitterB.style.marginLeft = "7.25%";
    TwitterBCover.style.cursor = "pointer";
})
TwitterBCover.addEventListener("mouseout",
function() {
    
    TwitterB.style.width = "80%";
    TwitterB.style.marginLeft = "10%";
})

YTBCover.addEventListener("click",
function() {

    window.open("https://youtube.com/@Ph4nt0mZStudios");
})
YTBCover.addEventListener("mouseover",
function() {

    YTB.style.width = "85%";
    YTB.style.marginLeft = "7.25%";
    YTBCover.style.cursor = "pointer";
})
YTBCover.addEventListener("mouseout",
function() {
    
    YTB.style.width = "80%";
    YTB.style.marginLeft = "10%";
})

TwitchBCover.addEventListener("click",
function() {

    window.open("https://twitch.tv/Z4ckStudios");
})
TwitchBCover.addEventListener("mouseover",
function() {

    TwitchB.style.width = "85%";
    TwitchB.style.marginLeft = "7.25%";
    TwitchBCover.style.cursor = "pointer";
})
TwitchBCover.addEventListener("mouseout",
function() {
    
    TwitchB.style.width = "80%";
    TwitchB.style.marginLeft = "10%";
})

DiscordBCover.addEventListener("click",
function() {

    window.open("https://discord.gg/37uZ7ty9qW");
})
DiscordBCover.addEventListener("mouseover",
function() {

    DiscordB.style.width = "85%";
    DiscordB.style.marginLeft = "7.25%";
    DiscordBCover.style.cursor = "pointer";
})
DiscordBCover.addEventListener("mouseout",
function() {
    
    DiscordB.style.width = "80%";
    DiscordB.style.marginLeft = "10%";
})

ZSACLink.addEventListener("click",
function() {

    window.open("https://z4ckstudios.etsy.com");
})
ZSACLink.addEventListener("mouseover",
function() {

    ZSACLink.style.border = "2px solid rgb(100, 0, 0)";
    ZSACLink.style.cursor = "pointer";
})
ZSACLink.addEventListener("mouseout",
function() {

    ZSACLink.style.border = "2px solid red";
    ZSACLink.style.cursor = "pointer";
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
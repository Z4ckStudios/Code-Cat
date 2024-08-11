var url = "https://Z4ckStudios.github.io/Z4ckStudios/";
window.history.replaceState(null, document.title, url);

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

var LWStatus = localStorage.getItem("LWStatus");
var ZSCStatus = localStorage.getItem("ZSCStatus");

var pagesWrapper = document.querySelector(".pagesWrapper");
var Page1 = document.querySelector(".Page1");
var Page2 = document.querySelector(".Page2");
var Page3 = document.querySelector(".Page3");
var Page4 = document.querySelector(".Page4");
var Page5 = document.querySelector(".Page5");

var dockSwitcher = document.querySelector(".dockSwitcher");
var pageSwitcher = document.querySelector(".pageSwitcher");
var CurrentSwitcher = localStorage.getItem("CurrentSwitcher");
var Pages = localStorage.getItem("Pages");

if(CurrentSwitcher == null, "pageSwitcher")
{pageSwitcher.style.display = "inline";
dockSwitcher.style.display = "none";
pagesWrapper.style.display = "inline";}

if(CurrentSwitcher == "dockSwitcher")
{pageSwitcher.style.display = "none";
dockSwitcher.style.display = "inline";
pagesWrapper.style.display = "none";}

if(Pages == null, "true")
{LinksWrapper.style.left = "-20%";
OSMPanelB.style.display = "none";
CSMPanelB.style.display = "none";

ZSChangelog.style.left = "115%";
OChangelogB.style.display = "none";
CChangelogB.style.display = "none";}

if(LWStatus == "Open" && Pages == "false")
{LinksWrapper.style.left = "0.5%";
CSMPanelB.style.display = "inline";
OSMPanelB.style.display = "none";}
else
if(LWStatus == null, "Closed" && Pages == "false")
{LinksWrapper.style.left = "-20%";
OSMPanelB.style.display = "inline";
CSMPanelB.style.display = "none";}

if(ZSCStatus == "Closed" && Pages == "false")
{ZSChangelog.style.left = "115%";
OChangelogB.style.display = "inline";
CChangelogB.style.display = "none";}
else
if(ZSCStatus == null, "Open" && Pages == "false")
{ZSChangelog.style.left = "83.5%";
CChangelogB.style.display = "inline";
OChangelogB.style.display = "none";}

document.querySelector(".pageSwitcher").addEventListener("click",
function() {

    localStorage.setItem("Pages", "false");

    pageSwitcher.style.display = "none";
    dockSwitcher.style.display = "inline";

    localStorage.setItem("CurrentSwitcher", "dockSwitcher");

    pagesWrapper.style.display = "none";

    if(LWStatus == "Open")
        {LinksWrapper.style.left = "0.5%";
        CSMPanelB.style.display = "inline";
        OSMPanelB.style.display = "none";}
        else
        if(LWStatus == null, "Closed")
        {LinksWrapper.style.left = "-20%";
        OSMPanelB.style.display = "inline";
        CSMPanelB.style.display = "none";}
        
        if(ZSCStatus == "Closed")
        {ZSChangelog.style.left = "115%";
        OChangelogB.style.display = "inline";
        CChangelogB.style.display = "none";}
        else
        if(ZSCStatus == null, "Open")
        {ZSChangelog.style.left = "83.5%";
        CChangelogB.style.display = "inline";
        OChangelogB.style.display = "none";}
})
document.querySelector(".pageSwitcher").addEventListener("mouseover",
function() {

    pageSwitcher.style.opacity = "1";
    pageSwitcher.style.border = "1px solid rgb(0, 255, 255)";
    pageSwitcher.style.background = "none";
    pageSwitcher.style.cursor = "pointer";
})
document.querySelector(".pageSwitcher").addEventListener("mouseout",
function() {

    pageSwitcher.style.opacity = "0.5";
    pageSwitcher.style.border = "none";
    pageSwitcher.style.background = "rgb(15, 15, 15)";
    pageSwitcher.style.cursor = "default";
})

document.querySelector(".dockSwitcher").addEventListener("click",
function() {

    localStorage.setItem("Pages", "true");

    pageSwitcher.style.display = "inline";
    dockSwitcher.style.display = "none";

    localStorage.setItem("CurrentSwitcher", "pageSwitcher");

    pagesWrapper.style.display = "inline";

    LinksWrapper.style.left = "-20%";
    OSMPanelB.style.display = "none";
    CSMPanelB.style.display = "none";

    ZSChangelog.style.left = "115%";
    OChangelogB.style.display = "none";
    CChangelogB.style.display = "none";
})
document.querySelector(".dockSwitcher").addEventListener("mouseover",
function() {

    dockSwitcher.style.opacity = "1";
    dockSwitcher.style.cursor = "pointer";
    dockSwitcher.style.textDecoration = "underline";
})
document.querySelector(".dockSwitcher").addEventListener("mouseout",
function() {

    dockSwitcher.style.opacity = "0.5";
    dockSwitcher.style.cursor = "default";
    dockSwitcher.style.textDecoration = "none";
})

document.querySelector(".Page1").addEventListener("click",
function() {

    
})
document.querySelector(".Page1").addEventListener("mouseover",
function() {

    Page1.style.opacity = "1";
    Page1.style.textDecoration = "underline";
    Page1.style.cursor = "pointer";
})
document.querySelector(".Page1").addEventListener("mouseout",
function() {

    Page1.style.opacity = "0.5";
    Page1.style.textDecoration = "none";
    Page1.style.cursor = "default";
})

document.querySelector(".Page2").addEventListener("click",
function() {

    location.replace("https://Z4ckStudios.github.io/Z4ckStudios/101");
})
document.querySelector(".Page2").addEventListener("mouseover",
function() {

    Page2.style.opacity = "1";
    Page2.style.textDecoration = "underline";
    Page2.style.cursor = "pointer";
})
document.querySelector(".Page2").addEventListener("mouseout",
function() {

    Page2.style.opacity = "0.5";
    Page2.style.textDecoration = "none";
    Page2.style.cursor = "default";
})

document.querySelector(".Page3").addEventListener("mouseover",
function() {

    Page3.style.opacity = "1";
    Page3.style.textDecoration = "underline";
    Page3.style.cursor = "pointer";
})
document.querySelector(".Page3").addEventListener("mouseout",
function() {

    Page3.style.opacity = "0.5";
    Page3.style.textDecoration = "none";
    Page3.style.cursor = "default";
})

document.querySelector(".Page4").addEventListener("mouseover",
function() {

    Page4.style.opacity = "1";
    Page4.style.textDecoration = "underline";
    Page4.style.cursor = "pointer";
})
document.querySelector(".Page4").addEventListener("mouseout",
function() {

    Page4.style.opacity = "0.5";
    Page4.style.textDecoration = "none";
    Page4.style.cursor = "default";
})

document.querySelector(".Page5").addEventListener("mouseover",
function() {

    Page5.style.opacity = "1";
    Page5.style.textDecoration = "underline";
    Page5.style.cursor = "pointer";
})
document.querySelector(".Page5").addEventListener("mouseout",
function() {

    Page5.style.opacity = "0.5";
    Page5.style.textDecoration = "none";
    Page5.style.cursor = "default";
})

document.querySelector(".OSMPanelB").addEventListener("click",
function() {
    
    LinksWrapper.style.left = "0.5%";
    CSMPanelB.style.display = "inline";
    OSMPanelB.style.display = "none";

    localStorage.setItem("LWStatus", "Open");
})
document.querySelector(".OSMPanelB").addEventListener("mouseover",
function() {

    OSMPanelB.style.opacity = "1";
    OSMPanelB.style.border = "1px solid rgb(0, 255, 0)";
    OSMPanelB.style.background = "none";
    OSMPanelB.style.cursor = "pointer";
})
document.querySelector(".OSMPanelB").addEventListener("mouseout",
function() {

    OSMPanelB.style.opacity = "0.5";
    OSMPanelB.style.border = "none";
    OSMPanelB.style.background = "rgb(15, 15, 15)";
})

document.querySelector(".CSMPanelB").addEventListener("click",
function() {
        
    LinksWrapper.style.left = "-20%";
    OSMPanelB.style.display = "inline";
    CSMPanelB.style.display = "none";
    
    localStorage.setItem("LWStatus", "Closed");
})
document.querySelector(".CSMPanelB").addEventListener("mouseover",
function() {

    CSMPanelB.style.opacity = "1";
    CSMPanelB.style.border = "1px solid rgb(255, 0, 0)";
    CSMPanelB.style.background = "none";
    CSMPanelB.style.cursor = "pointer";
})
document.querySelector(".CSMPanelB").addEventListener("mouseout",
function() {

    CSMPanelB.style.opacity = "0.5";
    CSMPanelB.style.border = "none";
    CSMPanelB.style.background = "rgb(15, 15, 15)";
})

document.querySelector(".OChangelogB").addEventListener("click",
function() {
    
    ZSChangelog.style.left = "83.5%";
    CChangelogB.style.display = "inline";
    OChangelogB.style.display = "none";

    localStorage.setItem("ZSCStatus", "Open");
})
document.querySelector(".OChangelogB").addEventListener("mouseover",
function() {

    OChangelogB.style.opacity = "1";
    OChangelogB.style.border = "1px solid rgb(0, 255, 0)";
    OChangelogB.style.background = "none";
    OChangelogB.style.cursor = "pointer";
})
document.querySelector(".OChangelogB").addEventListener("mouseout",
function() {

    OChangelogB.style.opacity = "0.5";
    OChangelogB.style.border = "none";
    OChangelogB.style.background = "rgb(15, 15, 15)";
})

document.querySelector(".CChangelogB").addEventListener("click",
function() {
        
    ZSChangelog.style.left = "115%";
    OChangelogB.style.display = "inline";
    CChangelogB.style.display = "none";
    
    localStorage.setItem("ZSCStatus", "Closed");
})
document.querySelector(".CChangelogB").addEventListener("mouseover",
function() {

    CChangelogB.style.opacity = "1";
    CChangelogB.style.border = "1px solid rgb(255, 0, 0)";
    CChangelogB.style.background = "none";
    CChangelogB.style.cursor = "pointer";
})
document.querySelector(".CChangelogB").addEventListener("mouseout",
function() {

    CChangelogB.style.opacity = "0.5";
    CChangelogB.style.border = "none";
    CChangelogB.style.background = "rgb(15, 15, 15)";
})

document.querySelector(".TwitterBCover").addEventListener("click",
function() {

    window.open("https://twitter.com/Ph4nt0mZStudios");
})
document.querySelector(".TwitterBCover").addEventListener("mouseover",
function() {

    TwitterB.style.width = "85%";
    TwitterB.style.marginLeft = "7.25%";
    TwitterBCover.style.cursor = "pointer";
})
document.querySelector(".TwitterBCover").addEventListener("mouseout",
function() {
    
    TwitterB.style.width = "80%";
    TwitterB.style.marginLeft = "10%";
})

document.querySelector(".YTBCover").addEventListener("click",
function() {

    window.open("https://youtube.com/@Z4ckStudios");
})
document.querySelector(".YTBCover").addEventListener("mouseover",
function() {

    YTB.style.width = "85%";
    YTB.style.marginLeft = "7.25%";
    YTBCover.style.cursor = "pointer";
})
document.querySelector(".YTBCover").addEventListener("mouseout",
function() {
    
    YTB.style.width = "80%";
    YTB.style.marginLeft = "10%";
})

document.querySelector(".TwitchBCover").addEventListener("click",
function() {

    window.open("https://twitch.tv/Z4ckStudios");
})
document.querySelector(".TwitchBCover").addEventListener("mouseover",
function() {

    TwitchB.style.width = "85%";
    TwitchB.style.marginLeft = "7.25%";
    TwitchBCover.style.cursor = "pointer";
})
document.querySelector(".TwitchBCover").addEventListener("mouseout",
function() {
    
    TwitchB.style.width = "80%";
    TwitchB.style.marginLeft = "10%";
})

document.querySelector(".DiscordBCover").addEventListener("click",
function() {

    //window.open("https://discord.gg/");
    DiscordB.innerHTML = "Inactive";
    DiscordB.style.color = "red";

    let DSBTimer = 0;
    const DSBInterval = setInterval(DSBInt, 1000);

    function DSBInt() {
        DSBTimer++

        if(DSBTimer < 3)
        {DiscordB.innerHTML = "Discord";
        DiscordB.style.color = "white";}
        
        if(DSBTimer < 3) {clearInterval(DSBInterval);}
    }
})
document.querySelector(".DiscordBCover").addEventListener("mouseover",
function() {

    DiscordB.style.width = "85%";
    DiscordB.style.marginLeft = "7.25%";
    DiscordBCover.style.cursor = "pointer";
})
document.querySelector(".DiscordBCover").addEventListener("mouseout",
function() {
    
    DiscordB.style.width = "80%";
    DiscordB.style.marginLeft = "10%";
})
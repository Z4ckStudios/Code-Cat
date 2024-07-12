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

if(LWStatus == "Open")
{LinksWrapper.style.left = "0.5%";
CSMPanelB.style.display = "inline";
OSMPanelB.style.display = "none";}
else
if(LWStatus == null, "Closed")
{LinksWrapper.style.left = "-20%";
OSMPanelB.style.display = "inline";
CSMPanelB.style.display = "none";}

if(ZSCStatus == null, "Open")
{ZSChangelog.style.left = "83.5%";
CChangelogB.style.display = "inline";
OChangelogB.style.display = "none";}

if(ZSCStatus == "Closed")
{ZSChangelog.style.left = "115%";
OChangelogB.style.display = "inline";
CChangelogB.style.display = "none";}

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

    location.replace("https://twitter.com/Z4ckStudios");
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

    location.replace("https://youtube.com/@Z4ckStudios");
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

    location.replace("https://twitch.tv/Z4ckStudios");
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

    location.replace("https://discord.gg/f5PdW5TDCj");
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
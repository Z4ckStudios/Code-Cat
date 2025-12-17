// var url = "https://Z4ckStudios.com/HQ";
var url = "https://Z4ckStudios.github.io/Z4ckStudios/HQ";

if(document.baseURI == "https://z4ckstudios.github.io/Z4ckStudios/HQ.html") {
    window.history.replaceState(null, document.title, url);
}
// var url = "https://Z4ckStudios.com/HueQuestOfficial";
var url = "https://Z4ckStudios.github.io/Code-Cat/HueQuestOfficial";

if(document.baseURI == "https://z4ckstudios.github.io/Code-Cat/HueQuestOfficial.html") {
    window.history.replaceState(null, document.title, url);
}

var wrapper = document.getElementById("wrapper");
var Button = document.getElementById("Button");

var RRwrapper = document.getElementById("RRwrapper");
var vidRR = document.getElementById("vidRR");

var canClick = true;

var bWidth = 10;
Button.style.width = `${bWidth}vw`;
Button.style.height = `${bWidth}vw`;

Button.style.transitionDuration = `${0}s`;

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

Button.addEventListener("click",
async function() {
    if(canClick) {
        canClick = false;

        Button.style.transform = "translate(-50%, -50%) rotate(360deg)";
        bWidth *= 10;
        Button.style.width = `${bWidth}vw`;
        Button.style.height = `${bWidth}vw`;

        for(let i = 5; i > 0;) {
            Button.style.transitionDuration = `${i.toFixed(1)}s`;
            console.log(Button.style.transitionDuration)
            await wait(20);
            i -= 0.1;
        }

        if(Button.style.transitionDuration > `${0.1}s`) {
            wrapper.style.display = "none";
            RRwrapper.style.display = "inline";
            vidRR.play();
        }
    }
})
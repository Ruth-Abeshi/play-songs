
var numberOfSongButtons = document.querySelectorAll(".song").length;

for (var i=0; i<numberOfSongButtons; i++){
    document.querySelectorAll(".song")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "Titanium":
                var Titanium = new Audio("audio/Titanium.mp3");
                Titanium.play();
                break;

            case "Unstoppable":
                var Unstoppable = new Audio("audio/Unstoppable.mp3");
                Unstoppable.play();
                break;

            case "Chandelier":
                var Chandelier = new Audio("audio/Chandelier.mp3");
                Chandelier.play();
                break;

            case "Lucid-Dreams":
                var Luciddreams = new Audio("audio/Lucid-Dreams.mp3");
                Luciddreams.play();
                break;

            case "Wishing-Well":
                var WishingWells = new Audio("audio/Wishing-Well.mp3");
                WishingWells.play();
                break;

            case "Smile":
                var Smile = new Audio("audio/Smile.mp3");
                Smile.play();
                break;

            case "Perfect":
                var Perfect = new Audio("audio/Perfect.mp3");
                Perfect.play();
                break;

            case "Calm-Down":
                var CalmDown = new Audio("audio/Calm-Down.mp3");
                CalmDown.play();
                break;

            case "Old-Town-Road":
                var OldTimeRoad = new Audio("audio/Old-Town-Road.mp3");
                OldTimeRoad.play();
                break;

            case "Industry-Baby":
                var IndustryBaby = new Audio("audio/Industry-Baby.mp3");
                IndustryBaby.play();
                break;

            case "The-Nights":
                var TheNights = new Audio("audio/The-Nights.mp3");
                TheNights.play();
                break;

            case "Bam-Bam":
                var BamBam = new Audio("audio/Bam-Bam.mp3");
                BamBam.play();
                break;

        
            default: console.log(buttonInnerHTML);
                break;
        }
        
        buttonAnimation(buttonInnerHTML);

    });


}

function stopAllAudio() {
    allAudios.forEach(function(audio){
        audio.pause();
    });
    
}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
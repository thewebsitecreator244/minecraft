const btnScreamer = document.querySelector("#btnScreamer");

function screamer(){
    const screamerImg = new Image()
    screamerImg.src = "../img/zumb.jpeed.jpg"
    screamerImg.className = "screamer-img"
    document.body.append(screamerImg)
    const screamerAudio = new Audio("../sound/evil-laugh-sound.mp3");
    screamerAudio.play()
};

btnScreamer.addEventListener("click", screamer);

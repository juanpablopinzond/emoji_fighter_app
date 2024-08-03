let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"];

let versus = document.getElementById("stage");
let actualSize = window.getComputedStyle(versus, null).getPropertyValue("font-size");
let newSize = parseFloat(actualSize) + 50;
versus.style.fontSize = newSize + "px";

function pickAFighter() {
    let randomIndexfirstPlayer = Math.floor(Math.random() * fighters.length);
    let randomIndexsecondPlayer = Math.floor(Math.random() * fighters.length);
    for (let i = 0; i < fighters.length; i++) {
        versus.textContent = fighters[randomIndexfirstPlayer] + " VS ";
        versus.textContent += fighters[randomIndexsecondPlayer];
    }
}

let startBattle = document.getElementById("start_fight");
startBattle.addEventListener("click", pickAFighter);
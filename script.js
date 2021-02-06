const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
};
const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
};

const reset = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

let winningScore = 6;
let isGameOver = false;

winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    resetGame();
});
p1.button.addEventListener("click", () => updateScore(p1, p2));
p2.button.addEventListener("click", () => updateScore(p2, p1));
reset.addEventListener("click", resetGame);

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("text-success");
            opponent.display.classList.add("text-danger");
            player.button.classList.add("disabled");
            opponent.button.classList.add("disabled");
        }
        player.display.innerText = player.score;
    }
}
function resetGame() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = p.score;
        p.display.classList.remove("text-success", "text-danger");
        p.button.classList.remove("disabled");
    }
}

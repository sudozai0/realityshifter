document.addEventListener("DOMContentLoaded", function() {
    const startScreen = document.getElementById("start-screen");
    const mainMenu = document.getElementById("main-menu");
    const startButton = document.getElementById("start-btn");
    const gameCanvas = document.getElementById("gameCanvas");

    setTimeout(() => {
        startScreen.style.display = "none";
        mainMenu.style.display = "block";
    }, 3000); // Shows logo for 3 seconds

    startButton.addEventListener("click", function() {
        mainMenu.style.display = "none";
        gameCanvas.classList.remove("hidden");
        startGame();
    });

    function startGame() {
        console.log("Game started!");
    }
});
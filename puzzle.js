// Puzzle System for Reality Shifter

class Puzzle {
    constructor(type, solution, hint) {
        this.type = type; // Example: "button", "lever", "code"
        this.solution = solution;
        this.hint = hint;
        this.solved = false;
    }

    checkSolution(input) {
        if (input === this.solution) {
            this.solved = true;
            console.log("Puzzle Solved!");
            playPuzzleSolvedSound();
            return true;
        } else {
            console.log("Incorrect solution. Try again.");
            return false;
        }
    }

    showHint() {
        return this.hint;
    }
}

// Example Puzzles
const puzzles = [
    new Puzzle("button", "red", "Press the red button to unlock the door."),
    new Puzzle("code", "0423", "A strange sequence: 04-23"),
    new Puzzle("lever", "up", "Pull the lever UP to proceed.")
];

// Function to trigger a puzzle check
function solvePuzzle(index, input) {
    if (puzzles[index].checkSolution(input)) {
        document.getElementById("puzzle-message").innerText = "Puzzle Solved!";
    } else {
        document.getElementById("puzzle-message").innerText = "Try Again!";
    }
}

// Play puzzle solved sound effect
function playPuzzleSolvedSound() {
    const audio = new Audio("assets/sounds/puzzle_solved.mp3");
    audio.play();
}
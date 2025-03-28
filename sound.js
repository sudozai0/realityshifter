function playSound(soundName) {
    let audio = new Audio(`assets/sounds/${soundName}.wav`);
    audio.play();
}
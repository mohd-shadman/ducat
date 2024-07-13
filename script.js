let jackpot = Math.floor(Math.random() * 100) + 1;
let counter = 0;

function makeGuess() {
    let guess = parseInt(document.getElementById('guess').value);
    let message = document.getElementById('message');
    let attempts = document.getElementById('attempts');
    counter++;

    if (isNaN(guess)) {
        message.innerHTML = "Please enter a valid number.";
        message.className = 'message';
    } else if (guess > jackpot) {
        message.innerHTML = "Galat hai, guess lower.";
        message.className = 'message';
    } else if (guess < jackpot) {
        message.innerHTML = "Galat hai, guess higher.";
        message.className = 'message';
    } else {
        message.innerHTML = "🎉 Congratulations! Shi guess kiya in " + counter + " times me. 🎉";
        message.className = 'congrats';
        document.getElementById('guess').disabled = true;
        document.querySelector('button:not(.reset)').disabled = true;
    }

    attempts.innerHTML = "Attempts: " + counter;
}

function resetGame() {
    jackpot = Math.floor(Math.random() * 100) + 1;
    counter = 0;
    document.getElementById('guess').value = '';
    document.getElementById('guess').disabled = false;
    document.querySelector('button:not(.reset)').disabled = false;
    document.getElementById('message').innerHTML = '';
    document.getElementById('attempts').innerHTML = '';
}

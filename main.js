let randomNum = Math.floor(Math.random() * 100) + 1
let resultMessage = ''
let history = []
let numAvailableGuesses = 5;
let count = 0;
let element = document.getElementById("design")
console.log("This is what the computer chose:", randomNum)

function guess() {
    let userNum = document.getElementById("guessNumber").value
    count += 1;
    if (randomNum > userNum) {
        resultMessage = userNum+" is too low."
        numAvailableGuesses = numAvailableGuesses - 1
    } else if (randomNum < userNum) {
        resultMessage = userNum+" is too high."
        numAvailableGuesses = numAvailableGuesses - 1
    } else if (randomNum = userNum) {
        resultMessage = userNum+" is correct!"
        numAvailableGuesses = numAvailableGuesses - 1 
        document.getElementById("guessButton").disabled = true;
        element.style.backgroundColor = "#5db410";
    } 
    if (count >= 5) {
        document.getElementById("guessButton").disabled = true;
        resultMessage = "Oops, you lost :("
        element.style.backgroundColor = "#b43610";
    }
    $('#guessNumber').val('');
    history.push(userNum)
    document.getElementById("resultArea").innerHTML = `${resultMessage}`
    document.getElementById("historyArea").innerHTML = `History: ${history}`
    document.getElementById("remainingGuesses").innerHTML = `Remaining Guesses: ${numAvailableGuesses}`
}

function reset() {
    location.reload();
}
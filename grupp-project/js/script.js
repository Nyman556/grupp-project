const letters = ['F','O','X']
var guesses = ['F','O','X'];

function guessLetter() {
    var i;
    var x = 0
    var correctGuesses = 0;
    var wrongGuesses = 0;
    for (i = 0; i < guesses.length; i++) {
        var check = guesses[i].includes(letters[x]);
        if (check === true){
            console.log("You guessed right " + guesses[i]);
            x++;
            correctGuesses++;
            document.getElementById(guesses[i]).innerHTML = guesses[i];
        }
        else if (check === false) {
            console.log("wrong guess " + guesses[i]);
            x++;
            wrongGuesses++;
            document.getElementById("wrong").innerHTML = "wrong guesses : " + wrongGuesses;
        }
        if (x > 2) {
            x = 0
        }
        if (correctGuesses === 3) {
            return console.log("You won")
        } 
    }  
}

guessLetter();
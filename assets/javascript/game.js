
// Variables
var words = ["ryu","ken","megaman","wolverine","hulk","deadpool","doom","ironman","spiderman"
			,"cyclopes","magneto","vega","blanka","guile","thor"];
var guessesLeft = 10;
var currentGuesses=[];
var randomWord = words[Math.floor(Math.random() * words.length)];
var test = randomWord.split(""); //array of random word
var newWord = new Array(randomWord.length).fill("_");
var wins = 0;
var losses = 0;


console.log(randomWord);

////List of functions ///////

//function to check if two arrays are the same
function checkAnswers(){
	for (var i = 0; i < randomWord.length; i++) {
		if (test[i] != newWord[i] ) {
			return false;
		}
	}
	return true;
}


//Funtion to check if letter is correct
function checkLetter(guess){

	if ( test.indexOf(guess) > -1 ) {

		for (var i = 0; i < newWord.length; i++) {
			if ( randomWord.charAt(i) === guess ) {
				newWord[i]=guess;

			}
		}
		return true;
	}
	else{
		currentGuesses.push(guess);
		return false;
	}
	
}



//function to put initial underscore
function underscores(){
	document.getElementById("underscores").innerHTML= newWord.join(" ");
}


//validating the input is a valid value
function validate(input) {
	var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    if( letters.indexOf(input) === -1 ) {
    	return false;
    }
    return true;

}

//function to make sure you input is new and not duplicated
function newLetter(letter) {
	if (newWord.indexOf(letter) > -1 || currentGuesses.indexOf(letter) > -1  ) {
		return false;
	}
	else {
		return true;
	}
}

////

underscores();


document.onkeyup = function (event) {
	var guess = event.key.toLowerCase();

	if ( validate(guess) && newLetter(guess) && guessesLeft > 0 ) {
		 // checkLetter(guess);
		 //document.getElementById("underscores").innerHTML= newWord.join(" ");


		if (checkLetter(guess)) {
			document.getElementById("underscores").innerHTML= newWord.join(" ");

			if (checkAnswers()) {
				wins++;
				document.getElementById('audio').play();
				alert("YOU GUESSED THE WORD " + newWord.join("") );
				guessesLeft = 10;
				currentGuesses=[];
				randomWord = words[Math.floor(Math.random() * words.length)];
				test = randomWord.split("");
				newWord = new Array(randomWord.length).fill("_");
				document.getElementById("wins").innerHTML= wins;				
				document.getElementById("underscores").innerHTML= newWord.join(" ");
				document.getElementById("guessesLeft").innerHTML = guessesLeft;
				document.getElementById("currentGuesses").innerHTML= currentGuesses.join(" ");

	
			}


		}


		else {
			guessesLeft--;
			// losses++;
			document.getElementById("wins").innerHTML= wins;
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
			document.getElementById("currentGuesses").innerHTML= currentGuesses.join(" ");
		}
		
	}
	else if (validate(guess)===false) {
		alert("You entered a invalid value: Try Again ");
	}
	else if (newLetter(guess)===false) {
		alert("You entered a duplicated value ");
	}	
	else {
		alert("ran out of moves");
		losses++;



		underscores();
		guessesLeft = 10;
		currentGuesses=[];
		randomWord = words[Math.floor(Math.random() * words.length)];
		test = randomWord.split("");
		newWord = new Array(randomWord.length).fill("_");
		document.getElementById("losses").innerHTML= losses;				
		document.getElementById("underscores").innerHTML= newWord.join(" ");
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
		document.getElementById("currentGuesses").innerHTML= currentGuesses.join(" ");

	}



}









		

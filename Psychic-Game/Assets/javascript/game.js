    var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var win = 0;
	var loss = 0;
	var guessLeft = 10;
	var guessSoFar = [];
	
	function reset (){
		guessLeft = 10;
		
		guessSoFar = [];
		computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
		console.log (computerGuess);

	}
	reset();

	function newword (){
		guessSoFar = [];
		guessLeft = 10;
		computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
		console.log (computerGuess);
	}
	
    document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	if (!/[a-z]/.test(userGuess)){
		alert ("Please only pick a letter!");
		guessLeft++;
		loss--;
	}
	 
	if (guessSoFar.indexOf(userGuess) === -1){
		guessSoFar.push(userGuess);
		}

	else {
		alert ("You already guess this letter, please choose another one");
		guessLeft++;
		loss--;
		
		
	}
		
		if (userGuess === computerGuess) {
			win++;
			alert ("Woohoo! You are right, try again");
			newword();
		}

		else {
			loss++;
			guessLeft -- ;
		}

		if (guessLeft === 0) {
			
			alert ("You lost")
			reset();
		}

	
	document.querySelector('#win').innerHTML = "Win: " + win;
    document.querySelector('#loss').innerHTML = "Loss: " +loss;
    document.querySelector('#guessleft').innerHTML = "Number of guess left: " + guessLeft;
    document.querySelector('#guessofar').innerHTML = " Your guess so far: " + guessSoFar;


};
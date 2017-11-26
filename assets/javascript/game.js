	$(document).ready(function() {
	
		var randomGoal;
		var gemOneValue, gemTwoValue, gemThreeValue, gemFourValue;
		var cast = 0;
		var fail = 0;
		var playerScore;

		function resetValues() {
			randomGoal = Math.floor (Math.random() * (120 - 19) + 19);
			gemOneValue = 1 + Math.floor(Math.random() * 12);
			gemTwoValue = 1 + Math.floor(Math.random() * 12);
			gemThreeValue = 1 + Math.floor(Math.random() * 12);
			gemFourValue = 1 + Math.floor(Math.random() * 12);
			playerScore = 0
			cast = 0
			fail = 0
			$("#castTally").html("Cast: " + cast);
			$("#failTally").html("Fail: " + fail);
			$("#randomNumber").html(randomGoal);
			$("#userScore").html(playerScore);
			consoleLogVariables();
		}

		function randomWholeNumCrystal() {
  			return Math.random();
		}
		
		function getRandomFloatGoal(min, max) {
  			return Math.random() * (19 - 120) + 19;
		}
		
		function winLose() {
			if (playerScore > randomGoal) {
				fail++;
				console.log("user lost");
				resetValues();
				alert ("BOOM!!!");
			}
			if (playerScore === randomGoal) {
				cast++;
				console.log("user won");
				resetValues();
				alert ("Shazam!!");
			}
		}

		function consoleLogVariables() {
			console.log("cast: " + cast + " Failed: " + fail);
			console.log("gemOneValue: ", gemOneValue + " gemTwoValue: " + gemTwoValue + " gemThreeValue: " + gemThreeValue + " gemFourValue: " + gemFourValue);
			console.log("randomGoal: " + randomGoal + " playerScore: " + playerScore);
			console.log("----------------------------------");

		}


		resetValues();

		$(".gem").on("click", function() {
			var pressed = $(this).attr("value");
        	console.log(pressed);
        	if (pressed == "gem1") {
        		playerScore += gemOneValue;
        	} else if (pressed == "gem2") {
        		playerScore += gemTwoValue;
        	} else if (pressed == "gem3") {
        		playerScore += gemThreeValue;
        	} else if (pressed == "gem4") {
        		playerScore += gemFourValue;
        	} else {
        		console.log("error");
        	}
        	$("#userScore").html(playerScore);
        	consoleLogVariables();
        	winLose();

        });
	});



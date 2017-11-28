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
		}

		
		function winLose() {
			if (playerScore > randomGoal) {
				fail++;
				alert ("BOOM!!!");
				resetValues();

			}
			if (playerScore === randomGoal) {
				cast++;
				alert ("Shazam!!");
				resetValues();
			}
		}

		resetValues();

		$(".gem").on("click", function() {
			var selected = $(this).attr("value");
        	if (selected == "gem1") {
        		playerScore += gemOneValue;
        	} else if (selected == "gem2") {
        		playerScore += gemTwoValue;
        	} else if (selected == "gem3") {
        		playerScore += gemThreeValue;
        	} else if (selected == "gem4") {
        		playerScore += gemFourValue;
        	} else {
        		console.log("error");
        	}

        	$("#userScore").html(playerScore);

        	winLose();
        });
	});



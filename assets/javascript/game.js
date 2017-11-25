
		var randomGoal;
		var gemOneValue, gemTwoValue, gemThreeValue, gemFourValue;
		var cast = 0;
		var fail = 0;
		var playerScore;

		function resetValues() {
			randomGoal = Math.floor (Math.random() * (19 - 120) + 19);
			gemOneValue = 1 + Math.floor(Math.random() * 12);
			gemTwoValue = 1 + Math.floor(Math.random() * 12);
			gemThreeValue = 1 + Math.floor(Math.random() * 12);
			gemFourValue = 1 + Math.floor(Math.random() * 12);
			playerScore = 0
			cast = 0
			fail = 0
			
			$("#castTally").html("Cast: " + cast);
			$("#failTally").html("Fail: " + fail);
			$("#randomNumber").html(randomComputerNumber);
			$("#userScore").html(userTallyScore);

			consoleLogVariables();
		}

		function randomWholeNumCrystal() {
  			return Math.random();
			}
		
		function getRandomFloatGoal(min, max) {
  			return Math.random() * (19 - 120) + 19;
			}


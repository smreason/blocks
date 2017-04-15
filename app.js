
$(document).ready(function() {
	var phaseOnes = $('.phase1');
	var phaseTwos = $('.phase2');
	var prevButton = $("#prev-group");
	var nextButton = $("#next-group");
	var leftBlock = $("#left-block");
	var rightBlock = $("#right-block");
	var icons = $('#icons > svg');
	var speed = 300;

	prevButton.on("click", function() {
		nextButton.prop("disabled", false);
		prevButton.prop("disabled", true);
		moveTheBlocks(false);
	});
	nextButton.on("click", function() {
		prevButton.prop("disabled", false);
		nextButton.prop("disabled", true);
		moveTheBlocks(true);
	});

	function moveTheBlocks(toNext) {
		var questionGroup = $('.question-group.current');
		var midHeight = ((Math.random() * 40) + 20)+ "%";
		var leftIcon, rightIcon;
		var notThisIndex = -1;

		function getRandomIcon() {
			do {
				randomIndex = Math.floor(Math.random() * icons.length);
			} while (randomIndex === notThisIndex);
			console.log(notThisIndex, randomIndex);
			notThisIndex = randomIndex;
			return icons.eq(randomIndex);
		}

		leftBlock.html(getRandomIcon());
		rightBlock.html(getRandomIcon());

		//phaseTwos.css("top", midHeight);

		phaseOnes.toggleClass('show');
		setTimeout(function() {
			phaseTwos.toggleClass('show');
		}, speed);
		setTimeout(function() {
			phaseTwos.toggleClass('show');
			questionGroup.removeClass('current');
			if (toNext) {
				questionGroup.next().addClass('current');
			}
			else {
				questionGroup.prev().addClass('current');
			}
		}, speed * 2.5);
		setTimeout(function() {
			phaseOnes.toggleClass('show');
		}, speed * 3);
	}
});
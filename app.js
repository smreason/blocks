
$(document).ready(function() {
	var blocks = $('.slide-in');
	$("#toggle-blocks").on("click", function() {
		blocks.toggleClass('show');
	});
});
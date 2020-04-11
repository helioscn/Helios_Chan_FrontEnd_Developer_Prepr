$(document).ready(function() {
	setupMainHeader();
});

function setupMainHeader() {
	$(".mmh_item:nth-child(1)").on("click", function() {
		$("#no_listing").show();
		$("#yes_listing").hide();
	});

	$(".mmh_item:nth-child(2)").on("click", function() {
		$("#no_listing").hide();
		$("#yes_listing").show();
	});

	$(".mmh_item")[0].click();
}
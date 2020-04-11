$(document).ready(function() {
	$(".mmh_item").on("click", function() {
		$(".mmh_item").css({
			"color": "rgba(0, 0, 0, 0.3)",
			"border-bottom": "2px solid rgba(0, 0, 0, 0.3)",
			"background-color": "white",
			"box-shadow": "inset 0 0 5px rgba(0, 0, 0, 0.0)"
		});
		$(this).css({
			"color": "#00c924",
			"border-bottom": "2px solid #00c924",
			"background-color": "rgba(0, 0, 0, 0.05)",
			"box-shadow": "inset 0 0 5px rgba(0, 0, 0, 0.1)"
		});
	});

	$(".mmh_item")[0].click();
});
let items = [];
let visibles = [];

$(document).ready(function() {
	setupHeaderClick();
	setupFilter();
	setupItemOptions();
	setupCategories();
});

function setupHeaderClick() {
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
}

function setupFilter() {
	$("#filter").on("click", function() {
		if ($("#filter_container").height() == 0){
			$("#filter_container").css({
				"height": "auto",
				"padding": "24px 0",
				"border-bottom": "1px solid #f1f1f1"
			});
		} else {
			$("#filter_container").css({
				"height": "0",
				"padding": "0",
				"border-bottom": "0px solid #f1f1f1"
			});
		}
	});

	$(".locality_option").on("click", function() {
		$(this).parent().find(".locality_option").css({
			"background-color": "rgba(0, 0, 0, 0)",
			"color": "rgba(0, 0, 0, 0.4)"
		});
		$(this).css({
			"background-color": "rgba(0, 0, 0, 0.05)",
			"color": "#00c924"
		});
	});

	$("#filter_everywhere").click();

	$("#filter_category").on("change", function() {
		let option = $(this).children("option:selected").val();
		categoryFilter(option);
	});
}

function setupItemOptions() {
	$(".join").on("click", function() {
		$(this).css("color", "green");
		$(this).html("<i class='fas fa-check'></i>");
	});

	$(".favorite").on("click", function() {
		$(this).css("color", "gold");
		$(this).html("<i class='fas fa-star'></i>")
	});
}

function setupCategories() {
	items = $(".list_item");

	$(".category").on("click", function() {
		categoryFilter($(this).text());
	});
}

function categoryFilter(text) {
	visibles = [];

	for (i = 0; i < items.length; i++) {
		let innerCat = $(items[i]).find(".list_cat").text();
		if (innerCat.indexOf(text) >= 0) {
			visibles.push($(items[i]));
		}
	}

	$("#listing").empty();

	for (i = 0; i < visibles.length; i++) {
		$("#listing").append(visibles[i]);
		if (i != visibles.length - 1) {
			let hr = $("<hr>");
			$("#listing").append(hr);
		}
	}
	setupItemOptions();
}
$(document).ready(function() {
	exploreNavigation();
});

function exploreNavigation() {
	$(".explore_link").on("click", function() {
		$(".explore_link").css({
			"background-color": "white",
			"color": "#666"
		});
		$(this).css({
			"background-color": "#eee",
			"color": "#00c924"
		});

		switch($(this).attr("id")) {
			case "exp_challenges":
				filterBy("challenge");
				break;
			case "exp_labs":
				filterBy("lab");
				break;
			case "exp_projects":
				filterBy("project");
				break;
		}
	});
}

function filterBy(f) {
	let items = $(".explore_item");
	for (let i = 0; i < items.length; i++) {
		let type = $(items[i]).find(".item_type").text();
		type = type.toLowerCase().slice(6);

		$(items[i]).show();

		if (type !== f) {
			$(items[i]).hide();
		}
	}
}
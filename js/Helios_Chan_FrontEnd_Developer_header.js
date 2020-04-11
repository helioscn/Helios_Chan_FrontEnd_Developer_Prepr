$(document).ready(function() {
	setupEventListeners();
});

$(window).resize(function() {
	setupEventListeners();
});

function setupEventListeners() {
	EL_searchIcon();
	EL_headerScroll();
	EL_sidebar();
	EL_sidebarScroll();
}

function EL_searchIcon() {
	let status = false;
	$("#search_icon").on("click", function() {
		if (!status) {
			$("#search_bar > input").css("width", "180px");
			$("#search_bar").css({
				"border": "1px solid rgba(0, 0, 0, 0.2)",
				"padding": "8px"
			});
			status = true;
		} else {
			$("#search_bar > input").css("width", "0px");
			$("#search_bar").css({
				"border": "1px solid rgba(0, 0, 0, 0.0)",
				"padding": "0px"
			});
			status = false;
		}
	});
}

function EL_headerScroll() {
	$(document).on("scroll", function() {
		let headerW = $("header").width();
		let totalHeight = $(document).height() - $(window).height();
		let fromTop = $(document).scrollTop();
		
		$("#screen_pos_bar").css("width", headerW * (fromTop / totalHeight));
	});
}

function EL_sidebar() {
	let sb = false;
	$("#hamburger").on("click", function() {
		if (!sb) {
			$("#sidebar").css("width", "200px");
			sb = true;
		} else {
			$("#sidebar").css("width", "0");
			sb = false;
		}
	});
}

function EL_sidebarScroll() {
	let mouseInBar = false;
	let docPosY = -1;
	let nextPosY;
	let barHeight = $(window).height() - 63;
	let sideHeight = $("#sidebar_inner")[0].scrollHeight;
	let scrollBarHeight = barHeight * (barHeight / sideHeight);
	$("#scroll_loc").css("height", scrollBarHeight);

	$("#sidebar").on("mouseenter", function() {
		mouseInBar = true;
		docPosY = $(document).scrollTop();
		$("#sidebar_scroll").css("opacity", 1);
	}).on("mouseleave", function() {
		mouseInBar = false;
		docPosY = -1;
		$("#sidebar_scroll").css("opacity", 0);
	});

	$(window).on("wheel", function(e) {
		let scrollAmount = 0;
		if (mouseInBar) {
			$(document).scrollTop(docPosY);
		}
	});

	$("#sidebar_inner").on("scroll", function() {
		let barScrollPos = $("#sidebar_inner").scrollTop();
		$("#scroll_loc").css("top", (barHeight - scrollBarHeight) * (barScrollPos / (sideHeight - barHeight)));
	});
}
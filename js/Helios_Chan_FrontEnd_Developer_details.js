let posts = [
	{ id: 0, avatarUrl: "images/default-user.png", name: "Helios Chan", time: "04/09/2020 03:58:40", replies: 3, msg: "The pigs were insulted that they were named hamburgers." },
	{ id: 1, avatarUrl: "images/default-user.png", name: "Tamara Henry", time: "03/04/2020 10:42:48", replies: 0, msg: "She had the gift of being able to paint songs." },
	{ id: 2, avatarUrl: "images/default-user.png", name: "Sue Savage", time: "01/01/2020 06:26:34", replies: 0, msg: "He decided that the time had come to be stronger than any of the excuses he'd used until then." },
	{ id: 3, avatarUrl: "images/default-user.png", name: "Stewart Odonnell", time: "01/01/2020 21:50:44", replies: 0, msg: "There were three sphered rocks congregating in a cubed room." },
	{ id: 4, avatarUrl: "images/default-user.png", name: "Simrah Nolan", time: "01/04/2020 11:50:14", replies: 0, msg: "The bees decided to have a mutiny against their queen." },
	{ id: 5, avatarUrl: "images/default-user.png", name: "James Dixon", time: "01/21/2020 15:11:10", replies: 0, msg: "Tom got a small piece of pie." },
	{ id: 6, avatarUrl: "images/default-user.png", name: "Helios Chan", time: "01/19/2020 04:31:45", replies: 0, msg: "They were excited to see their first sloth." }
];

let replies = [
	{ id: 0, avatarUrl: "images/default-user.png", pid: 0, name: "Tamara Henry", time: "01/26/2020 19:31:10", msg: "We need to rent a room for our party." },
	{ id: 1, avatarUrl: "images/default-user.png", pid: 0, name: "Stewart Odonnell", time: "02/20/2020 22:43:21", msg: "We need to rent a room for our party." },
	{ id: 2, avatarUrl: "images/default-user.png", pid: 0, name: "Simrah Nolan", time: "01/09/2020 01:19:39", msg: "We need to rent a room for our party." }
];

$(document).ready(function() {
	setupOverview();
	setupDiscussion();
});

function setupOverview() {
	mainNav();
	infoBody();
	hostCarousel();
}

function setupDiscussion() {
	buildPosts();
	sLikes();
	sPosts();
	sDiscussionTop();
	sCommentAdder();
}

function idIndex(id) {
	let index;
	let found = false;
	for (let p = 0; p < posts.length && !found; p++) {
		if (posts[p].id == id) {
			index = p;
			found = true;
		}
	}
	return index;
}

function sCommentAdder() {
	// ADD COMMENT TEXTAREA
	$("#add_comment").on("keydown", function(e) {
		if (e.keyCode === 13) {
			e.preventDefault ? e.preventDefault() : (e.returnValue = false);
			
			let dateStr = new Date().toISOString();
			let post = { id: posts.length, avatarUrl: "images/default-user.png", name: "Default User", time: dateStr, replies: 0, msg: $("#add_comment").val()};
			posts.push(post)
			$("#add_comment").val("");

			refreshDiscussion(0);
		}
	});
}

function sDiscussionTop() {
	// TOP X POSTS BUTTON
	if (posts.length < 11) {
		$("#top_x_posts").text("Top " + posts.length + " posts");
	} else {
		$("#top_x_posts").text("Top 10 posts");
	}

	// SHOW X POSTS BUTTON
	$("#show_all_x").text("Show all " + posts.length);
}

function refreshDiscussion(id) {
	buildPosts();
	sLikes();
	sPosts();
	sDiscussionTop();

	if (id) {
		let post = $("#chatbox").find("[data-id=" + id + "]");
		post.find(".toggle_replies").click();
	}
}

function mainNav() {
	$(".details_nav_item").on("click", function() {
		$(".details_nav_item").css({
			"color": "rgba(0, 0, 0, 0.4)",
			"border-bottom": "2px inset rgba(0, 0, 0, 0.4)",
			"background-color": "white",
			"box-shadow": "inset 0 0 5px rgba(0, 0, 0, 0.0)"
		});
		$(this).css({
			"color": "#00c924",
			"border-bottom": "4px inset #00c924",
			"background-color": "rgba(0, 0, 0, 0.05)",
			"box-shadow": "inset 0 0 5px rgba(0, 0, 0, 0.1)"
		});

		$("#overview").hide();
		$("#discussion").hide();

		switch ($(this).index()) {
		case 0:
			$("#overview").show();
			break;
		case 1:
			$("#discussion").show();
			break;
		}
	});

	$(".details_nav_item")[0].click();
}

function infoBody() {
	$(".info_header").on("click", function() {
		let body = $(this).siblings(".info_body");
		if (body.height() === 0) {
			body.css("height", "auto");
			$(this).css("color", "#00c924");
		} else {
			body.css("height", "0");
			$(this).css("color", "rgba(0, 0, 0, 0.5");
		}
	});
}

function hostCarousel() {
	let r = false, l = false;
	let timer;

	$("#oc_right").on("mousedown", function() {
		r = true;
	});

	$("#oc_right").on("mouseover", function() {
		timer = setInterval(function() {
			if (r) {
				scrollCarousel(20);
			}
		}, 10);
	}.bind(this)).on("mouseleave", function() {
		clearInterval(timer);
		r = false;
	});

	$("#oc_left").on("mousedown", function() {
		l = true;
	});

	$("#oc_left").on("mouseover", function() {
		timer = setInterval(function() {
			if (l) {
				scrollCarousel(-20);
			}
		}, 10);
	}.bind(this)).on("mouseleave", function() {
		clearInterval(timer);
		l = false;
	});

	$(window).on("mouseup", function() {
		r = false;
		l = false;
	});
}

function scrollCarousel(n) {
	let x = $("#oc_inner").scrollLeft();
	x += n;
	$("#oc_inner").scrollLeft(x);
}

function sLikes() {
	let like = false, dislike = false;

	$(".pc_reaction i").on("click", function() {
		if ($(this).hasClass("fa-thumbs-up")) {
			if (!like) {
				$(this).css("color", "#00c924");
				like = true;
				$(this).siblings(".pc_reaction i").css("color", "rgba(0, 0, 0, 0.3)");
				dislike = false;
			} else {
				$(this).css("color", "rgba(0, 0, 0, 0.3");
				like = false;
			}
		} else {
			if (!dislike) {
				$(this).css("color", "#b80000");
				dislike = true;
				$(this).siblings(".pc_reaction i").css("color", "rgba(0, 0, 0, 0.3)");
				like = false;
			} else {
				$(this).css("color", "rgba(0, 0, 0, 0.3");
				dislike = false;
			}
		}
	});
}

function sPosts() {
	$(".toggle_replies").on("click", function() {
		let replyBox = $(this).parent().parent().find(".replies");
		let id = $(this).parent().parent().parent().attr("data-id");
		let pin = idIndex(id);

		if (replyBox.children().length === 0) {
			buildReplies(id, replyBox);
		}

		if (!replyBox.is(":visible")) {
			replyBox.show();
			$(this).text("Hide replies (" + posts[pin].replies + ")");
		} else {
			replyBox.hide();
			$(this).text("Show replies (" + posts[pin].replies + ")");
		}
	});

	$(".reply").on("click", function() {
		let addReply = $(this).parent().parent().find(".add_reply");
		!addReply.is(":visible") ? addReply.show() : addReply.hide();
	});

	$(".add_reply").on("keydown", function(e) {
		if (e.keyCode === 13) {
			e.preventDefault ? e.preventDefault() : (e.returnValue = false);

			let id = $(this).closest(".post").attr("data-id");
			let dateStr = new Date().toISOString();
			let reply = { id: replies.length, avatarUrl: "images/default-user.png", pid: id, name: "Default User", time: dateStr, msg: $(this).val() };
			let pin = idIndex(id);

			posts[pin].replies++;
			replies.push(reply);
			$(this).val("");
			refreshDiscussion(id);
		}
	});
}

function buildPosts() {
	$("#chatbox").empty();

	posts.sort(function(a, b) {
		return new Date(b.time) - new Date(a.time);
	});

	for (i = 0; i < posts.length; i++) {
		let post = $("<div>", { class: "post", "data-id": posts[i].id });
		let avatar = $("<div>", { class: "post_avatar" });
		let content = $("<div>", { class: "post_content" });
		let header = $("<div>", { class: "pc_header" });
		let nameContainer = $("<div>");
		let name = $("<h5>");
		let ago = $("<span>", { class: "time_ago" });
		let reactBox = $("<div>", { class: "pc_reaction" });
		let tup = $("<i>", { class: "far fa-thumbs-up"});
		let tdown = $("<i>", { class: "far fa-thumbs-down"});
		let message = $("<p>");
		let footer = $("<div>", { class: "post_footer" });
		let toggle = $("<span>", {class:"toggle_replies"});
		let reply = $("<span>", {class:"reply"});
		let addReply = $("<textarea>", { class: "add_reply", placeholder: "Add a reply..."});
		let repliesBox = $("<div>", {class:"replies"});

		avatar.css("background-image", "url('" + posts[i].avatarUrl + "')");
		name.text(posts[i].name);
		ago.text(timeElapsedCalculator(new Date(posts[i].time)) + " ago");
		message.text(posts[i].msg);
		toggle.text("Show replies (" + posts[i].replies + ")");
		if (posts[i].replies > 0) {
			toggle.css("display", "inline-block");
		}
		reply.text("Reply");

		/* POST HIERARCHY
		POST
		--CONTENT
		----HEADER
		------NAME CONTAINER
		--------NAME
		--------TIME AGO
		------REACTION BOX
		--------LIKE
		--------DISLIKE
		----MESSAGE
		----FOOTER
		------TOGGLE REPLY
		------REPLY BUTTON
		----ADD REPLY
		----REPLY BOX
		*/

		footer.append(toggle);
		footer.append(reply);
		reactBox.append(tup);
		reactBox.append(tdown);
		nameContainer.append(name);
		nameContainer.append(ago);
		header.append(nameContainer);
		header.append(reactBox);
		content.append(header);
		content.append(message);
		content.append(footer);
		content.append(addReply);
		content.append(repliesBox);
		post.append(avatar);
		post.append(content);

		$("#chatbox").append(post);
	}
}

function buildReplies(id, box) {
	$(box).empty();

	replies.sort(function(a, b) {
		return new Date(b.time) - new Date(a.time);
	})

	for (i = 0; i < replies.length; i++) {
		if (replies[i].pid == id) {
			let reply = $("<div>", { class: "rep", "data-id": replies[i].id });
			let avatar = $("<div>", { class: "post_avatar" });
			let content = $("<div>", { class: "post_content" });
			let header = $("<div>", { class: "pc_header" });
			let nameContainer = $("<div>");
			let name = $("<h5>");
			let ago = $("<span>", { class: "time_ago" });
			let reactBox = $("<div>", { class: "pc_reaction" });
			let tup = $("<i>", { class: "far fa-thumbs-up"});
			let tdown = $("<i>", { class: "far fa-thumbs-down"});
			let message = $("<p>");

			avatar.css("background-image", "url('" + replies[i].avatarUrl + "')");
			name.text(replies[i].name);
			ago.text(timeElapsedCalculator(new Date(replies[i].time)) + " ago");
			message.text(replies[i].msg);

			reactBox.append(tup);
			reactBox.append(tdown);
			nameContainer.append(name);
			nameContainer.append(ago);
			header.append(nameContainer);
			header.append(reactBox);
			content.append(header);
			content.append(message);
			reply.append(avatar);
			reply.append(content);

			$(box).append(reply);
		}
	}

	sLikes();
}

function timeElapsedCalculator(past) {
	let measurement;
	let number;
	let now = new Date();
	let diff = now - past;

	if (diff < 1000) {
		measurement = "seconds";
		number = 0;
	} else if (diff > 1000 && diff < 60000) {
		number = Math.floor(diff/1000);
		measurement = pluralCheck(number, "second");
	} else if (diff >= 60000 && diff < 3600000) {
		number = Math.floor(diff/60000);
		measurement = pluralCheck(number, "minute");
	} else if (diff >= 3600000 && diff < 86400000) {
		number = Math.floor(diff/3600000);
		measurement = pluralCheck(number, "hour");
	} else if (diff >= 86400000) {
		number = Math.floor(diff/86400000);
		measurement = pluralCheck(number, "day");
	}

	return (number + " " + measurement);
}

function pluralCheck(n, text) {
	if (n != 1) {
		text += "s";
	}
	return text;
}
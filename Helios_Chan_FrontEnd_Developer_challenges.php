<!DOCTYPE html>
<html>
	<head>
		<title>Challenges - Prepr Network</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="css/Helios_Chan_FrontEnd_Developer_listing_template.css">
		<link rel="stylesheet" href="css/Helios_Chan_FrontEnd_Developer_challenges.css">
		<link rel="icon" type="image/png" href="images/favicon.png">
		<script
			  src="https://code.jquery.com/jquery-3.4.1.min.js"
			  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
			  crossorigin="anonymous"></script>
		<script src="js/Helios_Chan_FrontEnd_Developer_listing_template.js"></script>
		<script src="js/Helios_Chan_FrontEnd_Developer_challenges.js"></script>
	</head>
	<body>
		<?php include 'Helios_Chan_FrontEnd_Developer_header.php'; ?>
		<div class="auto_96" id="my_container">
			<div class="flex_between">
				<h1>CHALLENGES</h1>
			</div>
			<div id="my_container_overlay">
				<div id="my_nav_container">
					<a class="my_link">My Account</a>
					<hr>
					<a class="my_link">Challenges</a>
					<hr>
					<a href="Helios_Chan_FrontEnd_Developer_labs.php" class="my_link">Labs</a>
					<hr>
					<a href="Helios_Chan_FrontEnd_Developer_projects.php" class="my_link">Projects</a>
				</div>
				<div id="my_main">
					<div id="my_main_header">
						<h5 class="mmh_item">Browse</h5>
						<h5 class="mmh_item">Submitted</h5>
						<h5 class="mmh_item">Following</h5>
					</div>
					<div class="main_listing">
						<p id="no_listing">No challenges found!</p>
						<div id="yes_listing">
							<div id="listing_header">
								<div class="flex_between">
									<h3>Popular Categories</h3>
									<div id="option_container" class="flex_between">
										<i id="filter" class="fas fa-filter list_option"></i>
										<i id="sort" class="fas fa-sort list_option"></i>
										<i id="num" class="fas fa-sliders-h list_option"></i></i>
									</div>
								</div>
								<div id="categories_container">
									<span class="category">Cat 1</span>
									<span class="category">Cat 2</span>
									<span class="category">Cat 3</span>
									<span class="category">Cat 4</span>
									<span class="category">Cat 5</span>
								</div>
							</div>
							<div id="filter_container">
								<select id="filter_category" name="filter_category">
									<option value="" selected>Select Category</option>
									<option value="Cat 1">Cat 1</option>
									<option value="Cat 2">Cat 2</option>
									<option value="Cat 3">Cat 3</option>
									<option value="Cat 4">Cat 4</option>
									<option value="Cat 5">Cat 5</option>
								</select>
								<div id="filter_locality">
									<span class="locality_option" id="filter_everywhere">All</span>
									<span class="locality_option" id="filter_local">Local</span>
								</div>
								<div id="filter_privacy" class="control-group">
							        <label class="control control-radio">
							            Public
							            <input type="radio" name="privacy" value="public" checked="checked" />
							            <div class="control_indicator"></div>
							        </label>
							        <label class="control control-radio">
							            Private
							            <input type="radio" name="privacy" value="private" />
							            <div class="control_indicator"></div>
							        </label>
							    </div>
							</div>
							<ul id="listing">
								<li class="list_item">
									<a href="Helios_Chan_FrontEnd_Developer_details.php"><div class="list_img"></div></a>
									<div class="list_info">
										<div class="info_top">
											<a href="Helios_Chan_FrontEnd_Developer_details.php"><h2>Front End Developer Work Challenge</h2></a>
											<span class="info_company">Prepr</span>
											<p>Your task is to redesign a few key pages of the Prepr Network. Reimagine and create frontend webpages of the following pages (and possible sub-pages): Explore page (https://preprlabs.org/ Projects page (https://preprlabs.org/myProjects) Challenges page (https://preprlabs.org/list/challenge) Challenge details page (https://preprlabs.org/challengeManager/front-end-developer-work-challenge)...</p>
										</div>
										<div class="info_bottom">
											<div class="list_category_container">
												<a class="list_cat">Cat 1</a>
											</div>
											<div class="list_item_footer flex_between">
												<div class="item_stats">
													<div class="is_container">
														<i class="far fa-heart"></i>
														<span class="is_likes">5</span>
													</div>
													<div class="is_container">
														<i class="far fa-comments"></i>
														<span class="is_comments">3</span>
													</div>
													<div class="is_container">
														<i class="fas fa-share-alt"></i>
														<span class="is_shares">1</span>
													</div>
													<div class="is_container">
														<i class="far fa-eye"></i>
														<span class="is_views">241</span>
													</div>
												</div>
												<div class="item_options flex_between">
													<a class="join"><i class="fas fa-plus"></i></a>
													<a class="favorite"><i class="far fa-star"></i></a>
												</div>
											</div>
										</div>
									</div>
								</li>
								<hr>
								<li class="list_item">
									<a href="Helios_Chan_FrontEnd_Developer_details.php"><div class="list_img"></div></a>
									<div class="list_info">
										<div class="info_top">
											<a href="Helios_Chan_FrontEnd_Developer_details.php"><h2>Front End Developer Work Challenge</h2></a>
											<span class="info_company">Prepr</span>
											<p>Your task is to redesign a few key pages of the Prepr Network. Reimagine and create frontend webpages of the following pages (and possible sub-pages): Explore page (https://preprlabs.org/ Projects page (https://preprlabs.org/myProjects) Challenges page (https://preprlabs.org/list/challenge) Challenge details page (https://preprlabs.org/challengeManager/front-end-developer-work-challenge)...</p>
										</div>
										<div class="info_bottom">
											<div class="list_category_container">
												<a class="list_cat">Cat 2</a>
											</div>
											<div class="list_item_footer flex_between">
												<div class="item_stats">
													<div class="is_container">
														<i class="far fa-heart"></i>
														<span class="is_likes">5</span>
													</div>
													<div class="is_container">
														<i class="far fa-comments"></i>
														<span class="is_comments">3</span>
													</div>
													<div class="is_container">
														<i class="fas fa-share-alt"></i>
														<span class="is_shares">1</span>
													</div>
													<div class="is_container">
														<i class="far fa-eye"></i>
														<span class="is_views">241</span>
													</div>
												</div>
												<div class="item_options flex_between">
													<a class="join"><i class="fas fa-plus"></i></a>
													<a class="favorite"><i class="far fa-star"></i></a>
												</div>
											</div>
										</div>
									</div>
								</li>
								<hr>
								<li class="list_item">
									<a href="Helios_Chan_FrontEnd_Developer_details.php"><div class="list_img"></div></a>
									<div class="list_info">
										<div class="info_top">
											<a href="Helios_Chan_FrontEnd_Developer_details.php"><h2>Front End Developer Work Challenge</h2></a>
											<span class="info_company">Prepr</span>
											<p>Your task is to redesign a few key pages of the Prepr Network. Reimagine and create frontend webpages of the following pages (and possible sub-pages): Explore page (https://preprlabs.org/ Projects page (https://preprlabs.org/myProjects) Challenges page (https://preprlabs.org/list/challenge) Challenge details page (https://preprlabs.org/challengeManager/front-end-developer-work-challenge)...</p>
										</div>
										<div class="info_bottom">
											<div class="list_category_container">
												<a class="list_cat">Cat 5</a>
											</div>
											<div class="list_item_footer flex_between">
												<div class="item_stats">
													<div class="is_container">
														<i class="far fa-heart"></i>
														<span class="is_likes">5</span>
													</div>
													<div class="is_container">
														<i class="far fa-comments"></i>
														<span class="is_comments">3</span>
													</div>
													<div class="is_container">
														<i class="fas fa-share-alt"></i>
														<span class="is_shares">1</span>
													</div>
													<div class="is_container">
														<i class="far fa-eye"></i>
														<span class="is_views">241</span>
													</div>
												</div>
												<div class="item_options flex_between">
													<a class="join"><i class="fas fa-plus"></i></a>
													<a class="favorite"><i class="far fa-star"></i></a>
												</div>
											</div>
										</div>
									</div>
								</li>
								<hr>
								<li class="list_item">
									<a href="Helios_Chan_FrontEnd_Developer_details.php"><div class="list_img"></div></a>
									<div class="list_info">
										<div class="info_top">
											<a href="Helios_Chan_FrontEnd_Developer_details.php"><h2>Front End Developer Work Challenge</h2></a>
											<span class="info_company">Prepr</span>
											<p>Your task is to redesign a few key pages of the Prepr Network. Reimagine and create frontend webpages of the following pages (and possible sub-pages): Explore page (https://preprlabs.org/ Projects page (https://preprlabs.org/myProjects) Challenges page (https://preprlabs.org/list/challenge) Challenge details page (https://preprlabs.org/challengeManager/front-end-developer-work-challenge)...</p>
										</div>
										<div class="info_bottom">
											<div class="list_category_container">
												<a class="list_cat">Cat 3</a>
											</div>
											<div class="list_item_footer flex_between">
												<div class="item_stats">
													<div class="is_container">
														<i class="far fa-heart"></i>
														<span class="is_likes">5</span>
													</div>
													<div class="is_container">
														<i class="far fa-comments"></i>
														<span class="is_comments">3</span>
													</div>
													<div class="is_container">
														<i class="fas fa-share-alt"></i>
														<span class="is_shares">1</span>
													</div>
													<div class="is_container">
														<i class="far fa-eye"></i>
														<span class="is_views">241</span>
													</div>
												</div>
												<div class="item_options flex_between">
													<a class="join"><i class="fas fa-plus"></i></a>
													<a class="favorite"><i class="far fa-star"></i></a>
												</div>
											</div>
										</div>
									</div>
								</li>
								<hr>
								<li class="list_item">
									<a href="Helios_Chan_FrontEnd_Developer_details.php"><div class="list_img"></div></a>
									<div class="list_info">
										<div class="info_top">
											<a href="Helios_Chan_FrontEnd_Developer_details.php"><h2>Front End Developer Work Challenge</h2></a>
											<span class="info_company">Prepr</span>
											<p>Your task is to redesign a few key pages of the Prepr Network. Reimagine and create frontend webpages of the following pages (and possible sub-pages): Explore page (https://preprlabs.org/ Projects page (https://preprlabs.org/myProjects) Challenges page (https://preprlabs.org/list/challenge) Challenge details page (https://preprlabs.org/challengeManager/front-end-developer-work-challenge)...</p>
										</div>
										<div class="info_bottom">
											<div class="list_category_container">
												<a class="list_cat">Cat 4</a>
											</div>
											<div class="list_item_footer flex_between">
												<div class="item_stats">
													<div class="is_container">
														<i class="far fa-heart"></i>
														<span class="is_likes">5</span>
													</div>
													<div class="is_container">
														<i class="far fa-comments"></i>
														<span class="is_comments">3</span>
													</div>
													<div class="is_container">
														<i class="fas fa-share-alt"></i>
														<span class="is_shares">1</span>
													</div>
													<div class="is_container">
														<i class="far fa-eye"></i>
														<span class="is_views">241</span>
													</div>
												</div>
												<div class="item_options flex_between">
													<a class="join"><i class="fas fa-plus"></i></a>
													<a class="favorite"><i class="far fa-star"></i></a>
												</div>
											</div>
										</div>
									</div>
								</li>
								<hr>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php include 'Helios_Chan_FrontEnd_Developer_footer.php'; ?>
	</body>
</html>
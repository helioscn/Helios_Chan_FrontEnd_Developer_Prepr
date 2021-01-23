<!DOCTYPE html>
<html>
	<head>
		<title>Projects - Prepr Network</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="css/Helios_Chan_FrontEnd_Developer_listing_template.css">
		<link rel="stylesheet" href="css/Helios_Chan_FrontEnd_Developer_projects.css">
		<link rel="icon" type="image/png" href="images/favicon.png">
		<script
			  src="https://code.jquery.com/jquery-3.4.1.min.js"
			  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
			  crossorigin="anonymous"></script>
		<script src="js/Helios_Chan_FrontEnd_Developer_projects.js"></script>
	</head>
	<body>
		<?php include 'header.php'; ?>
		<div class="auto_96" id="my_container">
			<div class="flex_between">
				<h1>PROJECTS</h1>
				<a href="#">
					<i class="fas fa-plus"></i>
					<span id="create_proj">Create a new project</span>
				</a>
			</div>
			<div id="my_container_overlay">
				<div id="my_nav_container">
					<a class="my_link">My Account</a>
					<hr>
					<a href="challenges.php" class="my_link">Challenges</a>
					<hr>
					<a href="labs.php" class="my_link">Labs</a>
					<hr>
					<a class="my_link">Projects</a>
				</div>
				<div id="my_main">
					<div id="my_main_header">
						<h5 class="mmh_item">My Projects</h5>
						<h5 class="mmh_item">Invited Projects</h5>
					</div>
					<div class="main_listing">
						<p id="no_listing">You don't have any active projects. <a href="#" class="new_listing_item">Start your first project now!</a></p>
					</div>
				</div>
			</div>
		</div>
		<?php include 'footer.php'; ?>
	</body>
</html>
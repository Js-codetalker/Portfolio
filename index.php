<!DOCTYPE html>
<html>
<head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
	<meta charset="utf-8">
	<title></title>
	<link rel="stylesheet" type="text/css" href="styles.css">
	<link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
	<?/php require 'debug'; ?>

</head>
<body>
<header>
	<nav>
		<a href="#About"><p>About</p><div class="gradient"></div></a>
		<a href="#Skills"><p>Skillset</p><div class="gradient"></div></a>
		<a href="#Portfolio"><p>Portfolio</p><div class="gradient"></div></a>
		<a href="#Contact"><p>Contact</p><div class="gradient"></div></a>
	</nav>
</header>
	<h2 id="About"><strong>Hi!</strong> I'm Julio Salas</h2>
	<div class="grid-conteiner">	
		<p class="grid-item">the "nerd" behind this website, and <strong>the person you've looking for</strong> carry out your proyect.</p>
		<p class="grid-item">I'm a web designer from Venezuela, but actually based on Colombia. I like reading, coding and <strong>solve problems.</strong></p>
		<p class="grid-item">But of course, you want proofs rather than words, so keep scrolling and <strong>see what I can do for you.</strong></p>
		<img src="#">
	</div>

	<div class="blur-filter">
		<div class="container">
			<h2 id="Skills">I'm good in</h2>
			<div class="skills">
				<div class="skills_slot">
					<img id="img1" class="skills_slot_icon" src="Images/html.png" alt="HTML5-icon">
					<h3 id="h3-1">HTML5</h3> 
				</div>
				<div class="skills_slot">
					<img id="img2" class="skills_slot_icon" src="Images/css.png" alt="CSS3-icon">
					<h3>CSS3</h3>
				</div>
				<div class="skills_slot">
					<img id="img3"class="skills_slot_icon" src="Images/js.png" alt="Javascript-icon">
					<h3>Javascript</h3>
				</div>
				<div class="skills_slot">
					<img id="img4" class="skills_slot_icon" src="Images/mysql.png" alt="MySQL-icon">
					<h3>MySQL</h3>
				</div>
				<div class="skills_slot">
					<!--<img id="img5" class="skills_slot_icon" src="Images/php2.png" alt="PHP-icon">-->
					<h3>PHP</h3>
				</div>
				<div class="skills_slot">
					<img id="img6" class="skills_slot_icon" src="Images/wordpress.png" alt="WordPress-icon">
						<h3 id="h3-2">WordPress</h3>
				</div>
			</div>
		</div>	
		<h1 id="Portfolio">Portfolio</h1>
		<div class="portfolio">
				<div class="portfolio-item">
					<h3>Title</h3>
					<img src="Images/thumb-1920-649533.png" alt="#">
					<div class="portfolio__item-viewMore" id="portfolio__item-viewMore">
							<p>View more</p>
					</div>
					<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </blockquote>
					<p><em>Person - Ocupation</em></p>
					<div class="portfolio-item-gradient"></div>
				</div>

		</div>

		<h2 id="Contact">Contact</h2>
		<form>
			<div class="form-input">
				<input type="email" name="email" placeholder="Write your email" required="true">
			</div>
			<div class="form-input">
				<input type="text" name="asunto" placeholder="Write the subject" required="true">
			</div>
			<div class="form-input">
				<input type="text" name="message" placeholder="Write your message" required="true">
			</div>
			<div class="form-input">	
				<input type="submit" value="Send!">
			</div>
		</form>
		<div class="socialMedia">
				<a class="socialMedia__slot" href="https://www.linkedin.com/in/julio-salas-b10605200/">
					<img src="Images/linkedin.png" alt="linkedin-icon">
					<p>Message me on</p>
				</a>
				<a class="socialMedia__slot" href="https://github.com/Js-codetalker">
					<img src="Images/github.png" alt="Github-icon">
					<p>Follow me on</p>
				</a>
		</div>
</div>
	<!--Popup-->
	<div class="overlay" id="overlay">
		<div class="popup" id="popup">
			<div class="close-popup"><a href="" id="close-popup"><i class="fas fa-times"></i></a></div><!--Boton de cierre	-->
			<img class="popup-mainImg" src="Images/thumb-1920-649533.png">
			<a href="#" class="popup__link"><img id="world-link" src="Images/world.png" class="popup-imgLink"></a>
			<a href="#" class="popup__link"><img id="github-link" src="Images/github.png" class="popup-imgLink"></a>
			<p class="popup__description"></p>
			<div class="popup__skillContainer">
				<img src="">
				<img src="">
				<img src="">
			</div>
		</div>
	</div>
<script type="text/javascript" src="app.js"></script>
</body>
</html>
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
	<?//php require 'debug'; ?>

</head>
<body>
<header>
	<nav>
		<a href="#About"><p>About</p><div class="gradient"></div></a>
		<a href="#Portfolio"><p>Portfolio</p><div class="gradient"></div></a>
		<a href="#Contact"><p>Contact</p><div class="gradient"></div></a>
	</nav>
</header>
	<div class="blur-filter">
		<h2 id="About"><strong>Hi!</strong> I'm Julio Salas</h2>
		<div class="grid-conteiner">	
			<p class="grid-item">the "nerd" behind this website, and <strong>the person you've looking for</strong> 	carry out your proyect.</p>
			<p class="grid-item">I'm a web designer from Venezuela, but actually based on Colombia. I like reading, coding and <strong>solve problems.</strong></p>
			<p class="grid-item">But of course, you want proofs rather than words, so keep scrolling and <strong>see 	what I can do for you.</strong></p>
		</div>

		<h1 id="Portfolio">Portfolio</h1>
		<div class="portfolio">
				<div class="portfolio-item">
					<h3>Title</h3>
					<img src="Images/thumb-1920-649533.png" alt="#">
					<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </blockquote>
					<div class="portfolio__item-container">
						<p class="portfolio__item-container-viewMore" id="portfolio__item-viewMore">View more</p>
						<p class="portfolio__item-container-client"><em>Person - Ocupation</em></p> 	
					</div>
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
			<p class="popup__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
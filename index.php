<!DOCTYPE html>
<html>
<head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
	<meta charset="utf-8">
	<title></title>
	<link rel="stylesheet" type="text/css" href="styles.css">
	<link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
	<script src="https://kit.fontawesome.com/7e5b2d153f.js" crossorigin="anonymous"    ></script>
	<?//php require 'debug'; ?>

</head>
<body>
<header>
	<nav class="nav">
		<button class="nav__toggleButton">
			<i class="fas fa-bars"></i>
		</button>
		<ul class="nav__menu toggle">
			<li class="nav__menu-item"><a class="nav__menu-item-link" href="#About" id="link1">About</a><div class="nav__menu-item-link-gradient"></div></li>
			<li class="nav__menu-item"><a class="nav__menu-item-link" href="#Portfolio" id="link2">Portfolio</a><div class="nav__menu-item-link-gradient"></div></li>
			<li class="nav__menu-item"><a class="nav__menu-item-link" href="#Contact" id="link3">Contact</a><div class="nav__menu-item-link-gradient"></div></li>
		</ul>
	</nav>
</header>
	
	<div class="blur-filter">
		<div class="about">
			<h2 id="About" class="about__title"><strong>Hi!</strong> I'm Julio Salas</h2>
				<p class="about__paragraph">I'm the "nerd" behind this website, and <strong>the person you've looking for</strong> 	carry out your proyect.</p>
				<br>
				<p class="about__paragraph">I'm a web designer from Venezuela, but actually based on Colombia. I like reading, coding and <strong>solve problems.</strong></p>
				<br>
				<p class="about__paragraph">But of course, you want proofs rather than words, so keep scrolling and <strong>see 	what I can do for you.</strong></p>
		</div>
		<h1 id="Portfolio">Portfolio</h1>
		<div class="portfolio">
				<div class="portfolio-item">
					<h3>Example pizzeria</h3>
					<a href="#" target="blank"><img src="Images/world.png" class="portfolio-imgLink"></a>
					<img class="portfolio__workImg" src="Images/Captura de pantalla (303).png" alt="#">
					<blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </blockquote>
					<div class="portfolio__item-container">
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
				<a target="blank" class="socialMedia__slot" href="https://www.linkedin.com/in/julio-salas-b10605200/">
					<img src="Images/linkedin.png" alt="linkedin-icon">
					<p>Message me on</p>
				</a>
				<a target="blank" class="socialMedia__slot" href="https://github.com/Js-codetalker">
					<img src="Images/github.png" alt="Github-icon">
					<p>Follow me on</p>
				</a>
		</div>
</div>
	<!--
	<div class="overlay" id="overlay">
		<div class="popup" id="popup">
			<div class="close-popup"><a href="" id="close-popup"><i class="fas fa-times"></i></a></div> Boton de cierre
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
	</div>Popup-->
<script type="text/javascript" src="app.js"></script>
</body>
</html>
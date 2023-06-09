function render(contents) {
return `
<!DOCTYPE html>
<html>
<head>
	<title>Travel Website</title>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="navbar">
		<div class="logo">
			<h1>Travel</h1>
		</div>
		<div class="menu">
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Places</a></li>
				<li><a href="#">Discounts</a></li>
				<li><a href="#">Contact</a></li>
				<li><a href="#">Booking</a></li>
			</ul>
		</div>
		<div class="login">
			<a href="#">Login</a>
		</div>
	</div>
	<div class="body">
		<div class="heading">
			<h1>Travel With Us</h1>
			<br>
			<p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. </p>
			<br>
			<br>
			<a href="#">Learn More</a>
		</div>
		<div class="tours">
			${contents
				.map ((content) => `<div class="places"><h2>${content.title}</h2></div>`)
				.join('')
			}
		</div>
	</div>
	<div class="footer">
		<a href="#">Copyright</a>
		<a href="#">Terms and Conditions</a>
		<a href="#">Privacy Policy</a>
		<a href="#">Cookies</a>
		<a href="#">Complaints</a>
	</div>
</body>
</html>
`}

module.exports = render;
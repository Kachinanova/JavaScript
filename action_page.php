<!DOCTYPE html>
<html lang="en">

<head>
	<!-- 
		WhotsIts and WhatsIts
		Author: Katrina Ward
		Date: 09/05/2017
	-->
<title>WhotsIts and WhatsIts</title>
<meta charset="utf-8">
<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="whositsandwhatsits.css">
<script src="modernizr.custom.05819.js">
</script>
<!-- [if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js">
</script>
<![endif]-->
</head>

<body>
	<div id="wrapper">
		<header>
			<a href="index.html"><h1>WhosIts and WhatsIts</h1></a>
		</header>

<!-- Navigation links in an unordered list. -->
		<nav>
			<ul>
				<li><a href="index.html">&nbsp; HOME &nbsp;</a></li>
				<li><a href="hobbies.html"> &nbsp; HOBBIES &nbsp;</a></li>
				<li><a href="bucket.html"> &nbsp; BUCKET LIST &nbsp;</a></li>
				<li><a id="curpage" href="contact.html"> &nbsp; CONTACT &nbsp;</a></li>
				<li><a href="archive.html"> &nbsp; ARCHIVES &nbsp;</a></li>
			</ul>
		</nav>

		<main>
<!-- Simple contact form with inputs and list boxes -->
			<h1>Thank You.</h1>
			<p>
				Hello <?php echo $_POST["myFName"]; ?> <?php echo $_POST["myLName"]; ?>.
				<br><br>
				Your Email: <?php echo $_POST["myEmail"]; ?>
				<br><br>
				Your Comments:
				<br>
				<?php echo $_POST["myComments"]; ?>
			</p>
			
			<br><br>
			<p>(Not sure if this page is working properly. Will try to fix down the road.)
			</p>
			
			<br><br>
			
			<form action="#">
				<input type="button" value = "Back" onclick="javascript:history.go(-1)" />
			</form>

			
		</main>

<!-- Copyright info -->
		<footer>
			Copyright &copy; 2017 Katrina Ward
		</footer>
	</div>
	
	
</body>
</html>

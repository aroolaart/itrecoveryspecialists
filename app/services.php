<?php
	$template = file_get_contents("template.html");
	$page = file_get_contents('views/services.html');
	$updatedHTML = str_replace('AACONTENTAA', $page, $template);
	echo $updatedHTML;
?>
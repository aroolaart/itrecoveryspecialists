<?php
	$story = $_GET["story"];
	$template = file_get_contents("template.html");
	if ($story != '')  {
		$page = file_get_contents('views/'.$story.'.html');
	} else {	
		$page = file_get_contents('views/press.html');
	}
	$updatedHTML = str_replace('AACONTENTAA', $page, $template);
	echo $updatedHTML;
?>
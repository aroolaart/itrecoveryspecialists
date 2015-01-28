var htmlTitle = $(document).find("title").text();
//var htmlURL = document.location.href;
var htmlURL = "http://www.itrecoveryspecialists.com";

var shareURLs = {
	"site" : [
		{ 
			"facebook" : "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(htmlURL) +  "%3Futm_source%3Dfacebook%26utm_medium%3Dsocial%26utm_campaign%3Dshareurlbuttons",
			"twitter" : "https://twitter.com/intent/tweet?url=" + encodeURIComponent(htmlURL) +  "%3Futm_source%3Dtwitter%26utm_medium%3Dsocial%26utm_campaign%3Dshareurlbuttons&amp;text=" + htmlTitle,
			"linkedin" : "http://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(htmlURL) + "&title=" + htmlTitle,
			"google" : "https://plus.google.com/share?url=" + encodeURIComponent(htmlURL)
		}
	]
}

$(document).ready(function(){
	$("a[title~='Facebook']").attr("href",shareURLs.site[0].facebook);
	$("a[title~='Twitter']").attr("href",shareURLs.site[0].twitter);
	$("a[title~='Linkedin']").attr("href",shareURLs.site[0].linkedin);
	$("a[title~='Google']").attr("href",shareURLs.site[0].google);
});

// HANDLE WEB BUTTON CLICKS FOR SHAARE

$("a[title~='Facebook']").on("click", function(){
	ga('send', 'event', 'button', 'click', 'Facebook');
});

$("a[title~='Twitter']").on("click", function(){
	ga('send', 'event', 'button', 'click', 'Twitter');
});

$("a[title~='LinkedIn']").on("click", function(){
	ga('send', 'event', 'button', 'click', 'Linkedin');
});

$("a[title~='Google']").on("click", function(){
	ga('send', 'event', 'button', 'click', 'GooglePlus');	
});

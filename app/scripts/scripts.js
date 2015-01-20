$(document).ready(function(){

  $("#maincarousel").carousel();
  $('.navbar-toggle').on('click',function(){
    $('.share.dropdown').slideUp("fast");
    $('.banner .share').css("visibility","visible");      
  });
  $(window).on('scroll', function() {
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition >= 100 && $('.container-fluid .share').is(":hidden")) {
        //alert("scrolled");
        $('.banner .share').css("visibility","hidden");
        $('.share.dropdown').slideDown("slow");
        //$(this).off('scroll');
    }
    if (scrollPosition <= 50 && $('.container-fluid .share').is(":visible")) {
        //alert("scrolled");
        $('.banner .share').css("visibility","visible");
        $('.share.dropdown').slideUp("fast");
        //$(this).off('scroll');
    }    
  });

  $('.glyphicon-hand-up').on('click',function(){
     $(this).hide();
     $('footer .info').show();
     $('.glyphicon-hand-down').show();
   });
   $('.glyphicon-hand-down').on('click',function(){
     $(this).hide();
     $('footer .info').hide();
     $('.glyphicon-hand-up').show();
   });  

   $('footer').on('click', function(){
      if($(this).height() < 100) {
        $('.info').show();
        $(this).animate({
          height: "+=100"
        },500);
      } else {
        $(this).animate({
          height: "-=100"
        },500, function(){
          $('.info').hide();
          });          
      }
   });
});

function submitForm($scope,$location) {
console.log( $('#contactForm').serialize() );
var dataString = $('#contactForm').serialize();
//console.log("data = : " + dataString)
$.ajax({
    type: 'POST',
    url: 'services/process-email.php',
    data: dataString,
    success: function(res) {
        if (res == 'successful') {
            //alert("successful");
            window.location=('thanks.php');
        }
        else {
            //alert("failed");
            window.location=('thanks.php');
        } 
    },
    error: function () {
      //alert("failed outer");
      //$("html, body").animate({ scrollTop: 0 }, "slow");
      window.location=('thanks.php');
    }
});
}


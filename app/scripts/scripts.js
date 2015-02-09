$(document).ready(function(){

  $('img[src$="ciscos-worse-nightmare-1-sm.jpg')
      .wrap('<span style="display:inline-block"></span>')
      .css('display', 'block')
      .parent()
      .zoom({url: 'images/press/ciscos-worse-nightmare-1.jpg'});

  $('img[src$="ciscos-worse-nightmare-2-sm.jpg')
      .wrap('<span style="display:inline-block"></span>')
      .css('display', 'block')
      .parent()
      .zoom({url: 'images/press/ciscos-worse-nightmare-2.jpg'});

  $('img[src$="financial-times-2-sm.jpg')
      .wrap('<span style="display:inline-block"></span>')
      .css('display', 'block')
      .parent()
      .zoom({url: 'images/press/financial-times-2.jpg'});

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


  $('#contactForm').validator().on('submit', function(e) {

    //if(e.isDefaultPrevented())  {
      //alert("The form is not completed correctly");
    //} else {
      var dataString = $('#contactForm').serialize();
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
            window.location=('thanks.php');
          }
      });
    //}
  });


// Handle hightlight of menu

var url = window.location;
// Will only work if string in href matches with location
$('ul.nav a[href="'+ url +'"]').parent().addClass('active');

// Will also work for relative and absolute hrefs
$('ul.nav a').filter(function() {
    return this.href == url;
}).parent().addClass('active');

//removed highlighted About Us
if(!(url.pathname.match(/about/g) || url.pathname.match(/mgmt/g))) {
  $('ul.nav li.dropdown').removeClass("active");
} 

if(url.href.match(/press/g)) {
  $('ul.nav a[href="press.php"]').parent().addClass("active");
} 





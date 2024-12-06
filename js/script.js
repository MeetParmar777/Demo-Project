$(document).ready(function(){

    // $('.hero-banner-section').slick({
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false
    //   });


$("#counter1").counter({
  autoStart: true,           // true/false, default: true
  duration: 5000,             // milliseconds, default: 1500
  countFrom: 10,              // start counting at this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing
});
$("#counter2").counter({
  autoStart: true,           // true/false, default: true
  duration: 5000,             // milliseconds, default: 1500
  countFrom: 10,              // start counting at this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing
});
$("#counter3").counter({
  autoStart: true,           // true/false, default: true
  duration: 4500,             // milliseconds, default: 1500
  countFrom: 1000,              // start counting at this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing
});
$("#counter4").counter({
  autoStart: true,           // true/false, default: true
  duration: 5000,             // milliseconds, default: 1500
  countFrom: 10,              // start counting at this number, default: 0
  runOnce: true,              // only run the counter once, default: false
  easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing
});





// $('.cta-section .main-content').mousemove(function(e) {
//   var x = e.clientX;
//   var y = e.clientY;
//   var r = Math.floor(x / 5);
//   var g = Math.floor(y / 2);
//   var transformValue = 'translate(' + r + 'px, ' + g + 'px)';
  
//   // Set the custom property to control the ::before transform
//   $('.cta-section .main-content').css('--before-transform', transformValue);
// });.
// $('.cta-section .main-content').mousemove(function(e) {
//   // Get the mouse coordinates
//   var x = e.clientX;
//   var y = e.clientY;

//   // Get the dimensions of the .main-content element
//   var contentWidth = $(this).width();
//   var contentHeight = $(this).height();

//   // Calculate the translation values
//   var r = Math.floor(x / 5);
//   var g = Math.floor(y / 2);

//   // Limit the translation to stay within the bounds of .main-content
//   r = Math.min(Math.max(r, -contentWidth / 2), contentWidth / 2);  // Clamps the value between -width/2 and width/2
//   g = Math.min(Math.max(g, -contentHeight / 2), contentHeight / 2);  // Clamps the value between -height/2 and height/2

//   // Create the transform value
//   var transformValue = 'translate(' + r + 'px, ' + g + 'px)';

//   // Apply the transform to the ::before pseudo-element dynamically
//   $('.cta-section .main-content').css('--before-transform', transformValue);
// });




$(".our-service-section .upper-btn .primary-cta").click(function (){
  $(".our-service-section .upper-btn .primary-cta").addClass("hoverable");
  $(this).removeClass("hoverable");
});

$('.our-client-slider').slick({
    autoplay: true,
    autoplaySpeed: 1,
    speed: 3000,
    cssEase: 'linear',
    infinite: true,
    // waitForAnimate: false,
    pauseOnFocus: false, 
    pauseOnHover: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        }
      },
    ]
  });

$('.testimonial-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
  });


  $(document).ready(function() {
    var header = $('#header');
    var stickyOffset = header.offset().top; // Get the initial position of the header
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > stickyOffset) {
        header.addClass('fixed');  // Add the 'fixed' class when scrolling past the header
      } else {
        header.removeClass('fixed');  // Remove the 'fixed' class when scrolled back to the top
      }
    });
  });
  


});


var mixer = mixitup('.filter-content' , {
  load: {
    filter: '.category-a'
},

  animation: {
      // duration: 300,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      // effects: 'fade',
      // effectsIn: 'fade translateY(-100%)',
      // effectsOut: 'fade translateY(-100%)'
  },
  // controls: {
  //     live: true,
  //     toggleLogic: 'and'
  // }
});
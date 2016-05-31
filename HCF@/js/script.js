$(document).ready(function() {
            
            $(".contentContainer").css("min-height",$(window).height());
        
            $('#myCarousel').carousel({
                interval: 2000
            });
            
            var navpos = $('#about').offset();
            console.log(navpos.top);
            $(window).scroll(function() {
                var navpos = $('#about').offset();
                if ($(window).scrollTop() > navpos.top - $(".navbar").height() - 50) {
                    $('.navbar').addClass('navredesign');
                }
                else {
                    $('.navbar').removeClass('navredesign');
                }
            });
            
            // Add smooth scrolling to all links in navbar + footer link
          $(".navbar a").on('click', function(event) {

           // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 900, function(){

              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
              });
            } // End if
          });
            
            $(".navbar-nav li a").click(function(event) {
                $(".navbar-collapse").collapse('hide');
            });
    
        });
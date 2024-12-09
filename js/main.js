(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Smooth scrolling to section
    $(".btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 0
            }, 1500, 'easeInOutExpo');
        }
    });
    
    
    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);


document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Initialize EmailJS inside the function
    emailjs.init("AMuPMSQYNKGGex-pC"); // Replace with your EmailJS public key

    // Collect form data
    const formData = {
        from_name: document.getElementById('name').value, // Name field
        from_email: document.getElementById('email').value, // Email field
        subject: document.getElementById('subject').value, // Subject field
        message: document.getElementById('message').value, // Message field
    };
    

    // Use EmailJS to send the form data
    emailjs.send("service_try3cfo", "template_0is1ubk", formData)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);

            // Show success popup
            const popup = document.getElementById('popup');
            popup.style.display = 'block';

            // Hide popup after 3 seconds
            setTimeout(() => {
                popup.style.display = 'none';
            }, 3000);

            // Reset the form
            document.getElementById('contactForm').reset();
        }, function (error) {
            console.log('FAILED...', error);
            alert("Failed to send the message. Please try again.");
        });
});


const snowContainer = document.getElementById("snow-container");
const maxSnowflakes = 50; // Limit the total number of snowflakes
let snowflakeCount = 0; // Counter for active snowflakes

// Function to create snowflakes
function createSnowflake() {
  if (snowflakeCount >= maxSnowflakes) return; // Stop creating new snowflakes if the limit is reached

  const snowflake = document.createElement("div");
  const size = Math.random() * 3 + 3; // Random size between 5px and 10px

  // Add the snowflake class and style it dynamically
  snowflake.classList.add("snowflake");
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`; // Random speed
  snowflake.style.opacity = Math.random() * 0.5 + 0.5; // Random transparency

  // Add snowflake to the container
  snowContainer.appendChild(snowflake);
  snowflakeCount++; // Increment the counter

  // Remove snowflake after animation ends to free up memory
  snowflake.addEventListener("animationend", () => {
    snowflake.remove();
    snowflakeCount--; // Decrement the counter
  });
}

// Generate snowflakes at regular intervals
setInterval(createSnowflake, 200); // Adjust interval to control the creation rate

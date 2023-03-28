// IIFE (Immediately Invoked Function Expression) to avoid polluting the global namespace
(function ($) {
    "use strict";

    // Spinner
    function initSpinner() {
        setTimeout(() => {
            const spinner = $('#spinner');
            if (spinner.length > 0) {
                spinner.removeClass('show');
            }
        }, 1);
    }

    // Initialize wowjs
    function initWowJs() {
        new WOW().init();
    }

    // Facts counter
    function initCounterUp() {
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // Typed Initiate
    function initTypedJs() {
        const typedTextOutput = $('.typed-text-output');
        if (typedTextOutput.length === 1) {
            const typed_strings = $('.typed-text').text();
            const typed = new Typed('.typed-text-output', {
                strings: typed_strings.split(', '),
                typeSpeed: 100,
                backSpeed: 20,
                smartBackspace: false,
                loop: true
            });
        }
    }

    // Smooth scrolling to section
    function initSmoothScrolling() {
        $(".btn-scroll").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1500, 'easeInOutExpo');
            }
        });
    }

    // Skills
    function initSkillProgress() {
        $('.skill').waypoint(function () {
            $('.progress .progress-bar').each(function () {
                $(this).css("width", $(this).attr("aria-valuenow") + '%');
            });
        }, {offset: '80%'});
    }

    // Portfolio isotope and filter
    function initPortfolioFilter() {
        const portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });
        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('active');
            $(this).addClass('active');

            portfolioIsotope.isotope({filter: $(this).data('filter')});
        });
    }

    // Testimonials carousel
    function initTestimonialCarousel() {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            dots: true,
            loop: true,
            items: 1
        });
    }

    // Back to top button
    function initBackToTopButton() {
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
    }

    // Initialize all functions
    function init() {
        initSpinner();
        initWowJs();
        initCounterUp();
        initTypedJs();
        initSmoothScrolling();
        initSkillProgress();
        initPortfolioFilter();
        initTestimonialCarousel();
        initBackToTopButton();
    }

    // Run the init function after the document is ready
    $(document).ready(init);
})(jQuery);


$(document).ready(function () {
    // hamburger menu show
    $(".hamburg-icon").on("click", function (e) {
        e.preventDefault();
        $('.js-nav').addClass('mobile-menu--show');
        $("body").addClass("menu-open");
        $(".hamburg-close").addClass("hamburg-close--show");
    });
    $(".hamburg-close").on("click", function (e) {
        e.preventDefault();
        $(this).removeClass("hamburg-close--show");
        $('.js-nav').removeClass('mobile-menu--show');
        $("body").removeClass("menu-open");
    });
    // end hamburger menu show

    //  cart js start
    $('.js-cart-icon').click(function () {
        $('.cwr-side-cart').addClass('open');
        $("body").addClass("menu-open");
    });
    $('.js-close-cart-btn').click(function () {
        $('.cwr-side-cart').removeClass('open');
        $("body").removeClass("menu-open");
    });
    //  cart js end

    //  header dropdown 
    if ($('.js-nav li.js-dropdown .dropdown').length > 0) {
        $('.js-nav li.js-dropdown .dropdown').click(function () {
            let getWindowsize = $(window).width();
            console.log(getWindowsize);
            if (getWindowsize <= 991) {
                if ($(this).parent('.js-dropdown').hasClass('active')) {
                    $(this).parent('.js-dropdown').removeClass('active');
                    $(this).next('.js-dropdown-list').slideUp();
                } else {
                    $('.js-dropdown').removeClass('active');
                    $('.dropdown-list').slideUp();
                    $(this).parent('.js-dropdown').addClass('active');
                    $(this).next('.js-dropdown-list').slideDown();
                }
            }
        });
    }
    if ($('.js-nav li .js-sub-menu .sub-dropdown').length > 0) {
        $('.js-nav li .js-sub-menu .sub-dropdown').click(function () {
            let getWindowsize = $(window).width();
            console.log(getWindowsize);
            if (getWindowsize <= 991) {
                if ($(this).parents('.js-sub-menu').hasClass('active')) {
                    $(this).parents('.js-sub-menu').removeClass('active');
                    $(this).next('.js-sub-dropdown-list').slideUp();
                } else {
                    $('.js-sub-menu').removeClass('active');
                    $('.js-sub-dropdown-list').slideUp();
                    $(this).parents('.js-sub-menu').addClass('active');
                    $(this).next('.js-sub-dropdown-list').slideDown();
                }
            }
        });
    }
    $(document).mouseup(function (e) {
        var container = $(".js-nav, .cwr-side-cart");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass("mobile-menu--show");
            $("body").removeClass("menu-open");
            $('.cwr-side-cart').removeClass('open');
        }
    });
    // end header dropdown 

    // country js start 
    $(document).on('click', '.cwr-country-logo .selected', function () {
        $(".cwr-country-logo .options").slideToggle();
    });
    $(".cwr-country-logo .options ul li a").click(function () {
        var countryImg = $(this).find('img').attr('src');
        $(".cwr-country-logo .selected a img").attr('src', countryImg);
        $(".cwr-country-logo .options").slideUp();
    });
    // country js end 

    // usp-slider js start 
    if ($('.js-usp-slider-content').length > 0) {
        var uspSlider = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            infinite: true,
            autoplaySpeed: 5000,
            autoplay: false,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: 'unslick'
                },
            ]
        }
        var winUsp = $(window);
        var sliderUsp = $(".js-usp-slider-content");

        winUsp.on("load resize", function () {
            if (winUsp.width() < 992) {
                sliderUsp.not(".slick-initialized").slick(uspSlider);
            } else if (sliderUsp.hasClass("slick-initialized")) {
                sliderUsp.slick("unslick");
            }
        });
    }
    // usp-slider js end 

    // js-banner-wrap start 
    if ($('.js-banner-wrap').length > 0) {
        $(".js-banner-wrap").each(function () {
            var slider = $(this);
            slider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                touchThreshold: 200,
                speed: 620,
                prevArrow: '<button type="button" class="prev-arrow"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.000995636 6.72148C0.000313759 6.83945 0.0229249 6.9564 0.0675335 7.06562C0.112142 7.17483 0.17787 7.27417 0.260948 7.35793L5.63929 12.7364C5.80808 12.9052 6.03701 13 6.27572 13C6.51443 13 6.74337 12.9052 6.91216 12.7364C7.08095 12.5676 7.17578 12.3386 7.17578 12.0999C7.17578 11.8612 7.08095 11.6323 6.91216 11.4635L2.16129 6.72148L6.9032 1.97948C7.05005 1.808 7.12679 1.58741 7.11807 1.36181C7.10936 1.1362 7.01583 0.922197 6.85619 0.762551C6.69655 0.602906 6.48255 0.509383 6.25695 0.500669C6.03135 0.491955 5.81077 0.568691 5.63929 0.715547L0.260948 6.09399C0.0953455 6.26096 0.00198603 6.48631 0.000995636 6.72148Z" fill="black"/></svg></button>',
                nextArrow: '<button type="button" class="next-arrow"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.17479 6.72148C7.17547 6.83945 7.15286 6.9564 7.10825 7.06562C7.06364 7.17483 6.99791 7.27417 6.91483 7.35793L1.53649 12.7364C1.3677 12.9052 1.13877 13 0.900058 13C0.661348 13 0.432414 12.9052 0.263621 12.7364C0.0948273 12.5676 0 12.3386 0 12.0999C0 11.8612 0.0948273 11.6323 0.263621 11.4635L5.01449 6.72148L0.272585 1.97948C0.125733 1.808 0.0489958 1.58741 0.0577097 1.36181C0.0664237 1.1362 0.159947 0.922197 0.319589 0.762551C0.479231 0.602906 0.693234 0.509383 0.918834 0.500669C1.14443 0.491955 1.36501 0.568691 1.53649 0.715547L6.91483 6.09399C7.08044 6.26096 7.1738 6.48631 7.17479 6.72148Z" fill="white"/></svg></button>',
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    },
                ]
            });
        });

        $('.js-banner-wrap').each(function () {
            let slide = $(this).find(".cwr-banner__img")

            if (slide.length === 1) {
                $(this).addClass("has-single-slide")
            }
        });
    }
    // js-banner-wrap end

    // js-cwr-logo-slider  start 
    if ($('.js-logo-slider-content').length > 0) {
        $(".js-logo-slider-content").each(function () {
            var slider = $(this);
            slider.slick({
                slidesToShow: 8,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
                speed: 900,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            arrows: false,
                            slidesToShow: 5,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            arrows: false,
                            slidesToShow: 4,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        });
    }
    // js-cwr-logo-slider  end 

    // js-marquee-slider start 
    if (jQuery('.js-marquee-slider').length > 0) {
        jQuery('.js-marquee-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 20000,
            pauseOnHover: false,
            cssEase: 'linear',
            arrows: false,
            variableWidth: true,
        });
    }
    // js-marquee-slider end 

    // js-cwr-our-product  start 
    if ($('.js-cwr-our-product').length > 0) {
        $(".js-cwr-our-product").each(function () {
            var slider = $(this);
            slider.slick({
                slidesToShow: 4.3,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                arrows: true,
                speed: 900,
                autoplay: false,
                prevArrow: '<button type="button" class="prev-arrow"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.000995636 6.72148C0.000313759 6.83945 0.0229249 6.9564 0.0675335 7.06562C0.112142 7.17483 0.17787 7.27417 0.260948 7.35793L5.63929 12.7364C5.80808 12.9052 6.03701 13 6.27572 13C6.51443 13 6.74337 12.9052 6.91216 12.7364C7.08095 12.5676 7.17578 12.3386 7.17578 12.0999C7.17578 11.8612 7.08095 11.6323 6.91216 11.4635L2.16129 6.72148L6.9032 1.97948C7.05005 1.808 7.12679 1.58741 7.11807 1.36181C7.10936 1.1362 7.01583 0.922197 6.85619 0.762551C6.69655 0.602906 6.48255 0.509383 6.25695 0.500669C6.03135 0.491955 5.81077 0.568691 5.63929 0.715547L0.260948 6.09399C0.0953455 6.26096 0.00198603 6.48631 0.000995636 6.72148Z" fill="black"/></svg></button>',
                nextArrow: '<button type="button" class="next-arrow"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.17479 6.72148C7.17547 6.83945 7.15286 6.9564 7.10825 7.06562C7.06364 7.17483 6.99791 7.27417 6.91483 7.35793L1.53649 12.7364C1.3677 12.9052 1.13877 13 0.900058 13C0.661348 13 0.432414 12.9052 0.263621 12.7364C0.0948273 12.5676 0 12.3386 0 12.0999C0 11.8612 0.0948273 11.6323 0.263621 11.4635L5.01449 6.72148L0.272585 1.97948C0.125733 1.808 0.0489958 1.58741 0.0577097 1.36181C0.0664237 1.1362 0.159947 0.922197 0.319589 0.762551C0.479231 0.602906 0.693234 0.509383 0.918834 0.500669C1.14443 0.491955 1.36501 0.568691 1.53649 0.715547L6.91483 6.09399C7.08044 6.26096 7.1738 6.48631 7.17479 6.72148Z" fill="white"/></svg></button>',
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            arrows: true,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            rows: 2,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            arrows: true,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            rows: 2,
                        }
                    }
                ]
            });
        });
    }
    // js-cwr-our-product  end 

    // matchHeight
    if ($('.cwr-our-product__box-content h5').length > 0) {
        $('.cwr-our-product__box-content h5').matchHeight({
            byRow: false,
        });
    }
    // js-cwr-review-slider start 
    if ($('.js-cwr-review-slider').length > 0) {
        $(".js-cwr-review-slider").each(function () {
            var slider = $(this);
            slider.slick({
                slidesToShow: 3.4,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                arrows: true,
                speed: 900,
                prevArrow: '<button type="button" class="prev-arrow"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.000995636 6.72148C0.000313759 6.83945 0.0229249 6.9564 0.0675335 7.06562C0.112142 7.17483 0.17787 7.27417 0.260948 7.35793L5.63929 12.7364C5.80808 12.9052 6.03701 13 6.27572 13C6.51443 13 6.74337 12.9052 6.91216 12.7364C7.08095 12.5676 7.17578 12.3386 7.17578 12.0999C7.17578 11.8612 7.08095 11.6323 6.91216 11.4635L2.16129 6.72148L6.9032 1.97948C7.05005 1.808 7.12679 1.58741 7.11807 1.36181C7.10936 1.1362 7.01583 0.922197 6.85619 0.762551C6.69655 0.602906 6.48255 0.509383 6.25695 0.500669C6.03135 0.491955 5.81077 0.568691 5.63929 0.715547L0.260948 6.09399C0.0953455 6.26096 0.00198603 6.48631 0.000995636 6.72148Z" fill="black"/></svg></button>',
                nextArrow: '<button type="button" class="next-arrow"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.17479 6.72148C7.17547 6.83945 7.15286 6.9564 7.10825 7.06562C7.06364 7.17483 6.99791 7.27417 6.91483 7.35793L1.53649 12.7364C1.3677 12.9052 1.13877 13 0.900058 13C0.661348 13 0.432414 12.9052 0.263621 12.7364C0.0948273 12.5676 0 12.3386 0 12.0999C0 11.8612 0.0948273 11.6323 0.263621 11.4635L5.01449 6.72148L0.272585 1.97948C0.125733 1.808 0.0489958 1.58741 0.0577097 1.36181C0.0664237 1.1362 0.159947 0.922197 0.319589 0.762551C0.479231 0.602906 0.693234 0.509383 0.918834 0.500669C1.14443 0.491955 1.36501 0.568691 1.53649 0.715547L6.91483 6.09399C7.08044 6.26096 7.1738 6.48631 7.17479 6.72148Z" fill="white"/></svg></button>',
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            arrows: true,
                            slidesToShow: 2.5,
                            slidesToScroll: 1,
                            arrows: true,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            arrows: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        });
    }
    // js-cwr-review-slider end

    // faq accordion
    if ($(".js-faq-main-wrapper").length > 0) {
        $('.js-faq-main-wrapper > li:first-child').addClass('active');
        $('.js-faq-main-wrapper > li.active .js-faq-main-ans').slideDown();
        $('.js-faq-main-wrapper .js-faq-main-que').click(function () {
            var dropDown = $(this).closest('li').find('.js-faq-main-ans');
            $(this).closest('.js-faq-main-wrapper').find('.js-faq-main-ans').not(dropDown).slideUp();
            if ($(this).parent("li").hasClass('active')) {
                $(this).parent("li").removeClass('active');
            } else {
                $(this).closest('.js-faq-main-wrapper').find('li.active').removeClass('active');
                $(this).parent("li").addClass('active');
            }
            dropDown.stop(false, true).slideToggle();
        });
    }
    // end faq accordion

    // js-slide-for__content start 
    if ($('.js-slide-for__content').length > 0) {
        $(".js-slide-for__content").each(function () {
            var slider = $(this);
            slider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                fade: true,
                dots: false,
                speed: 900,
                asNavFor: '.js-slide-now__content',
            });
            $('.js-slide-now__content').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.js-slide-for__content',
                infinite: false,
                dots: false,
                arrows: true,
                prevArrow: '<button type="button" class="prev-arrow"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.000995636 6.72148C0.000313759 6.83945 0.0229249 6.9564 0.0675335 7.06562C0.112142 7.17483 0.17787 7.27417 0.260948 7.35793L5.63929 12.7364C5.80808 12.9052 6.03701 13 6.27572 13C6.51443 13 6.74337 12.9052 6.91216 12.7364C7.08095 12.5676 7.17578 12.3386 7.17578 12.0999C7.17578 11.8612 7.08095 11.6323 6.91216 11.4635L2.16129 6.72148L6.9032 1.97948C7.05005 1.808 7.12679 1.58741 7.11807 1.36181C7.10936 1.1362 7.01583 0.922197 6.85619 0.762551C6.69655 0.602906 6.48255 0.509383 6.25695 0.500669C6.03135 0.491955 5.81077 0.568691 5.63929 0.715547L0.260948 6.09399C0.0953455 6.26096 0.00198603 6.48631 0.000995636 6.72148Z" fill="black"/></svg></button>',
                nextArrow: '<button type="button" class="next-arrow"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.17479 6.72148C7.17547 6.83945 7.15286 6.9564 7.10825 7.06562C7.06364 7.17483 6.99791 7.27417 6.91483 7.35793L1.53649 12.7364C1.3677 12.9052 1.13877 13 0.900058 13C0.661348 13 0.432414 12.9052 0.263621 12.7364C0.0948273 12.5676 0 12.3386 0 12.0999C0 11.8612 0.0948273 11.6323 0.263621 11.4635L5.01449 6.72148L0.272585 1.97948C0.125733 1.808 0.0489958 1.58741 0.0577097 1.36181C0.0664237 1.1362 0.159947 0.922197 0.319589 0.762551C0.479231 0.602906 0.693234 0.509383 0.918834 0.500669C1.14443 0.491955 1.36501 0.568691 1.53649 0.715547L6.91483 6.09399C7.08044 6.26096 7.1738 6.48631 7.17479 6.72148Z" fill="white"/></svg></button>',
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                        }
                    },
                ]
            });
        });
    }
    // js-slide-for__content end

    // get-discount js start 
    $(document).on('click', '.get-discount .get-discount-text', function () {
        $(".get-discount .get-discount__option").slideToggle();
    });
    $(".get-discount .get-discount__option p").click(function () {
        var discountOption = $(this).text();
        $(".get-discount .get-discount-text span").text(discountOption);
        $(".get-discount .get-discount__option").slideUp();
    });
    // get-discount js end 

    // color js start
    $('.color-count .up').on("click", function () {
        let count = $(this).parents('.counter').find('input').val();
        $(this).parents('.color__content').find('.color-spray__wrap .count').text(count);
        let selectedItem = $(this).parents('.color__content').find('.color-spray__wrap').html();
        let selectedDataId = $(this).parents('.color__content').find('.color-spray').data("id");

        if (count == 1) {
            $('.choose-color').append(selectedItem);
            $('.cwr-color-selection .choose-color .color-spray').matchHeight({
                byRow: false,
            });
        }
        else {
            count = count++;
            $('.choose-color .color-spray').each(function () {
                if ($(this).data("id") == selectedDataId) {
                    $(this).find('.count').text(`${count}`);
                    $('.cwr-color-selection .choose-color .color-spray').matchHeight({
                        byRow: false,
                    });
                }
            })
        }
    });
    $('.color-count .down').on("click", function () {
        let count = $(this).parents('.counter').find('input').val();
        let selectedDataId = $(this).parents('.color__content').find('.color-spray').data("id");
        count = count--;
        $(this).parents('.color__content').find('.color-spray__wrap .count').text(count);

        $('.choose-color .color-spray').each(function () {
            $(this).parents('.color__content').find('.color-spray__wrap').html();
            if ($(this).data("id") == selectedDataId) {
                $(this).find('.count').text(`${count}`);
                if (count === 0) {
                    $(this).remove();
                }
            }
        });
    });
    // color js end

    if ($('.cwr-color-selection .choose-color .color-spray').length > 0) {
        $('.cwr-color-selection .choose-color .color-spray').matchHeight({
            byRow: false,
        });
    }
    
    $('.color-spray').each(function () {
        var rgb = $(this).css('backgroundColor');
        var colors = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

        var r = colors[1];
        var g = colors[2];
        var b = colors[3];

        var o = Math.round(((parseInt(r) * 299) + (parseInt(g) * 587) + (parseInt(b) * 114)) / 1000);

        if (o > 125) {
            $(this).css('color', 'black');
        } else {
            $(this).css('color', 'white');
        }
    });

    // js-cwr-list-box  start 
    if ($('.js-cwr-list-box').length > 0) {
        $(".js-cwr-list-box").each(function () {
            var slider = $(this);
            var progressBar = $('.js-best-seller-progress');
            var progressBarLabel = $('.slider__label');
            slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;
                progressBar
                    .css('background-size', calc + '% 100%')
                    .attr('aria-valuenow', calc);
                progressBarLabel.text(calc + '% completed');
            });
            slider.slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
                speed: 900,
                autoplay: false,
                rows: 2,
            });
        });
    }
    // js-cwr-list-box  end 

    // cart progress bar start 

    let cartProgress = $('.js-cart-progress').attr('data-per');
    $('.js-cart-progress').css('background-size', cartProgress + '% 100%');

    // cart progress bar end 
    // ======================= Price range slider Start ===============================================================
    if ($('#slider-range').length > 0) {
        $("#slider-range").slider({
            range: true,
            min: 0.00,
            max: 1100,
            values: [0, 1100],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    }
    // ======================= Price range slider End ===============================================================

    $(".checkout").validate({
        rules: {
            firstname: "required",
            email: "required",
            number: "required",
            unitnumber: "required",
            lastname: "required",
            address: "required",
            city: "required",
            zipcode: "required",
            state: "required"
        },
        messages: {
            firstname: "please enter your firstname",
            lastname: "please enter your lastname",
            email: "please enter your email",
            number: "please enter your phone number",
            unitnumber: "please fill this",
            address: "please enter your address",
            city: "please enter your city",
            zipcode: "please enter your zipcode",
            state: "please enter your state",
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

    // cwr-blog js start 
    if ($('.js-blog-slider').length > 0) {
        var blogSlider = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false,
            autoplay: false,
            mobileFirst: true,
            prevArrow: '<button type="button" class="prev-arrow"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.000995636 6.72148C0.000313759 6.83945 0.0229249 6.9564 0.0675335 7.06562C0.112142 7.17483 0.17787 7.27417 0.260948 7.35793L5.63929 12.7364C5.80808 12.9052 6.03701 13 6.27572 13C6.51443 13 6.74337 12.9052 6.91216 12.7364C7.08095 12.5676 7.17578 12.3386 7.17578 12.0999C7.17578 11.8612 7.08095 11.6323 6.91216 11.4635L2.16129 6.72148L6.9032 1.97948C7.05005 1.808 7.12679 1.58741 7.11807 1.36181C7.10936 1.1362 7.01583 0.922197 6.85619 0.762551C6.69655 0.602906 6.48255 0.509383 6.25695 0.500669C6.03135 0.491955 5.81077 0.568691 5.63929 0.715547L0.260948 6.09399C0.0953455 6.26096 0.00198603 6.48631 0.000995636 6.72148Z" fill="black"/></svg></button>',
            nextArrow: '<button type="button" class="next-arrow"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.17479 6.72148C7.17547 6.83945 7.15286 6.9564 7.10825 7.06562C7.06364 7.17483 6.99791 7.27417 6.91483 7.35793L1.53649 12.7364C1.3677 12.9052 1.13877 13 0.900058 13C0.661348 13 0.432414 12.9052 0.263621 12.7364C0.0948273 12.5676 0 12.3386 0 12.0999C0 11.8612 0.0948273 11.6323 0.263621 11.4635L5.01449 6.72148L0.272585 1.97948C0.125733 1.808 0.0489958 1.58741 0.0577097 1.36181C0.0664237 1.1362 0.159947 0.922197 0.319589 0.762551C0.479231 0.602906 0.693234 0.509383 0.918834 0.500669C1.14443 0.491955 1.36501 0.568691 1.53649 0.715547L6.91483 6.09399C7.08044 6.26096 7.1738 6.48631 7.17479 6.72148Z" fill="white"/></svg></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: 'unslick'
                },
            ]
        }
        var winBlog = $(window);
        var sliderBlog = $(".js-blog-slider");

        winUsp.on("load resize", function () {
            if (winBlog.width() < 767) {
                sliderBlog.not(".slick-initialized").slick(blogSlider);
            } else if (sliderBlog.hasClass("slick-initialized")) {
                sliderBlog.slick("unslick");
            }
        });
    }
    // cwr-blog js end 
});
// Increase Decrease Count start
function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}
function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 0) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}
// Increase Decrease Count end

// clockdiv 
if ($('.checkout-page').length > 0) {
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 25);
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }
    var deadline = new Date(Date.parse(new Date()) + 25 * 60 * 60 * 1000);
    initializeClock('clockdiv', deadline);
}

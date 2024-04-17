document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
  
  
  
    
    // GSAP Timeline for header animation
    var headerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".header",
            start: "top -8%",
            end: "top -2%",
            scrub: 1,
        }
    });
    
    headerTimeline.to(".header", { duration: 0.1, height: "0px" })
                  .to(".header", { duration: 0.1, height: "100px" });
  
    // Initialize Swiper instances with common options
    var swiperOptions = {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    };
  
    var swiper1 = new Swiper(".mySwiper1", {
        ...swiperOptions,
        spaceBetween: 5,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 18
    });
  
    var swiper2 = new Swiper(".mySwiper2", {
        ...swiperOptions,
        slidesPerView: 3,
        spaceBetween: 60,
        speed: 300,
        autoplay: {
            ...swiperOptions.autoplay,
            delay: 2000,
            pauseOnMouseEnter: true,
        }
    });
    const menu_btn = document.querySelector('.hamburger');
      const mobile_menu = document.querySelector('.mobile-nav');
  
      menu_btn.addEventListener('click', function () {
          menu_btn.classList.toggle('is-active');
          mobile_menu.classList.toggle('is-active');
      });
  });
  
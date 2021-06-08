$(document).ready(function(){

  // --------Page Loader------
  //.delay( 1000 )
  // $('.pageLoaderCont').fadeOut('slow', function() {
  //   $(this).remove();
  // });


  // --------Page Loader------

  //  ------- scroll navbar -------
  // $(document).ready(function(){
  //   var scrollTop = 0;
  //   $(window).scroll(function(){
  //     scrollTop = $(window).scrollTop();
  //
  //     if (scrollTop >= 100) {
  //       $('.scroll').addClass('scrolled-nav');
  //     } else if (scrollTop < 100) {
  //       $('.scroll').removeClass('scrolled-nav');
  //     }
  //   });
  // });
  //  ------- scroll navbar -------

  //  -------- comming zoom slider-----
  $('.comming-soon-slider').owlCarousel({
    nav: true,
    center: true,
    items:2,
    loop:true,
    margin:0,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,

    responsive:{
      0:{
        items:1.4,
        nav:true
      },
      600:{
        items:3.2,
        nav:true
      },
      1000:{
        items:5.5,
        nav:true,
      }
    }
  });

  // var owl = $("#owl-demo");
  //
  // owl.owlCarousel();
  //
  // // Custom Navigation Events
  // $(".next").click(function(){
  //   owl.trigger('next.owl.carousel');
  // })
  // $(".prev").click(function(){
  //   owl.trigger('prev.owl.carousel');
  // })
  //
  // //  -------- comming zoon slider-----
  //
  // // --------tooltip-------
  // $(function () {
  //   $('[data-toggle="tooltip"]').tooltip()
  // })
  // // --------tooltip-------
  //
  //
  //
  // // ------Swpier slider - now showing-----------
  // var nowShowingSliderSelector = '.nowShowingSwiperSlider',
  // nowShowingSliderOption = {
  //   init: false,
  //   loop: true,
  //   autoplay: {
  //     delay: 3000,
  //   },
  //   speed:800,
  //   slidesPerView: 2, // or 'auto'
  //   // spaceBetween: 10,
  //   centeredSlides : true,
  //   effect: 'coverflow', // 'cube', 'fade', 'coverflow',
  //   coverflowEffect: {
  //     rotate: 50, // Slide rotate in degrees
  //     stretch: 0, // Stretch space between slides (in px)
  //     depth: 100, // Depth offset in px (slides translate in Z axis)
  //     modifier: 1, // Effect multipler
  //     slideShadows : true, // Enables slides shadows
  //   },
  //   grabCursor: true,
  //   parallax: true,
  //
  //   navigation: {
  //     nextEl: '.sliderArrowWrap .slide-next',
  //     prevEl: '.sliderArrowWrap .slide-prev',
  //   },
  //   breakpoints: {
  //     1023: {
  //       slidesPerView: 1,
  //       spaceBetween: 0
  //     }
  //   },
  //   // Events
  //   on: {
  //     imagesReady: function(){
  //       this.el.classList.remove('loading');
  //     }
  //   }
  // };
  // var nowShowingSlider = new Swiper(nowShowingSliderSelector, nowShowingSliderOption);
  //
  // // Initialize slider
  // if(nowShowingSlider.$el){
  //   nowShowingSlider.init();
  // }
  //
  // $('.nowShowingSwiperSlider').hover(function(){
  //   nowShowingSlider.autoplay.stop();
  // },function(){
  //   nowShowingSlider.autoplay.start();
  // });
  //
  // $('.swiperButtonArrow').click(function(){
  //   if($(this).hasClass('swiper-button-prev')){
  //     nowShowingSlider.slidePrev();
  //   }else if($(this).hasClass('swiper-button-next')){
  //     nowShowingSlider.slideNext();
  //   }
  // });
  //
  // $('.datepicker').datepicker({
  //   format: 'yyyy-mm-dd',
  //   autoclose: true
  // });



  // ------Swpier slider - now showing-----------



  /* =========================================
  COUNTDOWN 1
  ========================================= */
  // $('#clock').countdown('2021/1/10').on('update.countdown', function(event) {
  //   var $this = $(this).html(event.strftime(''
  //     + '<span class="h1 font-weight-bold">%D</span> Day%!d'
  //     + '<span class="h1 font-weight-bold">%H</span> Hr'
  //     + '<span class="h1 font-weight-bold">%M</span> Min'
  //     + '<span class="h1 font-weight-bold">%S</span> Sec'));
  // });

  /* =========================================
  HOW MANY TICKETS
  ========================================= */
  //  $("input[type='number']").inputSpinner()


  /* =========================================
  HOW MANY TICKETS
  ========================================= */
  // function startTimer(duration, display) {
  //     var timer = duration, minutes, seconds;
  //     setInterval(function () {
  //         minutes = parseInt(timer / 60, 10);
  //         seconds = parseInt(timer % 60, 10);
  //
  //         minutes = minutes < 10 ? "0" + minutes : minutes;
  //         seconds = seconds < 10 ? "0" + seconds : seconds;
  //
  //         display.textContent = minutes + ":" + seconds;
  //
  //         if (--timer < 0) {
  //             timer = duration;
  //         }
  //     }, 1000);
  // }
  //
  // window.onload = function () {
  //     var fiveMinutes = 60 * 10,
  //         display = document.querySelector('#time');
  //     startTimer(fiveMinutes, display);
  // };



});

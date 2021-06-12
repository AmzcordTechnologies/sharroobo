parasails.registerPage('homepage', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    slideIndex: '1',
    valueOfRange: '5000',
    totalVatRange: '0',
    month: 3,
    activeIndex: 1,
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {

    //…
  },
  mounted: async function() {
    this._setHeroHeight();

    new WOW().init();

    var range = document.getElementById('g-range-value');

    const number1 = document.getElementById("rangeValue");
    number1.innerHTML =  "5000 fdj";
    const demo = document.getElementById("demo");
    demo.innerHTML =  "0";

    const mobileRangeValue = document.getElementById("mobileRangeValue");
    mobileRangeValue.innerHTML =  "5000 fdj";
    const mobileDemo = document.getElementById("mobileDemo");
    mobileDemo.innerHTML =  "0";

    $(document).ready(function() {
      $("#news-slider").owlCarousel({
        items: 5,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["1", "2"],
        pagination: true,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
      });
    });

    $(document).ready(function() {
      $("#mobile-news-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["1", "2"],
        pagination: true,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
      });
    });

    $(document).ready(function() {
      $("#tab-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
      });
    });
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    clickToActive: function(x) {
      console.log("click" + x);

      this.activeIndex = x;
      console.log("this.activeIndex");
      console.log(this.activeIndex);

    },

    onChange: function(event) {

      const number = document.getElementById("rangeValue");
      number.innerHTML = event.target.value + " fdj";

      const mobileRangeValue = document.getElementById("mobileRangeValue");
      mobileRangeValue.innerHTML = event.target.value + " fdj";

      if (this.month > 0) {
        if (this.month == 3) {
          var value = (event.target.value / 100) * 3.89;
          this.totalVatRange = ((parseInt(value) + parseInt(this.valueOfRange)) / 3).toFixed(2);
        }

        if (this.month == 4) {
          var value = (event.target.value / 100) * 4.71;
          this.totalVatRange = ((parseInt(value) + parseInt(this.valueOfRange)) / 3).toFixed(2);
        }

        if (this.month == 5) {
          var value = (event.target.value / 100) * 6.31;
          this.totalVatRange = ((parseInt(value) + parseInt(this.valueOfRange)) / 3).toFixed(2);
        }
        this.valueOfRange = event.target.value;

      } else {
        this.valueOfRange = event.target.value;
      }



      document.getElementById("demo").innerHTML = this.totalVatRange;
      document.getElementById("mobileDemo").innerHTML = this.totalVatRange;

      console.log(this.totalVatRange);

    },

    calculateVat: function(x) {
      console.log("x");
      console.log(x);
      this.month = x;

      if (x == '3') {
        this.valueOfRange = '5000';
        var value = (this.valueOfRange / 100) * 3.89;
        const number = document.getElementById("rangeValue");
        number.innerHTML =  "5000 fdj";
        const number2 = document.getElementById("demo");
        number2.innerHTML = ((parseInt(value) + parseInt(this.valueOfRange)) / 3).toFixed(2);

        // mobiles
        const mobileRangeValue = document.getElementById("mobileRangeValue");
        mobileRangeValue.innerHTML =  "5000 fdj";
        const mobileDemo = document.getElementById("mobileDemo");
        mobileDemo.innerHTML = ((parseInt(value) + parseInt(this.valueOfRange)) / 3).toFixed(2);
      }

      if (x == '4') {
        this.valueOfRange = '12500';
        var value = (this.valueOfRange / 100) * 4.71;
        const number1 = document.getElementById("rangeValue");
        number1.innerHTML =  "12,500 fdj";
        const number = document.getElementById("demo");
        number.innerHTML = ((parseInt(value) + parseInt(this.valueOfRange)) / 3).toFixed(2);

        // mobiles
        const mobileRangeValue = document.getElementById("mobileRangeValue");
        mobileRangeValue.innerHTML =  "12,500 fdj";
        const mobileDemo = document.getElementById("mobileDemo");
        mobileDemo.innerHTML = ((parseInt(value) + parseInt(this.valueOfRange)) / 3).toFixed(2);
      }

      if (x == '5') {
        this.valueOfRange = '20000';
        var value = (this.valueOfRange / 100) * 6.31;
        const number1 = document.getElementById("rangeValue");
        number1.innerHTML =  "20,000 fdj";
        const number = document.getElementById("demo");
        number.innerHTML = ((parseInt(value) + parseInt(this.valueOfRange)) / 3).toFixed(2);

        // mobiles
        const mobileRangeValue = document.getElementById("mobileRangeValue");
        mobileRangeValue.innerHTML =  "20,000 fdj";
        const mobileDemo = document.getElementById("mobileDemo");
        mobileDemo.innerHTML = ((parseInt(value) + parseInt(this.valueOfRange)) / 3).toFixed(2);
      }

    },

    clickHeroButton: async function() {
      // Scroll to the 'get started' section:
      $('html, body').animate({
        scrollTop: this.$find('[purpose="scroll-destination"]').offset().top
      }, 500);
    },

    showRangeValue: function() {

      range.innerHTML = rangeValue;

    },

    // Private methods not tied to a particular DOM event are prefixed with _
    _setHeroHeight: function() {
      var $hero = this.$find('[purpose="full-page-hero"]');
      var headerHeight = $('[purpose="page-header"]').outerHeight();
      var heightToSet = $(window).height();
      heightToSet = Math.max(heightToSet, 500); //« ensure min height of 500px - header height
      heightToSet = Math.min(heightToSet, 1000); //« ensure max height of 1000px - header height
      $hero.css('min-height', heightToSet - headerHeight + 'px');
    },

  }
});

parasails.registerPage('homepage', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    slideIndex: '1',
    valueOfRange: '300',
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

    },

    calculateVat: function(x) {
      console.log("x");
      console.log(x);
      this.month = x;

      if (x == '3') {
        var value = (this.valueOfRange / 100) * 3.89;
        this.totalVatRange = ((parseInt(value) + parseInt(this.valueOfRange)) / 3).toFixed(2);
      }

      if (x == '4') {
        var value = (this.valueOfRange / 100) * 4.71;
        this.totalVatRange = ((parseInt(value) + parseInt(this.valueOfRange)) / 3).toFixed(2);
      }

      if (x == '5') {
        var value = (this.valueOfRange / 100) * 6.31;
        this.totalVatRange = ((parseInt(value) + parseInt(this.valueOfRange)) / 3).toFixed(2);
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

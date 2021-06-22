parasails.registerPage('signup', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    firstStep: true,
    secondStep: false,
    syncing2: false,
    // Form data
    formData: {
      id: '',
      date: '',
      date: '',
      gender: '',
      country: '',
      city: '',
      contact: '',
      howDidYouHearAboutUs: '',
      jobType:'',

    },

    // For tracking client-side validation errors in our form.
    // > Has property set to `true` for each invalid property in `formData`.
    formErrors: {
      /* … */
    },

    formErrors2: {
      /* … */
    },

    // Form rules
    formRules: {
      fullName: {
        required: true
      },
      emailAddress: {
        required: true,
        isEmail: true
      },
      password: {
        required: true
      },
      confirmPassword: {
        required: true,
        sameAs: 'password'
      },
      agreed: {
        required: true
      },
    },


    formRules2: {
      contact: {
        required: true
      },
      country: {
        required: true
      },
      gender: {
        required: true
      },
      howDidYouHearAboutUs: {
        required: true
      },

      city: {
        required: true
      },

      date: {
        required: true
      },

      jobType: {
        required: true
      },
    },


    // Syncing / loading state
    syncing: false,

    // Server error state
    cloudError: '',

    // Success state when form has been submitted
    cloudSuccess: false,
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {

    //…
  },
  mounted: async function() {
    new WOW().init();

    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    submittedForm: async function(result) {
      if (this.isEmailVerificationRequired) {
        // If email confirmation is enabled, show the success message.
        this.cloudSuccess = true;
      } else {
        // Otherwise, redirect to the logged-in dashboard.
        // > (Note that we re-enable the syncing state here.  This is on purpose--
        // > to make sure the spinner stays there until the page navigation finishes.)
        this.syncing = true;
        // window.location = '/signupsecond/' + result.user.id;
        this.formData.id = result.user.id;
        this.firstStep = false;
        this.secondStep = true;
        new WOW().init();

      }
    },

    submittedForm2: async function() {
      if (this.isEmailVerificationRequired) {
        // If email confirmation is enabled, show the success message.
        this.cloudSuccess = true;
      } else {
        // Otherwise, redirect to the logged-in dashboard.
        // > (Note that we re-enable the syncing state here.  This is on purpose--
        // > to make sure the spinner stays there until the page navigation finishes.)
        this.syncing2 = true;
        setTimeout(function() {
          window.location = '/';
        }, 5000);
      }
    },

  }
});

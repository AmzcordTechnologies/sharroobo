module.exports = {


  friendlyName: 'View homepage or redirect',


  description: 'Display or redirect to the appropriate homepage, depending on login status.',


  exits: {

    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.',
      viewTemplatePath: 'pages/homepage'
    },

    redirect: {
      responseType: 'redirect',
      description: 'Requesting user is logged in, so redirect to the internal welcome page.'
    },

  },


  fn: async function (inputs, exits) {

    var moment = require("moment");

    const start = Date.now();

    var dateShow = moment(start).format("MMM Do YYYY");

    if (this.req.me) {
      throw {redirect:'/welcome'};
    }

    return exits.success({
      dateShow: dateShow,
    });


  }


};

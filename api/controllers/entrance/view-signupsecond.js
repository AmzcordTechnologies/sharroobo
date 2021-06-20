module.exports = {


  friendlyName: 'View signupsecond',


  description: 'Display "Signupsecond" page.',

  inputs: {

    id: {
      type: 'string'
    }

  },


  exits: {

    success: {
      viewTemplatePath: 'pages/entrance/signupsecond'
    }

  },


  fn: async function(inputs, exits) {


    // Respond with view.
    return exits.success({
      id: inputs.id,
    });

  }


};

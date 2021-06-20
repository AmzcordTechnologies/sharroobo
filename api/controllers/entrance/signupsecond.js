module.exports = {


  friendlyName: 'Signupsecond',


  description: 'Signupsecond entrance.',


  inputs: {

    id: {
      type: 'string'
    },

    date: {
      type: 'string'
    },

    gender: {
      type: 'string'
    },

    country: {
      type: 'string'
    },

    city: {
      type: 'string'
    },

    howDidYouHearAboutUs: {
      type: 'string'
    },

  },


  exits: {

  },


  fn: async function(inputs, exits) {

    console.log("inputs");
    console.log(inputs);

    // All done.

    var updatedUser = await User.updateOne({
        id: inputs.id
      })
      .set({
        date: inputs.date,
        gender: inputs.date,
        gender: inputs.gender,
        country: inputs.country,
        howDidYouHearAboutUs: inputs.howDidYouHearAboutUs,
      });


    return exits.success({
      user: updatedUser,
    });
  }


};

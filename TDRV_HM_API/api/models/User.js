/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection:'somePostgresqlServer',
  attributes: {
    username:{
      type:'string',
      require:true
    },
    lastname:{
      type:'string'
    },
    firstname:{
      type:'string'
    }
  }
};


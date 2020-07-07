/**
 * Search.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: { 
        type: 'string',  
        required : true,
        columnName: 'jobName'
    },
    date:{
        type: 'ref', columnType: "datetime"
    },
    time:{
        type: 'ref', columnType: "datetime"
    },
  },
    datastore: 'mysqldb',
    tableName: "search"
};


/**
 * Jobparts.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        
    id: { 
        type: 'number',  
        required : true,
        columnName: 'userid'
    },
    partId:{
        type: "string"
    },
    jobName:{
        type: "string"
    },
    qty:{
        type: "string"
    },
    date:{
        type: 'ref', columnType: "datetime"
    },
    time:{
        type: 'ref', columnType: "datetime"
    },
    result:{
        type: "string"
    } 
  },
    datastore: 'mysqldb',
    tableName: "jobparts"
};



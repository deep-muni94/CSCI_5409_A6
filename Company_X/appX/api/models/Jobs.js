/**
 * Jobs.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    jobName: { type: 'string', required: true, columnName: 'jobName' },
    id: { type: 'number', required: true, columnName: 'partId'},
    qty: { type: 'number', required: true, columnName: 'qty' }


  },
  datastore:'mysqldb'

};


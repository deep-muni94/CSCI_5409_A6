/**
 * Parts.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id:{
      type: 'number',
      required: true,
      allowNull: false,
      columnName: 'partId',
    },
    partName:{
      type: 'string',
      required: true,
      allowNull: false,
    },
    qoh:{
      type: 'number',
      required: true,
      allowNull: false,
    }
  },
  datastore: 'mysqldb',
  tableName: 'parts'
};


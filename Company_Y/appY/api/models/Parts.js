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


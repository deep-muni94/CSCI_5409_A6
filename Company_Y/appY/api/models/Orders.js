module.exports = {
    attributes: {
      id: {
        type: 'number',
        required: true,
        columnName: 'partId'
      },
      jobName: {
        type: 'string',
        required: true,
        columnName: 'jobName'
      },
      userId: {
        type: 'string',
        required: true,
        columnName: 'userId'
      },
      qty: {
        type: 'number',
        required: true,
        columnName: 'qty'
      }
    },
    datastore: 'mysqldb',
    tableName: "PartOrdersY"
  };
  
  
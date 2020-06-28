module.exports = {
  attributes: {
    jobName: {
      type: 'string',
      required: true,
      columnName: 'jobName'
    },
    id: {
      type: 'number',
      required: true,
      columnName: 'partId'
    },
    qty: {
      type: 'number',
      required: true,
      columnName: 'qty'
    }
  },
  datastore: 'mysqldb',
  tableName: "jobs"
};

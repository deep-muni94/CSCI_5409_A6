module.exports.routes = {
  '/': { view: 'pages/homepage' },
  'GET /allJobs': 'JobsController.getAll17',
  'GET /oneJob': 'JobsController.getOne17',
  'GET /deleteJob': 'JobsController.showDelete17',
  'POST /delete': 'JobsController.delete17',
  'POST /addJob': 'JobsController.create17',
  'POST /updateJob': 'JobsController.update17',
  'GET /requestDataQty': 'JobsController.getRequiredQtyDetail17',
  'GET /requestAllJobs': 'JobsController.findAllJobs17',
  'GET /requestDataPartsQty': 'JobsController.findPartsQty17',

  'POST /postOrder': 'OrdersController.postOrder17',
  'GET /searchOrder': 'OrdersController.searchOrder17',
};

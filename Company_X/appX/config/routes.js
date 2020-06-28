/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'GET /jobs17/': 'JobsController.getAll17',
  'GET /adddata17': {view:'adddata'},
  'GET /getone17/': 'JobsController.getOne17',
  'POST /job17/': 'JobsController.create17',
  'PUT /job17/': 'JobsController.update17',
  'POST /deletejob17/': 'JobsController.delete17',
  'POST /updatejob17/': 'JobsController.updatejob17',
  'POST /jobupdate17': 'JobsController.update17',
  'GET /finddata17': {view:'finddata'},
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};

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
  'GET /getallparts17': 'PartsController.getAllParts17',
  'GET /getpartbyid17/:id': 'PartsController.getPartById17',
  'GET /getqtybyid17/:id': 'PartsController.getQtyById17',
  'GET /parts17': 'PartsController.displayAllParts17',
  'GET /findpart17': 'PartsController.displayPartByIdPage17',
  'POST /findpart17': 'PartsController.displayPartById17',
  'GET /addpart17':  {
    view: 'pages/addpart'
  },
  'POST /addpart17': 'PartsController.addPart17',

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

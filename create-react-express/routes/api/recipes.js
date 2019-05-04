const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");

// Matches "/api/recipes" 
// 1. The server.js file calls on the router directory that contains 1) index.js file and 2) api directory.
// 2. Because there exists an index.js file, the calling body will always default to the index.js file if it exists. This index file defines that at the root route will exist "/api".
// 3. The index.js file then requires on the api directory 
// 4. The api directory contains two files: index.js and recipes.js
// 5. Again, the calling body will use the index.js file becaues it exists. In the index.js file we add to the root route: "/api" + "/recipes" so now the root route is "/api/recipes"
// 6. Now inside this file, recipes.js, we call at as the root route from api/index.js file containing the added "/recipes" and call now just call at "/" as the root route.
router.route("/")
// console.log("inside get at root route /api/routes")
    // once the route has been called, we run a method on the controller to retrieve data from the database. RecipesControllers.findAll is findingAll data available and with predefined specifications. 
    .get(recipesController.findAll)
    // similarly, create a post request through the root route "/" (but really /api/recipes) MongoDB will create a new document with the information passed in. 
    .post(recipesController.create);

// The same process applies for this (being that we're at the root route of /api/recipes) except this time we are continuing to add one more parameter to the query - the :id. "id" acts as a descriptive variable. While you could just as easily call this x, we choose to use a more descriptive variable for readibility. The key purpose of this addition is to pass through variable information, most often used for ids because their are such great unique, identifiers. For example, we are passing in an id into each of the following methods.
router.route("/:id")
    .delete(recipesController.remove);
//     .get(recipesController.findById)
//     .put(recipesController.update)


// finally we need to export all of this information so that the information is sent back through the calling channels. If we did not have this export, all information retrieved through these controller methods would be stuck, not broadcast back out.
module.exports = router;

// GET
// POST
// PUT
// DELETE

// FINDALL, FINDBYID
// CREATE
// UPDATE
// REMOVE




























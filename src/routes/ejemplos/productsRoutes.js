const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController")

router.get('/products', productsController.list);
// router.get('/movies/detail/:id', moviesController.detail)
// router.get("/movies/add", moviesController.add)
// router.post("/movies/create", moviesController.create)
// router.get('/movies/edit/:id', moviesController.edit);
// router.put("/movies/update/:id", moviesController.update)
// router.get("/movies/delete/:id", moviesController.delete)
// router.put("/movies/delete/:id", moviesController.destroy)


module.exports = router;
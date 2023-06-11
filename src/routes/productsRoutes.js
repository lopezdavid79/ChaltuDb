const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController")

router.get('/products/list', productsController.list);
router.get('/products/:id', productsController.detail)
 router.get("/products/add",productsController.add )
 router.post("/products/create", productsController.create)
router.get('/products/edit/:id', productsController.edit);
// router.put("/movies/update/:id", moviesController.update)
// router.get("/movies/delete/:id", moviesController.delete)
// router.put("/movies/delete/:id", moviesController.destroy)


module.exports = router;
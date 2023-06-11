const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController")

router.get('/products/list', productsController.list);
router.get('/products/:id', productsController.detail)
 router.get("/products/add",productsController.add )
 router.post("/products/create", productsController.create)
router.get('/products/edit/:id', productsController.edit);
router.put("/products/update/:id", productsController.update)
router.get("/products/delete/:id", productsController.delete)
router.put("/products/delete/:id", productsController.destroy)


module.exports = router;
// const express = require('express');
// const productController = require("../controllers/productController");

// const router = express.Router();

// router.post('/add-product/:firmId', productController.addProduct);
// //router.get('/:firmId/products', productController.getProductByFirm);

// // router.get('/uploads/:imageName', (req, res) => {
// //     const imageName = req.params.imageName;
// //     res.header('Content-Type', 'image/jpeg');
// //     res.sendFile(path.join(__dirname, '..', 'uploads', imageName));
// // });

// // router.delete('/:productId', productController.deleteProductById);

// module.exports = router;

const productController=require('../controller/productController')
const express=require('express');
const router=express.Router()

router.post('/add-products/:firmId',productController.addProduct);
router.get('/:firmId/products', productController.getProductByFirm);

router.get('/uploads/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    res.header('Content-Type', 'image/jpeg');
    res.sendFile(path.join(__dirname, '..', 'uploads', imageName));
});
router.delete('/:productId', productController.deleteProductById);

// router.post('/login',vendorController.vendorLogin);
// router.get('/all-vendors',vendorController.getAllVendors)
// router.get('/single-vendors/:id',vendorController.getVendorById)

module.exports=router;
const express=require('express')
const firmController=require('../controller/firmController')
const verifyToken=require('../middleware/verifyToken')


const router=express.Router()
router.post('/add-firm',verifyToken,firmController.addFirm);
router.get('/firms',firmController.getAllFirms);

router.get('/uploads/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    res.header('Content-Type', 'image/jpeg');
    res.sendFile(path.join(__dirname, '..', 'uploads', imageName));
});
router.delete('/:firmId', firmController.deleteFirmById);

module.exports=router

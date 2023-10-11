const router = require('express').Router()

const PhotoController = require('../controllers/photoController')

router.get('/photos', PhotoController.GetAllPhotos);
router.get('/photos/:id', PhotoController.getOnePhotoByID);
router.post('/photos', PhotoController.addPhoto);
router.put('/photos/:id', PhotoController.updatePhoto);
router.delete('/photos/:id', PhotoController.deletePhoto);

module.exports = router
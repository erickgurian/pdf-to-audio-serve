const router = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');

// const itemController = require('../app/controller/itemController');

router.post('/uploadFile', multer(multerConfig).single('file'), (req, res) => res.json({ hello: 'Rocket' }));

module.exports = router;

const router = require('express').Router();
const SessionController = require('../app/controller/SessionController');

router.post('/sessions', SessionController.store);

module.exports = router;

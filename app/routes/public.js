const controller = require('../controllers/public');
const router = require('express').Router();

//[GET] /public/open
router.get('/open', controller.open);

module.exports = router;
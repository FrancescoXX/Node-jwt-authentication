const controller = require('../controllers/secret');
const isAuth = require('../auth/is-auth');
const router = require('express').Router();

//[GET] /secret/guarded
router.get('/guarded', isAuth, controller.guarded);

module.exports = router;
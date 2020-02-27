const controller = require('../controllers/auth');
const router = require('express').Router();

// [POST] /auth/token
/**
 * @param {string} req.body.email //email
 * @param {string} req.body.password //password
*/
router.post('/token', controller.token); //Login: Returns token

module.exports = router;
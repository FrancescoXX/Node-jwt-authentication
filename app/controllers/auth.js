const jwt = require("jsonwebtoken");
const Error = require('../models/error');
/**
 * App Authentication to get a temporary token 
 * {
 *	"email":"test"
 * 	"password":"password"
 * }
 */

/** [POST] /auth/token
 *  @param {string} req.body.email email
 *  @param {string} req.body.password password
 */
exports.token = async (req, res) => {
  try {
    const USER_TO_VERIFY = req.body;

    //MOCK USER TEST!!! IN REAL WORLD APPLICATION WE GET OF COURSE DATA FROM A DB
    const USER_DATAVALUES = {
      "email": "admin@admin.com",
      "password": "pass123"
    }

    if (USER_TO_VERIFY.email === USER_DATAVALUES.email && 
      USER_DATAVALUES.password === USER_TO_VERIFY.password
      ) {

      //Generate token with unique and immutable strings
      const TO_TOKEN = {
        email: USER_DATAVALUES.email,
      }

      const TOKEN = jwt.sign( // Token creation
        TO_TOKEN,
        "supersecretkey",
        { expiresIn: '24h' }
      );

      return res.status(200).json({
        email: USER_TO_VERIFY.email,
        token: TOKEN
      });

    } else {
      return res.status(401).json(new Error(401, 'Invalid Email address and/or Password.'));
    }
  } catch (error) {
    return res.status(500).json(new Error(500, 'Error' + error));
  }
};

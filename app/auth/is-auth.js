const jwt = require('jsonwebtoken');
const Error = require('../models/error');

/** MIDDLEWARE FUNCTION
 * 
 * Read the Token in Bearer xxx, in the Authorization header
 * Verify token, and decodes it
 * Add some values in res.tokenvalues objects, which can be used for next requests
 */

module.exports = (req, res, next) => {

  //1 Check the existence of the Authorization Header in the request
  const AUTH_HEADER = req.get('Authorization');
  if (AUTH_HEADER === undefined) {
    return res.status(401).json(new Error(401, 'Authorization header is missing'));
  }

  //2 Check the existence of the Token as second string in the Authorization Header Value
  const token = AUTH_HEADER.split(' ')[1]; //Bearer xxx
  if (token === undefined) {
    return res.status(401).json(new Error(401, 'Token is missing!'));
  }

  //3 Try to decode the token
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "supersecretkey"); //decodes and verifies the token extracted form the header
  } catch (error) {
    return res.status(401).json(new Error(401, 'Token not valid!'));
  }

  //Token is valid, Add tokenvalues to request, filtering password
  res.tokenvalues = {};
  res.tokenvalues = decodedToken;
  next(); //Forward request
};
const auth = require('./auth')
const users = require('./users')
const hotels = require('./hotels')

module.exports = {
  authRouter : auth,
  usersRouter :  users,
  hotelRouter :hotels,
}
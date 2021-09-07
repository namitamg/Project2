const express = require('express')
const router = express.Router()
const passport = require('passport')

const {authController} = require('../controller')

router.get('/getprofile' , passport.authenticate('jwt' , {session : false}), authController.getUser)
//@path - /api/auth/register - 
//@method - POST
//@access Public 
router.post('/register' ,authController.register)


//@path - /api/auth/login 
// @method - POST 
// @acccess Public 
router.post('/login' , authController.login)


// router.post('/test' , verifyMiddleware ,authController.login)

// @path -/api/auth/getprofile
//@method - put
// access private


module.exports = router; 
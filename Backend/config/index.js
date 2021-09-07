// const { cloudinary } = require('./cloudinary')
const  keys = require('./keys')
 const passport = require('./passport')
 const  cloudinary= require('./cloudinary')
// const multerconfig =require('./multerconfig')

 const  upload = require('./multerConfig') 

module.exports = {
    keys,
     passport,
    cloudinary,
    // multerconfig,
    upload
}
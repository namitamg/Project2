const cloudinary = require('cloudinary').v2

const keys= require('./keys')
console.log(keys)

exports.cloudinary = cloudinary.config({
    cloud_name: keys.cloudinary.cloudname,
  api_key : keys.cloudinary.apiKey ,
  api_secret: keys.cloudinary.apiSecret
})



// cloudinary.config({
//     cloud_name: "dyu3zkw75",
//   api_key: "957321595647174",
//   api_secret: "099G2NZJM0bgfYNG2J80RxZVTlY"
// })
// module.exports = {cloudinary}


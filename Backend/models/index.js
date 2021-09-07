const mongoose = require('mongoose')
 const keys = require('../config/keys')
// const keys = require('../config')

// mongoose.connect(`${keys.mongoURI}`,
mongoose.connect('mongodb://localhost:27017/wldbair' ,

 {useNewUrlParser : "true"})

mongoose.connection.on("connected" , (err,res)=>{
    console.log("Mongodb is connected")
})

mongoose.connection.on("error" , (err,res)=> { 
    console.log('err' ,err)
})

const USERS = require('./users')
const HOTELS = require('./hotels')

module.exports = {
    USERS,
    HOTELS
}
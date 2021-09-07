const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    name : {
        type : String 
        
    },
    name1 : {
        type : String 
        
    },
    id:{
        type: Number
    },
    price:{
        type: Number
    },
    description:{
        type: String
    },

    desp1 :{
        type: String 
    },
    desp2 :{
        type: String 
    },
    img : {
        type : String,
    },
    img1 : {
        type : String,
    }
})

const HOTELS = new mongoose.model('HOTELS' ,hotelSchema)

module.exports= HOTELS
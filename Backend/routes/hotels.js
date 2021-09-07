const express = require('express')
const router = express.Router()
const multer = require('multer')
const cloudinary = require('cloudinary').v2


// const {cloudinary} = require('../config/cloudinary')

const { HOTELS } = require('../models')
const fs = require('fs')
//added  now
// const { upload } = require('../config/multerconfig')
// const { cloudinary } = require('../config/keys')
// =====



// const  upload  =require('../config/multerConfig')

cloudinary.config({
    cloud_name: "dyu3zkw75",
  api_key: "957321595647174",
  api_secret: "099G2NZJM0bgfYNG2J80RxZVTlY"
})




// ---------------


const upload = multer({
    storage : multer.diskStorage({
        destination : function(req,file,cb) {
            cb(null , 'uploads')
        },
        filename : function(req,file,cb){
            cb(null, file.fieldname + '-' + Date.now())
        }
    })
})


// ===============




// const { upload } = require('../config/multerConfig')
// const { cloudinary }  = require('../config/cloudinary')

// get all arestaurant

router.get('/', (req, res) => {
    HOTELS.find()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).send(err))
})

const controller = (req, res, next) => {
    console.log(req.file)
    console.log(req.body)
    cloudinary.uploader.upload(req.file.path, { public_id: `hotels/${req.file.filename}` })
        .then((result) => {
            console.log(result)
            const obj = {
                name: req.body.name,
                name1: req.body.name1,
                description: req.body.description,
                price: req.body.price,
                id: req.body.id,
                desp1: req.body.desp1,
                desp2: req.body.desp2,
                img1: result.secure_url,
                img: result.secure_url
            }
            HOTELS.create(obj)
                .then((data) => {
                    // fs.unlinkSync(req.file.path)
                    res.status(200).json(data)
                })
                .catch((err) => res.status(400).send(err))
        })
        .catch((err) => res.status(400).send(err))

}


router.post('/', upload.single('img'), controller)
// app.post('/projects', upload.array('uploadedImages', 10)



router.get('/:id', (req, res) => {
    const rId = req.params.id
    HOTELS.findOne({ _id: rId })
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).send(err))
})



router.put('/:id', upload.single('img'), (req, res) => {
    const rId = req.params.id
    console.log("rid", rId)
    console.log(req.file)
    if (req.file) {
        cloudinary.uploader.upload(req.file.path, { public_id: `hotels/${req.file.filename}` })
            .then((result) => {
                console.log("res", result)
                const newBody = {
                    name: req.body.name,
                    name1: req.body.name1,
                    description: req.body.description,
                    price: req.body.price,
                    id: req.body.id,
                    desp1: req.body.desp1,
                    desp2: req.body.desp2,
                    img1: result.secure_url,
                    img: result.secure_url
                }
                HOTELS.findOneAndUpdate({ _id: rId }, newBody)
                    .then((data) => {
                        console.log("done")
                        // fs.unlinkSync(req.file.path)
                        res.status(200).json(data)
                    })
                    .catch((err) => res.status(400).send(err))
            })
    } else {
        HOTELS.findOneAndUpdate({ _id: rId }, req.body)
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(400).send(err))
    }
})


router.delete('/:id', (req, res) => {
    const rId = req.params.id
    HOTELS.findOneAndDelete({ _id: rId })
        .then(() => res.status(200).send("Hotel Deleted"))
        .catch((err) => res.status(400).send(err))
})


module.exports = router
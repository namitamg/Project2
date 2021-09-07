const multer = require('multer')

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

module.exports = upload
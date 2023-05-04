const multer = require('multer');

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, './public/img');
    },
    filename:function(req, file, cb){
        cb(null, Date.now() + ".jpg");
    }
})

module.exports = multer({ storage: storage }).single("image");
<<<<<<< HEAD
=======
//Multer Config for user signup function
>>>>>>> 545eb86b (first commit)
const multer = require("multer");

/* const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.split(' ').join('_') )
  },
});
exports.upload = multer({ storage: storage });*/

exports.upload = multer({
  storage: multer.diskStorage({}),
});

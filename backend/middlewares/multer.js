import multer from "multer";
const storage = multer.memoryStorage({});
import path from "path";

export const imageUpload = multer({
	storage,
	fileFilter: function (req, file, cb) {
		return checkFileType(file, cb);
	},
});

function checkFileType(file, cb) {
	const filetypes = /jpeg|jpg|png|gif/;
	// Check ext
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	// Check mime
	const mimetype = filetypes.test(file.mimetype);

	if (mimetype && extname) {
		return cb(null, true);
	} else {
		return cb(null, false);
	}
}

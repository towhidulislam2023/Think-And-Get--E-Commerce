const crud = require("./crud");

const { app } = require("./config/app");

const multer = require("multer");
const category = require("./api/category");
var categoryImage = null;

const storage = multer.diskStorage({
	destination: (req, file, callBack) => {
		if (file.mimetype.substring(0, 5) == "image") {
			callBack(null, "./uploads");
		}
	},
	filename: (req, file, callBack) => {
		if (file.mimetype.substring(0, 5) == "image") {
			categoryImage = Date.now() + "__" + file.originalname;
			callBack(null, categoryImage);
		}
	},
});
const upload = multer({ storage: storage });

app.post(
	"/imageUpload/uploadcategoryimage",
	upload.array("uploadFiles"),
	(req, res) => {
		if (req.files === null) {
			return res.status(400).json({ msg: "No file uploaded" });
		} else {
			console.log(categoryImage);
			return res
				.status(200)
				.json({ msg: "File Uploaded", categoryImage });
		}
	}
);

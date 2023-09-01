const express = require("express")
const { imageUpload } = require("../controllr")


const router = express.Router()


router.route("/upload").post(imageUpload)

module.exports = router
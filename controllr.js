
const cloudinary = require("cloudinary").v2;


exports.imageUpload = async (req, res) => {
    try {
     let data = req.body
    /// file upload 
    if (req.files && req.files.image) {
        const imageFile = req.files.image;
        const result = await cloudinary.uploader.upload(
          imageFile.tempFilePath,
          {
            resource_type: "image",
            folder: "images",
          }
        );
  
        //  Cloudinary result 
        console.log(result.secure_url, result.public_id)
  
     imageUploded =   data.image = {
          url: result.secure_url,
          public_Id: result.public_id,
        };
      }
  
      res.json({
        status: true,
        message: 'Image uploaded successfully',
        imageUrl: imageUploded,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: false, message: 'Internal server error' });
    }
  };
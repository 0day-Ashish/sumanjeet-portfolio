const cloudinary = require('cloudinary').v2;
require('dotenv').config(); // Automatically reads the .env file in the current directory

// Configure the Cloudinary SDK using your credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// The path to the file you want to upload
const filePath = "./public/projects/Video-255.mp4"; 

console.log("Uploading to Cloudinary...");

// Use upload for files under 100MB.
cloudinary.uploader.upload(
  filePath,
  {
    resource_type: "video",                   // Required for video files
  },
  (error, result) => {
    if (error) {
      console.error("❌ Upload failed:", error);
      process.exit(1);
    } else {
      console.log("✅ Upload successful!");
      console.log("Secure URL:", result.secure_url);
      console.log("Public ID:", result.public_id);
      process.exit(0);
    }
  }
);

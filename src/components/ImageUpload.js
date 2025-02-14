import React, { useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle image upload
  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage("Please select an image first.");
      return;
    }

    setUploading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        "https://43ae-2401-4900-9163-fde2-e0b3-b76b-c8ef-c93a.ngrok-free.app/bore/image/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            "ngrok-skip-browser-warning": "98547",
          },
        }
      );

      setMessage("Image uploaded successfully!");
      console.log("Upload Response:", response.data);
    } catch (error) {
      setMessage("Failed to upload image. Please try again.");
      console.error("Upload Error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center">Upload Image</h3>
        <label className="btn btn-primary w-100 mt-3">
          Choose File
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="d-none"
          />
        </label>
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="img-fluid mt-3 rounded"
            style={{ maxHeight: "250px" }}
          />
        )}
        <button
          className="btn btn-success w-100 mt-3"
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? <Spinner animation="border" size="sm" /> : "Upload"}
        </button>
        {message && <p className="text-center mt-3 text-muted">{message}</p>}
      </div>
    </div>
  );
};

export default ImageUpload;

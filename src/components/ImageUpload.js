import React, { useState } from "react";
import axios from "axios";
import { Spinner, Alert, Card, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUpload, FaImage } from "react-icons/fa";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setError(""); // Clear any previous errors
    }
  };

  // Handle image upload
  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select an image first.");
      return;
    }

    setUploading(true);
    setMessage("");
    setError("");

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        "https://955e-2409-408d-3c33-4f76-a47a-7805-b96b-7caf.ngrok-free.app/postimage",
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
      setError("Failed to upload image. Please try again.");
      console.error("Upload Error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">
            <FaImage className="me-2" />
            Upload Image
          </Card.Title>

          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="btn btn-primary w-100">
                <FaUpload className="me-2" />
                Choose File
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="d-none"
                />
              </Form.Label>
            </Form.Group>

            {preview && (
              <div className="text-center mb-3">
                <img
                  src={preview}
                  alt="Preview"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px" }}
                />
              </div>
            )}

            <Button
              variant="success"
              className="w-100 mb-3"
              onClick={handleUpload}
              disabled={uploading || !selectedFile}
            >
              {uploading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                "Upload"
              )}
            </Button>

            {message && (
              <Alert variant="success" className="text-center">
                {message}
              </Alert>
            )}

            {error && (
              <Alert variant="danger" className="text-center">
                {error}
              </Alert>
            )}
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ImageUpload;
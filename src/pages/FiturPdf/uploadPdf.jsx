import NavMenu from "../../component/NavMenu";
import React, { useState } from "react";
import axios from "axios";

function UploadPdf() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log('Selected File:', e.target.files[0]);
    };

    const handleFileUpload = async (event) => {
      event.preventDefault();

      const formData = new FormData();
      formData.append('file_pdf', selectedFile);
      formData.append('timestamp', new Date());

      console.log(formData);
      try {
        const response = await fetch('https://backend.laporanbpr.com/file/upload_pdf', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          console.log('File uploaded successfully!');
          alert('File uploaded successfully!')
          window.location.href = 'https://laporanbpr.com/userareasb';

          // Handle success, e.g., show a success message or redirect
        } else {
          console.error('Error uploading file');
          // Handle error, e.g., show an error message
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle other errors, e.g., network issues
      }

    }
    return (
        <div style={styles.container}>
            <NavMenu />
            <div style={styles.uploadcard}>
                <input
                    style={styles.uploadInput}
                    type="file"
                    onChange={handleFileChange}
                />
                <button style={styles.uploadButton} onClick={handleFileUpload}>
                    Upload
                </button>
            </div>
        </div>
    );
}
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        background: "#133a6b",
    },
    uploadCard: {
        backgroundColor: "#ffffff",
        boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.4)",
        borderRadius: "8px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    uploadInput: {
        margin: "20px 0",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        width: "250px",
        color: "white",
    },
    uploadButton: {
        backgroundColor: "#d28429",
        color: "white",
        padding: "12px 30px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
};

export default UploadPdf;

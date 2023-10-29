import NavMenu from '../../component/NavMenu'
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function UploadPdf() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    console.log('handleFileUpload called');
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
        await axios.post('https://backend.laporanbpr.com/upload', formData);
        // alert('File uploaded successfully!');
        // Assuming selectedFile is a state variable, you should set it to null like this:
        setSelectedFile(null);
        // Redirect to the home page after successful upload
        // window.location.href = 'https://yourhomepage.com';
    } catch (error) {
        console.error('Error uploading file:', error);
        alert('File uploaded successfully');
        // <Navigate to="/" />
        window.location.href = 'https://laporanbpr.com/userareasb';

    }
};

  return (
    <div style={styles.container}>
      <NavMenu />
      <div  style={styles.uploadcard}>
        <input style={styles.uploadInput} type="file" onChange={handleFileChange} />
        <button style={styles.uploadButton} onClick={handleFileUpload}>Upload</button>
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    background: '#133a6b',
  },
  uploadCard: {
    backgroundColor: '#ffffff',
    boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.4)',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  uploadInput: {
    margin: '20px 0',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '250px',
    color: 'white',
  },
  uploadButton: {
    backgroundColor: '#d28429',
    color: 'white',
    padding: '12px 30px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },}

export default UploadPdf;


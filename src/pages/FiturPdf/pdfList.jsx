import NavMenu from "../../component/NavMenu";
import React, { useState, useEffect } from "react";
import axios from "axios";

function PdfList() {
    const [pdfList, setPdfList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://backend.laporanbpr.com/pdf-list")
            .then((response) => {
                // Assuming the API response is an array of PDF filenames.
                setPdfList(response.data);
            })
            .catch((err) => {
                setError(err);
            });
    }, []);

    // Function to delete a PDF
    const handleDelete = (pdfFilename) => {
        axios
            .delete(`https://backend.laporanbpr.com/pdf-list/${pdfFilename}`)
            .then(() => {
                setPdfList(pdfList.filter((pdf) => pdf !== pdfFilename));
                console.log(pdfList);
            })
            .catch((err) => {
                setError(err);
            });
    };

    if (error) {
        return <div>Error loading PDF list: {error.message}</div>;
    }

    return (
        <div style={styles.container}>
            <NavMenu />
            <h1 style={styles.heading}>PDF Directory</h1>
            <ul style={styles.pdfList}>
                {pdfList.map((pdf, index) => (
                    <li style={styles.pdfListItem} key={index}>
                        <h6>
                            {index + 1}.
                            <a
                                style={styles.pdfLink}
                                href={`https://backend.laporanbpr.com/${pdf}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {pdf}
                            </a>
                        </h6>
                        {/* <button
                            style={styles.deleteButton}
                            onClick={() => handleDelete(pdf)}
                        >
                            Delete
                        </button> */}
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        marginTop:"60px",
        background: '#133a6b',
    },
    heading: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "20px",
        color:"white",
    },
    pdfList: {
        listStyleType: "none",
        padding: 0,
        margin: 0,
    },
    pdfListItem: {
        marginBottom: "20px",
        border: "1px solid #e1e1e1",
        borderRadius: "6px",
        padding: "20px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color:"white",
    },
    pdfLink: {
        textDecoration: "none",
        fontSize: "16px",
        color:"white",
        marginLeft:"8px",
    },
    deleteButton: {
        backgroundColor: "#f44336",
        color: "white",
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
};
export default PdfList;

import NavMenu from "../../component/NavMenu";
import React, { useState, useEffect } from "react";
import axios from "axios";

function PdfList() {
    const [pdfList, setPdfList] = useState([]);
    const [error, setError] = useState(null);
    const [pdfUrl, setPdfUrl] = useState(null);

    useEffect(() => {
        axios
            .post("https://backend.laporanbpr.com/file/get_pdf")
            .then((response) => {
                // Assuming the API response is an array of PDF filenames.
                setPdfList(response.data.message);
                console.log(response.data.message);
            })
            .catch((err) => {
                setError(err);
            });
    }, []);
    const viewPdf = async (event) => {
        // event.preventDefault();

        const data = {
            fileName: event,
        };
        console.log("req body", data);

        try {
            const response = await fetch(
                "https://backend.laporanbpr.com/file/pdf",

                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                const pdfBlob = await response.blob();
                const pdfUrl = URL.createObjectURL(pdfBlob);
                setPdfUrl(pdfUrl);
                // alert('File uploaded successfully!')
                window.location.href = `${pdfUrl}`;

                // Handle success, e.g., show a success message or redirect
            } else {
                alert("gagal buka pdf");
                // Handle error, e.g., show an error message
            }
        } catch (error) {
            console.error("Error:", error);
            // Handle other errors, e.g., network issues
        }
    };

    // Function to delete a PDF
    const deletePdf = async (nama, id) => {
        // event.preventDefault();

        const data = {
            fileName: nama,
            id: id,
        };
        console.log("req body", data);

        try {
            const response = await fetch(
                "https://backend.laporanbpr.com/file/delete_pdf",

                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                alert("file terhapus");
                // alert('File uploaded successfully!')
                window.location.href = "https://laporanbpr.com/userareasb";

                // Handle success, e.g., show a success message or redirect
            } else {
                alert("gagal terhapus");
                // Handle error, e.g., show an error message
            }
        } catch (error) {
            console.error("Error:", error);
            // Handle other errors, e.g., network issues
        }
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
                        <div style={styles.pdfLink}>
                            {index + 1}.{pdf.file_pdf}
                        </div>
                        <div style={styles.buttonView}>
                            <button
                                style={styles.deleteButton}
                                onClick={() => viewPdf(pdf.file_pdf)}
                            >
                                View
                            </button>
                            <button
                                style={styles.deleteButton}
                                onClick={() => deletePdf(pdf.file_pdf, pdf.id)}
                            >
                                Delete
                            </button>
                        </div>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}
// const styles = {
//     container: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "5px",
//         marginTop: "60px",
//         background: "#133a6b",
//     },
//     heading: {
//         fontSize: "24px",
//         fontWeight: "bold",
//         marginBottom: "20px",
//         color: "white",
//     },
//     pdfList: {
//         listStyleType: "none",
//         padding: 0,
//         margin: 0,
//     },
//     pdfListItem: {
//         marginBottom: "20px",
//         border: "1px solid #e1e1e1",
//         borderRadius: "6px",
//         padding: "20px",
//         width: "100%",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         color: "white",
//     },
//     pdfLink: {
//         textDecoration: "none",
//         fontSize: "16px",
//         color: "white",
//         marginLeft: "8px",
//     },
//     deleteButton: {
//         backgroundColor: "#f44336",
//         color: "white",
//         padding: "8px 16px",
//         border: "none",
//         borderRadius: "4px",
//         cursor: "pointer",
//         transition: "background-color 0.3s",
//         marginLeft: "auto",  //
//     },
// };

// const styles = {
//     container: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "20px",
//         marginTop: "60px",
//         background: "#133a6b",
//         height: "90vh",
//     },
//     heading: {
//         fontSize: "24px",
//         fontWeight: "bold",
//         marginBottom: "20px",
//         color: "white",
//     },
//     pdfList: {
//         listStyleType: "none",
//         padding: "20px",
//         margin: 0,
//         width: "80vw",
//     },
//     pdfListItem: {
//         marginBottom: "20px",
//         border: "1px solid #e1e1e1",
//         borderRadius: "6px",
//         padding: "20px",
//         width: "100%",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         color: "white",
//     },
//     pdfLink: {
//         textDecoration: "none",
//         fontSize: "16px",
//         color: "white",
//         marginLeft: "8px",
//         width: "80px",
//         backgroundColor: "yellow",
//     },
//     buttonView: {
//         backgroundColor: "blue",
//     },
//     deleteButton: {
//         backgroundColor: "#f44336",
//         color: "white",
//         padding: "8px 16px",
//         border: "none",
//         borderRadius: "4px",
//         cursor: "pointer",
//         transition: "background-color 0.3s",
//         marginLeft: "8px",
//         alignItems: "right",
//     },
// };

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        marginTop: "60px",
        background: "#133a6b",
        height: "90vh",
    },
    heading: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "white",
    },
    pdfList: {
        listStyleType: "none",
        padding: "20px",
        margin: 0,
        width: "80vw",
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
        color: "white",
    },
    pdfLink: {
        textDecoration: "none",
        fontSize: "16px",
        color: "white",
        marginRight: "8px",
        flex: 1,
    },
    buttonView: {
        display: "flex",
        alignItems: "center",
    },
    deleteButton: {
        backgroundColor: "#f44336",
        color: "white",
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s",
        marginLeft: "8px",
    },
};

export default PdfList;

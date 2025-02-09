'use client'

import React, { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ResumeEditor = () => {
    const printRef = useRef<HTMLDivElement>(null);

    const [data, setData] = useState({
        name: "John Doe",
        title: "Software Engineer",
        description:
            "Experienced developer specializing in web development, React, and TypeScript.",
        linkedin: "https://www.linkedin.com/in/johndoe/",
        email: "johndoe@example.com",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const generatePdf = async () => {
        const element = printRef.current;
        if (!element) return;

        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

        // Add clickable links (LinkedIn, email) to the PDF
        pdf.setTextColor(0, 0, 255); // Blue color for links

        // Add LinkedIn link
        pdf.textWithLink(data.linkedin, 10, pdfHeight - 30, { url: data.linkedin });

        // Add Email link (mailto: protocol)
        pdf.textWithLink(data.email, 10, pdfHeight - 20, { url: `mailto:${data.email}` });

        pdf.save("resume.pdf"); // Trigger PDF download
    };

    return (
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
            {/* Editor Section */}
            <div style={{ flex: 1 }}>
                <h2>Edit Your Resume</h2>
                <div style={{ marginBottom: "10px" }}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleInputChange}
                        style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={data.title}
                        onChange={handleInputChange}
                        style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={data.description}
                        onChange={handleInputChange}
                        style={{ width: "100%", padding: "5px", height: "80px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>LinkedIn URL:</label>
                    <input
                        type="text"
                        name="linkedin"
                        value={data.linkedin}
                        onChange={handleInputChange}
                        style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={handleInputChange}
                        style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
                    />
                </div>
                <button onClick={generatePdf} style={{ padding: "10px 20px" }}>
                    Generate PDF
                </button>
            </div>

            {/* Preview Section */}
            <div style={{ flex: 2 }}>
                <h2>Live Preview</h2>
                <div
                    ref={printRef}
                    style={{
                        width: "210mm", // A4 width in mm
                        minHeight: "297mm", // A4 height in mm
                        padding: "20px",
                        background: "#fff",
                        border: "1px solid #ccc",
                        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <h1 style={{ textAlign: "center", marginBottom: "10px" }}>{data.name}</h1>
                    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{data.title}</h2>
                    <p style={{ fontSize: "14px", lineHeight: "1.6" }}>{data.description}</p>
                    <p style={{ fontSize: "14px", textAlign: "center" }}>
                        <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                            LinkedIn Profile
                        </a>
                    </p>
                    <p style={{ fontSize: "14px", textAlign: "center" }}>
                        <a href={`mailto:${data.email}`}>Send Email</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResumeEditor;

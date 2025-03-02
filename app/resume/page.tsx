'use client';
import {useEffect, useState} from "react";
import PdfDocument from "@/app/components/PdfDocument/index";
import PdfViewer from "@/app/components/PdfViewer/index";
import dynamic from "next/dynamic";
import { pdf } from "@react-pdf/renderer";
const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
    { ssr: false }
);

export default function ResumePage() {
    const [urlFile, setUrlFile] = useState('');
    const [valueEditor, setValueEditor] = useState('');

    const generatePdf = async () => {
        const doc = <PdfDocument valueEditor={"Your content"} />;
        console.log('doc', doc);
        const blob = await pdf(doc)?.toBlob(); // Generate PDF as a Blob
        const url = URL.createObjectURL(blob);
        setUrlFile(url);
    };
    useEffect(() => {
        generatePdf()
    }, []);

    const handleChange = (val:string) => setValueEditor(val);
    return (
        <main>
            <PDFDownloadLink
                document={<PdfDocument valueEditor={valueEditor}/>}
                fileName="hashfilename.pdf"
            >
                {({url, loading}) => {
                    return (loading ? 'Loading' : 'Download now')
                }}
            </PDFDownloadLink>
            {/*<TextEditor*/}
            {/*    value={valueEditor}*/}
            {/*    handleChange={handleChange}*/}
            {/*/>*/}
            {urlFile ? <PdfViewer url={urlFile}/> : null}
        </main>
    )
}

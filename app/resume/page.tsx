'use client';
import {useState} from "react";
import PdfDocument from "@/app/components/PdfDocument/index";
// import PdfViewer from "@/app/components/PdfViewer/index";
import dynamic from "next/dynamic";

// Disable SSR for PDFDownloadLink
const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
    {
        ssr: false, // Disable SSR for this component
        loading: () => <p>Loading...</p>, // Optional loading component
    }
);

export default function ResumePage() {
    const [urlFile, setUrlFile] = useState('');
    const [valueEditor, setValueEditor] = useState('');

    const handleChange = (val:string) => setValueEditor(val);
    return (
        <main>
            hello
            <PDFDownloadLink
                document={<PdfDocument valueEditor={valueEditor}/>}
                fileName="hashfilename.pdf"
            >
                {({url, loading}) => {
                    console.log('url', url)
                    return (loading ? 'Loading' : 'Download now')
                }}
            </PDFDownloadLink>
            {/*<TextEditor*/}
            {/*    value={valueEditor}*/}
            {/*    handleChange={handleChange}*/}
            {/*/>*/}
            {/*{urlFile ? <PdfViewer url={urlFile}/> : null}*/}
        </main>
    )
}

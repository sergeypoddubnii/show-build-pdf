'use client';
import {PDFDownloadLink} from '@react-pdf/renderer';
import {useState} from "react";
import PdfDocument from "@/app/components/PdfDocument/index";
import PdfViewer from "@/app/components/PdfViewer/index";
import ResumeForm from "@/app/components/ResumeForm";

export default function ResumePage() {
    const [urlFile, setUrlFile] = useState('');

    return (
        <main>
            <ResumeForm/>
            <PDFDownloadLink
                document={<PdfDocument valueEditor={''}/>}
                fileName="hashfilename.pdf"
            >
                {({ url, loading }) => {
                    if(!url) return;

                    setUrlFile(url);
                    return (loading ? 'Loading' : 'Download now')
                }}
            </PDFDownloadLink>
            {urlFile ? <PdfViewer url={urlFile} /> : null}
        </main>
    )
}

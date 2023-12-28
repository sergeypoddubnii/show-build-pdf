'use client';
import {PDFDownloadLink} from '@react-pdf/renderer';
import PdfDocument from "@/app/components/PdfDocument";
import MyPdfViewer from "@/app/components/Canvas";
import {useState} from "react";
import TextEditor from "@/app/components/TextEditor";

export default function Home() {
    const [urlFile, setUrlFile] = useState('');

    return (
        <main>
            <PDFDownloadLink
                document={<PdfDocument />}
                fileName="resume.pdf"
            >
                {({ url, loading, error }) => {
                    if(!url) return;

                    setUrlFile(url);
                    return (loading ? 'Loading document...' : 'Download now!')
                }}
            </PDFDownloadLink>
            <TextEditor/>
            {urlFile ? <MyPdfViewer url={urlFile}/> : null}
        </main>
    )
}

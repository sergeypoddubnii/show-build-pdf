'use client';
import {PDFDownloadLink} from '@react-pdf/renderer';
import PdfDocument from "@/app/components/PdfDocument";
import MyPdfViewer from "@/app/components/Canvas";
import {useState} from "react";
import TextEditor from "@/app/components/TextEditor";
import ResumeForm from "@/app/components/ResumeForm";

export default function Home() {
    const [urlFile, setUrlFile] = useState('');
    const [valueEditor, setValueEditor] = useState('');

    return (
        <main>
            <ResumeForm/>
            <PDFDownloadLink
                document={<PdfDocument />}
                fileName="hashfilename.pdf"
            >
                {({ url, loading, error }) => {
                    if(!url) return;

                    setUrlFile(url);
                    return (loading ? 'Loading' : 'Download now')
                }}
            </PDFDownloadLink>
            <TextEditor
                value={valueEditor}
                handleChange={setValueEditor}
            />
            {urlFile ? <MyPdfViewer url={urlFile} /> : null}
        </main>
    )
}

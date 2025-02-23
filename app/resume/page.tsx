'use client';
import {PDFDownloadLink} from '@react-pdf/renderer';
import {useState} from "react";
import PdfDocument from "@/app/components/PdfDocument/index";
import PdfViewer from "@/app/components/PdfViewer/index";
import TextEditor from "@/app/components/TextEditor/index";

export default function ResumePage() {
    const [urlFile, setUrlFile] = useState('');
    const [valueEditor, setValueEditor] = useState('');

    const handleChange = (val:string) => {
        setValueEditor(val)
    };

    return (
        <main>
            <PDFDownloadLink
                document={<PdfDocument valueEditor={valueEditor}/>}
                fileName="hashfilename.pdf"
            >
                {({url, loading, error}) => {
                    if (!url) return;

                    setUrlFile(url);
                    return (loading ? 'Loading' : 'Download now')
                }}
            </PDFDownloadLink>
            <TextEditor
                value={valueEditor}
                handleChange={handleChange}
            />
            {urlFile ? <PdfViewer url={urlFile}/> : null}
        </main>
    )
}

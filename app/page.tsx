'use client';
import {PDFDownloadLink, PDFViewer} from '@react-pdf/renderer';
import PdfDocument from "@/app/components/PdfDocument";
import MyPdfViewer from "@/app/components/Canvas";
import {useState} from "react";

export default function Home() {
    const [urlFile, setUrlFile] = useState('');

    return (
        <main>
            <PDFDownloadLink
                document={<PdfDocument />}
                fileName="somename.pdf"
            >
                {({ blob, url, loading, error }) => {
                    if(!url) return;
                    setUrlFile(url);
                    return (loading ? 'Loading document...' : 'Download now!')
                }}
            </PDFDownloadLink>
            {/*<PDFViewer*/}
            {/*    width={500}*/}
            {/*    height={750}*/}
            {/*    showToolbar={false}*/}
            {/*>*/}
            {/*    <PdfDocument />*/}
            {/*</PDFViewer>*/}
            {urlFile ? <MyPdfViewer url={urlFile}/> : null}
        </main>
    )
}

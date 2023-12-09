'use client';
import {PDFDownloadLink, PDFViewer} from '@react-pdf/renderer';
import PdfDocument from "@/app/components/PdfDocument";
import Canvas from "@/app/components/Canvas";

export default function Home() {
    return (
        <main>
            <PDFDownloadLink
                document={<PdfDocument />}
                fileName="somename.pdf"
            >
                {({ blob, url, loading, error }) => {
                    return (loading ? 'Loading document...' : 'Download now!')
                }}
            </PDFDownloadLink>
            <PDFViewer
                width={500}
                height={750}
                showToolbar={true}
            >
                <PdfDocument />
            </PDFViewer>
            <Canvas pdfUrl={'./components/3636-8220-1715351-1-245f6e1a1ecfb4be276b7f6f8d00fc4c.pdf'}/>
        </main>
    )
}

'use client';
import {PDFDownloadLink, PDFViewer} from '@react-pdf/renderer';
import PdfDocument from "@/app/components/PdfDocument";

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
            >
                <PdfDocument />
            </PDFViewer>
        </main>
    )
}

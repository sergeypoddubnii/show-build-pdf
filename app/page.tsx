'use client';
import {PDFDownloadLink, PDFViewer} from '@react-pdf/renderer';
import PdfDocument from "@/app/components/PdfDocument";

export default function Home() {
    return (
        <main>
            <PDFDownloadLink document={<PdfDocument/>} fileName="somename.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
            <PDFViewer
                width={600}
                height={700}
            >
                <PdfDocument/>
            </PDFViewer>
        </main>
    )
}

import React from 'react';
import ReactPDF, {Document, Page, View, Text, PDFViewer} from '@react-pdf/renderer';
import BlobProvider = ReactPDF.BlobProvider;

interface PdfCanvasViewerProps {
    // You can pass additional props or configurations here
}

const PdfCanvasViewer: React.FC<PdfCanvasViewerProps> = () => {
    return (
        <BlobProvider document={<Document><Page><View><Text>Hello, World!</Text></View></Page></Document>}>
            {({ blob, url, loading, error }) => (
                <div>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error loading PDF</p>}

                    {blob &&  url && (
                        <PDFViewer width="100%" height="500px">
                            <iframe src={url} style={{ width: '100%', height: '100%' }} />
                        </PDFViewer>
                    )}
                </div>
            )}
        </BlobProvider>
    );
};

export default PdfCanvasViewer;

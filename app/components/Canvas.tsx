import { useEffect, useRef } from 'react';
import pdfjs from 'pdfjs-dist/build/pdf.mjs';

interface PdfCanvasViewerProps {
    pdfUrl: string;
}

const PdfCanvasViewer: React.FC<PdfCanvasViewerProps> = ({ pdfUrl }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    console.log('pdfjs', pdfjs)
    // useEffect(() => {
    //     const renderPdfOnCanvas = async () => {
    //         if (!canvasRef.current) return;
    //
    //         // Get the canvas element
    //         const canvas = canvasRef.current;
    //         const context = canvas.getContext('2d');
    //
    //         // Load the PDF document
    //         const loadingTask = pdfjs.getDocument(pdfUrl);
    //         const pdfDocument = await loadingTask.promise;
    //
    //         // Get the first page of the PDF
    //         const pageNumber = 1;
    //         const page = await pdfDocument.getPage(pageNumber);
    //
    //         // Set the canvas size to match the PDF page size
    //         const viewport = page.getViewport({ scale: 1.5 });
    //         canvas.width = viewport.width;
    //         canvas.height = viewport.height;
    //
    //         // Render the PDF page on the canvas
    //         const renderContext = {
    //             canvasContext: context!,
    //             viewport: viewport,
    //         };
    //         await page.render(renderContext);
    //     };
    //
    //     renderPdfOnCanvas();
    // }, [pdfUrl]);

    return <canvas ref={canvasRef} />;
};

export default PdfCanvasViewer;

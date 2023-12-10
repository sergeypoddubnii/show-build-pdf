'use client';
import React, { useState, useRef } from 'react';
// @ts-ignore
import { usePdf } from '@mikecousins/react-pdf';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf'
pdfjsLib.GlobalWorkerOptions.workerSrc = require('pdfjs-dist/build/pdf.worker.entry.js')

const MyPdfViewer = ({url}:any) => {
    const [page, setPage] = useState(1);
    const canvasRef = useRef(null);

    const { pdfDocument, pdfPage } = usePdf({
        file: url,
        page,
        canvasRef,
    });

    return (
        <div>
            {!pdfDocument && <span>Loading...</span>}
            <canvas ref={canvasRef} />
            {Boolean(pdfDocument && pdfDocument.numPages) && (
                <nav>
                    <ul className="pager">
                        <li className="previous">
                            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                                Previous
                            </button>
                        </li>
                        <li className="next">
                            <button
                                disabled={page === pdfDocument.numPages}
                                onClick={() => setPage(page + 1)}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default MyPdfViewer;

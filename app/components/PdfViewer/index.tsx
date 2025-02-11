'use client';
import React, { useState, useRef } from 'react';
// @ts-ignore
import { usePdf } from '@mikecousins/react-pdf';

interface IProps {
    url:string;
}

const PdfViewer = ({url}:IProps) => {
    const [page, setPage] = useState(1);
    const canvasRef = useRef(null);

    const { pdfDocument } = usePdf({
        file: url,
        page,
        canvasRef,
    });

    return (
        <div>
            {!pdfDocument && <span>Loading...</span>}
            <canvas
                ref={canvasRef}
                style={{transform: 'scale(0.7)'}}
            />
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

export default PdfViewer;

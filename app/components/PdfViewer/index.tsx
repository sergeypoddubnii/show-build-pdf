'use client';
import React, { useState, useRef } from 'react';
// @ts-ignore
import { usePdf } from '@mikecousins/react-pdf';

interface IProps {
    url: string;
}

const PdfViewer = ({url}:IProps) => {
    const [page, setPage] = useState(1);
    const canvasRef = useRef(null);

    const { pdfDocument } = usePdf({file: url, page, canvasRef});

    const handleNextPage = () => setPage((prev) => prev + 1);
    const handlePrevPage = () => setPage((prev) => prev - 1);

    return (
        <div>
            {!pdfDocument && <span>Loading...</span>}
            <canvas
                ref={canvasRef}
                style={{transform: 'scale(0.8)'}}
            />
            {Boolean(pdfDocument && pdfDocument.numPages) && (
                <nav>
                    <ul className="pager">
                        <li className="previous">
                            <button disabled={page === 1} onClick={handlePrevPage}>
                                Previous
                            </button>
                        </li>
                        <li className="next">
                            <button
                                disabled={page === pdfDocument?.numPages}
                                onClick={handleNextPage}
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

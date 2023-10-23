'use client';
import html2canvas from 'html2canvas';
import {useEffect, useRef} from "react";


export default function Home() {
    const canvasRef = useRef();

    const handleGetPDF = () => {

        const ctx = canvasRef.current.getContext('2d');
    }

    return (
        <main>
            <div>
                <canvas ref={canvasRef}/>
                <button onClick={handleGetPDF}>
                    handleGetPDF
                </button>
            </div>
        </main>
    )
}

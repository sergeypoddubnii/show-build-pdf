'use client';
import { jsPDF } from "jspdf";
// const perf =require('./heloo.html');

export default function Home() {

    const generatePDF = () => {
        const htmlContent = `
               <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <style>
            h1 {color:red;}
            p {color:blue;}
        </style>
        <body>
            <h1 color="red">hElooo</h1>
            <p>color</p>
        </body>
        </html>

      `;

        const pdf  = new jsPDF('p', 'pt', 'a4')
        pdf.html(htmlContent, {
            callback: function (doc) {
                doc.save();
            }
        });
    };


    return (
        <main>
            canvas
            <h1>Generate PDF from React</h1>
            <button onClick={generatePDF}>Generate PDF</button>
        </main>
    )
}

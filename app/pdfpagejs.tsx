import Head from 'next/head';

const PDFViewereee = () => {
    const pdfUrl = '/pdf/Resume.pdf'; // Path to your local PDF file

    return (
        <div>
            <Head>
                <link rel="preload" href={pdfUrl} as="fetch" crossOrigin="anonymous" />
            </Head>
        <h1>Local PDF Viewer</h1>
    <embed src={pdfUrl} type="application/pdf" width="100%" height="600px" />
        </div>
);
};

export default PDFViewereee;

import React, { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function App() {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(2)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
    }
    return (
        <div className="flex items-center content-center justify-center w-screen h-screen bg-red-400">
            <Document file="http://localhost:3220/pdf/text.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    )
}

export default App

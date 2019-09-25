import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import kangu from './KANGU-08-07-2019.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  return (
    <div>
      <Document file={kangu}>
        <Page pageNumber={1}/>
      </Document>
    </div>
  );
}

export default App;

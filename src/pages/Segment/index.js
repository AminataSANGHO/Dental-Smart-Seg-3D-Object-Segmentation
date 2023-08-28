import React, { useState } from 'react';
// Sections components
import BaseLayout from './components/BaseLayout';

// import View from "layouts/sections/components/View";

import Upload from "./components/upload"
import Visualized from "./components/visualised"




function Segment() {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleReload = (data) => {
    if (data) {
      setFileUploaded(false);
    }
  };

  const handleFileUpload = (url) => {
    setFileUploaded(true);
    setUploadedFile(url);
  };

  return (
    <div>
      {fileUploaded ? (
        <BaseLayout
          title="Page Headers"
          breadcrumb={[
            { label: "Segment", route: "/sections/page-sections/page-headers" },
            { label: "Visualisation" },
          ]}
        >
          <Visualized height="40rem" uploadedFile={uploadedFile} activeReload={handleReload} />
        </BaseLayout>
      ) : (
        <BaseLayout
          title="Page Headers"
          breadcrumb={[
            { label: "Segment", route: "/sections/page-sections/page-headers" },
            { label: "Upload" },
          ]}
        >
          <Upload height="40rem" handleFileUpload={handleFileUpload} />
        </BaseLayout>
      )}
    </div>
  );
}
export default Segment;

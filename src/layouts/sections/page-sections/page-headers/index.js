import React, { useState } from 'react';
import axios from 'axios';
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
// import View from "layouts/sections/components/View";
import Frame from "./frame";
import Upload from "./components/upload"
import Visualized from "./components/visualised"


// PageHeaders page components
import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";

// PageHeaders page components code
import headerOneCode from "layouts/sections/page-sections/page-headers/components/HeaderOne/code";




function PageHeaders() {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleReload = (data) => {
    if (data) {
      setFileUploaded(false);
    }
  };

  const handleFileUpload = (file) => {
    setFileUploaded(true);
    const formData = new FormData();
    formData.append('file', file);

    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/upload",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData
    })
    .then(response => {
      console.log('File uploaded successfully', response.data.path);
      const filePath = response.data.path;
      console.log(filePath);
      setUploadedFile(filePath);
    })
      .catch((err) => console.log('Error uploading image:', err));

      console.log("in index js uploadedFile", uploadedFile);

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
export default PageHeaders;

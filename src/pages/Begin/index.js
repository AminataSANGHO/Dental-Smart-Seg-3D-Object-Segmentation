import React, { useState } from 'react';
// Sections components
import BaseLayout from './components/BaseLayout';

// import View from "layouts/sections/components/View";

import Start from './components/start';
import Upload from "./components/upload"
import Visualized from "./components/visualised"




function Begin() {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [back, setBack] = useState(true);
  const [active,setActive]= useState(false);
  const [predit, setPredit] = useState("");

  // const handleReload = (data) => {
  //   if (data) {
  //     setFileUploaded(false);
  //   }
  // };

  const handleFileUpload = (url) => {
    setFileUploaded(true);
    setBack(false);
    setUploadedFile(url);
    setActive(false);
  };

  const handleBack=()=>{
    setBack(true);
  }

  const activeUpload=(data)=>{
    if (data==true) {
      setActive(true);
      setBack(false);
      setFileUploaded(false);
    }
  }

  const handlePredit=(data)=>{
    if (data){
      setPredit("Label");
    }
  }
  return (
    <>
    {back ? (
        <BaseLayout
          title="Segment"
          breadcrumb={[
            { label: "Dental Smart Seg", route: "/pages/segment/begin" },
            { label: "Begin" },
          ]}
        >
          <Start height="40rem" handleFileUpload={handleFileUpload} activeUpload={activeUpload} />
        </BaseLayout>
      ) : fileUploaded  ? (
        <BaseLayout
          title="Segment"
          breadcrumb={[
            { label: "Dental Smart Seg", route: "/pages/segment/visualisation" },
            { label: "Visualisation" },
          ]}
        >
          <Visualized height="40rem" uploadedFile={uploadedFile} activeBack={handleBack} predit={predit} />
        </BaseLayout>
      ) : active ? (
        <BaseLayout
          title="Segment"
          breadcrumb={[
            { label: "Dental Smart Seg", route: "/pages/segment/upload" },
            { label: "Upload" },
          ]}
        >
          <Upload height="40rem" handleFileUpload={handleFileUpload} handleBack={handleBack} handlePredit={handlePredit}/>
        </BaseLayout>
      ) : (
        <BaseLayout
          title="Segment"
          breadcrumb={[
            { label: "Dental Smart Seg", route: "/pages/segment/begin" },
            { label: "Begin" },
          ]}
        >
          <Start height="40rem" handleFileUpload={handleFileUpload} activeUpload={activeUpload} />
        </BaseLayout>
      )}

    
    </>
    
  );
}
export default Begin;

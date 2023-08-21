
import { useState } from "react";
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

// function PageHeaders() {

//   const handleFileUpload = (file) => {
//     console.log('File uploaded:', file.name);
//   };


//   return (
//     <>
//     {/******** A mettre dans une condition tertiaire */}
//       <BaseLayout
//         title="Page Headers"
//         breadcrumb={[
//           { label: "Segment", route: "/sections/page-sections/page-headers" },
//           { label: "Upload" },
//         ]}
//       >
//         <Upload height="40rem"
//           handleFileUpload={handleFileUpload}>      
//         </Upload>
//       </BaseLayout>

//       <BaseLayout
//         title="Page Headers"
//         breadcrumb={[
//           { label: "Segment", route: "/sections/page-sections/page-headers" },
//           { label: "Visualisation" },
//         ]}
//       >
//         <Visualized height="40rem">      
//         </Visualized>
//       </BaseLayout>
//     </>
    
//   );
// }


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
    setUploadedFile(file);
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

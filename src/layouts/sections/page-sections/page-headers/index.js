

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
  return (
    <>
    {/******** A mettre dans une condition tertiaire */}
      <BaseLayout
        title="Page Headers"
        breadcrumb={[
          { label: "Segment", route: "/sections/page-sections/page-headers" },
          { label: "Upload" },
        ]}
      >
        <Upload height="40rem">      
        </Upload>
      </BaseLayout>

      <BaseLayout
        title="Page Headers"
        breadcrumb={[
          { label: "Segment", route: "/sections/page-sections/page-headers" },
          { label: "Visualisation" },
        ]}
      >
        <Visualized height="40rem">      
        </Visualized>
      </BaseLayout>
    </>
    
  );
}

export default PageHeaders;

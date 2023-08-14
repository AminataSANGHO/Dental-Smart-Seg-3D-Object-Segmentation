

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// PageHeaders page components
import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";

// PageHeaders page components code
import headerOneCode from "layouts/sections/page-sections/page-headers/components/HeaderOne/code";

function PageHeaders() {
  return (
    <BaseLayout
      title="Page Headers"
      breadcrumb={[
        { label: "Segment", route: "/sections/page-sections/page-headers" },
        { label: "Page Download" },
      ]}
    >
      <View title="Download" code={headerOneCode} height="40rem">
        {/* <HeaderOne /> */}
      </View>
    </BaseLayout>
  );
}

export default PageHeaders;

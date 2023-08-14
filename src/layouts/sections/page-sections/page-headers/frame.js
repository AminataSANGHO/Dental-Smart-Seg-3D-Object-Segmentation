

import { useState, useEffect } from "react";

// prop-types is a library for type checking of props
import PropTypes from "prop-types";

// react-copy-to-clipboard components
import { CopyToClipboard } from "react-copy-to-clipboard";

// react-syntax-highlighter components
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Slide from "@mui/material/Slide";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAlert from "components/MKAlert";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Project imports
import CenteredCard from "./components/centeredCard"

// Images
import objImg from "./../../../../assets/images/obj.jpg"
import stlImg from "./../../../../assets/images/stl.jpg"
// import objImg from "./../../../../assets/images/obj.jpg"

function Frame({height, ...rest }) {
  const { grey } = colors;

  const [activeTab, setActiveTab] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  useEffect(() => {
    setTimeout(() => setSuccess(false), 3000);
  }, [success]);

  return (
    <MKBox
      width="100%"
      position="relative"
      borderRadius="xl"
      shadow="lg"
      mb={12}
      sx={{ overflow: "hidden" }}
      {...rest}
    >
      {/* <MKBox
        px={3}
        sx={{
          borderBottom: ({ borders: { borderWidth, borderColor } }) =>
            `${borderWidth[1]} solid ${borderColor}`,
        }}
      >
        <Grid container spacing={2} justifyContent="space-between" py={1}>
          <Grid item xs={12} lg={3}>
            <MKTypography variant="body1" pt={0.5}>
              {title}
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={3}>
            <AppBar position="static">
              <Tabs value={activeTab} onChange={handleTabType}>
                <Tab
                  icon={
                    <MKBox
                      component="i"
                      color="dark"
                      mr={1.25}
                      sx={{ fontSize: ({ typography: { size } }) => size.sm }}
                      className="fas fa-desktop"
                    />
                  }
                  label="Preview"
                />
                <Tab
                  icon={
                    <MKBox
                      component="i"
                      color="dark"
                      mr={1.25}
                      sx={{ fontSize: ({ typography: { size } }) => size.sm }}
                      className="fas fa-code"
                    />
                  }
                  label="Code"
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </MKBox> */}

      <MKBox display={activeTab === 0 ? "block" : "none"}>
        <MKBox width="100%" p={3}>
          <MKBox
            bgColor="grey-100"
            width="100%"
            height={height}
            maxHeight="40rem"
            borderRadius="xl"
            sx={{ overflowX: "hidden", overflowY: "scroll" }}
          >
           <Grid
            container
            direction="column"
            justifyContent="center" // Center vertically
            alignItems="center" // Center horizontally
            spacing={2}
            >
                <Grid item style={{ marginTop: '5rem' }}>
                    <MKTypography variant="h1">UpLoad</MKTypography>
                </Grid>
                <Grid item style={{ marginTop: '1rem' }}>
                    <MKTypography variant="body1" color="text">
                    You can load these types of 3D files.
                    </MKTypography>
                </Grid>
                <Grid container spacing={2} justifyContent="center" // Center vertically
                            alignItems="center" style={{ marginTop: '5rem' }}>
                    <Grid item xs={3} lg={2}>
                        <CenteredCard
                        image={objImg}
                        title="OBJ"
                        // description="Website visitors today demand a frictionless user experience — especially when using search. Because of the high standards."
                        />
                    </Grid>
                    <Grid item xs={3} lg={2}>
                        <CenteredCard
                        image={stlImg}
                        title="OBJ"
                        // description="Website visitors today demand a frictionless user experience — especially when using search. Because of the high standards."
                        />
                    </Grid>
                    <Grid item xs={3} lg={2}>
                        <CenteredCard
                        image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        title="OBJ"
                        // description="Website visitors today demand a frictionless user experience — especially when using search. Because of the high standards."
                        />
                    </Grid>
                </Grid>
                
            </Grid>
          </MKBox>
        </MKBox>
      </MKBox>
      {/* <MKBox display={activeTab === 1 ? "block" : "none"} p={3}>
        <MKBox
          bgColor="grey-100"
          position="relative"
          width="100%"
          borderRadius="xl"
          sx={{ overflow: "hidden" }}
        >
          <CopyToClipboard text={code}>
            <MKButton
              variant="gradient"
              color="dark"
              size="small"
              sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
              onClick={() => setSuccess(true)}
            >
              <MKBox color="white" mr={0.5} className="fas fa-copy" /> Copy
            </MKButton>
          </CopyToClipboard>
          <Slide direction="down" in={success} unmountOnExit>
            <MKBox position="absolute" top="0.5rem" left={0} width="100%">
              <MKAlert
                width="25%"
                mx="auto"
                color="success"
                sx={{ minHeight: "2.5rem !important", py: 1, justifyContent: "center" }}
              >
                <MKTypography variant="body2" color="white" fontWeight="regular">
                  Code successfully copied!
                </MKTypography>
              </MKAlert>
            </MKBox>
          </Slide>
          <SyntaxHighlighter
            language="jsx"
            style={prism}
            showLineNumbers
            customStyle={{
              height,
              maxHeight: "40rem",
              fontSize: "1rem",
              backgroundColor: grey[100],
              padding: "1rem 1rem 1rem 0.25rem",
              overflowY: "scroll",
              margin: 0,
            }}
          >
            {code}
          </SyntaxHighlighter>
        </MKBox>
      </MKBox> */}
    </MKBox>
  );
}

// Setting default props for the Frame
Frame.defaultProps = {
  height: "auto",
};

// Typechecking props for the Frame
Frame.propTypes = {
//   children: PropTypes.node.isRequired,
//   code: PropTypes.node.isRequired,
//   title: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default Frame;

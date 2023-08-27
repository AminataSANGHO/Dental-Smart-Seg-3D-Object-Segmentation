

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
import CenteredCard from "./centeredCard"

import axios from "axios";

// Images
import objImg from "./../../../../../assets/images/obj.jpg"
import stlImg from "./../../../../../assets/images/stl.jpg"
import vtpImg from "./../../../../../assets/images/obj.jpg"

function Upload({height,handleFileUpload , ...rest}) {
  const { grey } = colors;

  const [activeTab, setActiveTab] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  useEffect(() => {
    setTimeout(() => setSuccess(false), 3000);
  }, [success]);

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleFileUpload(file);
      alert(`File uploaded: ${file.name}`);
    }
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     // setUploadedFile({ file, preview: reader.result });
    //     handleFileUpload({ file, preview: reader.result });
    //   };
    //   reader.readAsDataURL(file);
    // }
  };


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
     

      <MKBox display={activeTab === 0 ? "block" : "none"}>
        <MKBox width="100%" p={3}>
          <MKBox
            bgColor="grey-100"
            width="100%"
            height={height}
            maxHeight="40rem"
            borderRadius="xl"
            // sx={{ overflowX: "hidden", overflowY: "scroll" }}
          >
           <Grid
            container
            direction="column"
            justifyContent="center" // Center vertically
            alignItems="center" // Center horizontally
            spacing={2}
            >
                <Grid item style={{ marginTop: '5rem' }}>
                    <MKTypography variant="h1" sx={{ color: '#30062C'}}>
                    UpLoad</MKTypography>
                </Grid>
                <Grid item style={{ marginTop: '1rem' }}>
                    <MKTypography variant="body1" color="text">
                    You can load these types of 3D files.
                    </MKTypography>
                </Grid>
                <Grid container spacing={2} justifyContent="center" // Center vertically
                            alignItems="center" style={{ marginTop: '5rem' }}>
                    <Grid item xs={3} lg={2}
                    style={{ cursor: 'pointer' }}
                    onClick={() => document.getElementById(`file-upload-OBJ`).click()}>
                        <CenteredCard
                        image={objImg}
                        title="OBJ"/>
                         <input
                          type="file"
                          accept=".obj"
                          id={`file-upload-OBJ`}
                          style={{ display: 'none' }}
                          onChange={handleInputChange}
                        />

                    </Grid>
                    <Grid item xs={3} lg={2}
                    style={{ cursor: 'pointer' }}
                    onClick={() => document.getElementById(`file-upload-STL`).click()}>
                        <CenteredCard
                        image={stlImg}
                        title="STL"/>
                        <input
                          type="file"
                          accept=".stl"
                          id={`file-upload-STL`}
                          style={{ display: 'none' }}
                          onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={3} lg={2}
                    style={{ cursor: 'pointer' }}
                    onClick={() => document.getElementById(`file-upload-VTP`).click()}>
                        <CenteredCard
                        image={vtpImg}
                        title="VTP"/>
                        <input
                          type="file"
                          accept=".vtp"
                          id={`file-upload-VTP`}
                          style={{ display: 'none' }}
                          onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
                
            </Grid>
          </MKBox>
        </MKBox>
      </MKBox>
     
    </MKBox>
  );
}

// Setting default props for the Upload
Upload.defaultProps = {
  height: "auto",
};

// Typechecking props for the Upload
Upload.propTypes = {
  height: PropTypes.string,
};

export default Upload;

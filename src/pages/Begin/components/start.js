import { useState, useEffect } from "react";
import axios from 'axios';

// prop-types is a library for type checking of props
import PropTypes from "prop-types";



// @mui material components
import Grid from "@mui/material/Grid";


// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";


import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Project imports
import CenteredCard from "./centeredCard"

// Images
import objImg from "assets/images/obj.png"
// import stlImg from "assets/images/stl.jpg"
import vtpImg from "assets/images/vtp-1.png"

function Start({height,handleFileUpload ,activeUpload, ...rest}) {
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

    }
  
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
                {/* <Grid item style={{ marginTop: '5rem' }}>
                    <MKTypography variant="h1" sx={{ color: '#30062C'}}>
                    UpLoad</MKTypography>
                </Grid>
                <Grid item style={{ marginTop: '1rem' }}>
                    <MKTypography variant="body1" color="text">
                    Theses types of Files are supported .
                    </MKTypography>
                </Grid> */}
                <Grid container spacing={5} justifyContent="center" // Center vertically
                            alignItems="center" style={{ marginTop: '15rem' }}>


                    <MKButton
                    size="large"
                    sx={{
                        background:"linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)",
                        color: "#ffffff", // Text color
                        // mb: 5, // Margin bottom
                        mr:5,
                        fontSize: "2rem", 
                        // font
                    }}
                    onClick={() => document.getElementById(`file-upload-VTP`).click()}
                    >
                    <input
                          type="file"
                          accept=".vtp"
                          id={`file-upload-VTP`}
                          style={{ display: 'none' }}
                          onChange={handleInputChange}
                        />
                    <ViewInArIcon  sx={{ mr:3,ml:3}} />
                    Visualization
                    </MKButton>

                    <MKButton
                    size="large"
                    sx={{
                        background:"linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)",
                        color: "#ffffff", // Text color
                        // mb: 5, // Margin bottom
                        fontSize: "2rem",
                    }}
                    onClick={() => activeUpload(true)}
                    >
                    <AccountTreeRoundedIcon sx={{ mr:3,ml:3}} />
                    Segmentation
                    </MKButton>



                    {/* <Grid item xs={3} lg={2}
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

                    </Grid> */}
                    {/* <Grid item xs={3} lg={2}
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
                    </Grid> */}
                    {/* <Grid item xs={3} lg={2}
                    style={{ cursor: 'pointer' }}
                    onClick={() => document.getElementById(`file-upload-VTP`).click()}>
                        <CenteredCard
                        image={vtpImg}
                        title=".VTP"/>
                        <input
                          type="file"
                          accept=".vtp"
                          id={`file-upload-VTP`}
                          style={{ display: 'none' }}
                          onChange={handleInputChange}
                        />
                    </Grid> */}
                </Grid>
                
            </Grid>
          </MKBox>
        </MKBox>
      </MKBox>
     
    </MKBox>
  );
}

// Setting default props for the Start
Start.defaultProps = {
  height: "auto",
};

// Typechecking props for the Start
Start.propTypes = {
  height: PropTypes.string,
};

export default Start;

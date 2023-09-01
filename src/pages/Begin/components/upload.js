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

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Project imports
import CenteredCard from "./centeredCard"

import ReplyIcon from '@mui/icons-material/Reply';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';

// Images
import objImg from "assets/images/obj.png"
// import stlImg from "assets/images/stl.jpg"
import vtpImg from "assets/images/vtp-1.png"

function Upload({height,handleFileUpload,handleBack ,handlePredit , ...rest}) {
  const { grey } = colors;

  const [activeTab, setActiveTab] = useState(0);
  const [success, setSuccess] = useState(false);
  const [file, setFile]= useState(null);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  useEffect(() => {
    setTimeout(() => setSuccess(false), 3000);
  }, [success]);

  const handleInputChange = (event) => {
    
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
      document.getElementById('filename').innerHTML=event.target.files[0].name;

    }
  
  };

  const handlePrediction = async () => {
    document.querySelector("#vtkContainer").innerHTML = "Segmenting...";

    console.log("Segmenting...");

    const formData = new FormData();
    formData.append("file", file);

      await axios
      .post("http://localhost:8000/api/v1/predict/post_processing", formData)
      .then((response) => {
        console.log("Response ", response);
        if (response) {
          document.querySelector("#vtkContainer").innerHTML = "";
          handleFileUpload(response.data.prediction_file)
          handlePredit("Label");
        }
      })
      .catch((err) => {
        document.querySelector("#vtkContainer").innerHTML = " ";
        alert("Segmentation failed try again");
        console.log("Error ", err);
        
      });

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
      <Grid container justifyContent="right" // Center vertically
                            alignItems="center">
                  <MKButton
                        size="large"
                        sx={{
                          backgroundImage:
                            "linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)",
                          color: "#ffffff", // Text color
                          mr: 5, // Margin bottom
                        }}
                        onClick={() => handleBack(true)}
                      >
                        <ReplyIcon sx={{ mr: 4 }} />
                        Return
                  </MKButton>
                  <MKButton
                        size="large"
                        sx={{
                          backgroundImage:
                            "linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)",
                          color: "#ffffff", // Text color
                          mr: 3, // Margin bottom
                        }}
                        onClick={handlePrediction}
                      >
                        <AccountTreeRoundedIcon sx={{ mr: 3 }} />
                        Segment
                  </MKButton>
             </Grid>

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
            id="vtkContainer"
            >
                <Grid item style={{ marginTop: '5rem' }}>
                    <MKTypography variant="h1" sx={{ color: '#30062C'}}>
                    UpLoad</MKTypography>
                </Grid>
                <Grid item style={{ marginTop: '1rem' }}>
                    <MKTypography variant="body1" color="text">
                    Theses types of Files are supported
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
                    </Grid>
                    
                </Grid>
                <div id='filename' style={{marginTop: '2rem', fontSize: '1.5rem'}}>
                    {/* <MKTypography>
                          HIII
                    </MKTypography> */}
                </div>
                
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

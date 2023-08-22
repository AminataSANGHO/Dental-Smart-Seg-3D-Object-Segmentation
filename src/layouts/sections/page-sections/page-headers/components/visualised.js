

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
import Icon from "@mui/material/Icon";

import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAlert from "components/MKAlert";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";


// Images
import initial from "./../../../../../assets/images/initial.png"

function Visualized({height,uploadedFile,activeReload , ...rest }) {
  const { grey } = colors;

  const [activeTab, setActiveTab] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  useEffect(() => {
    setTimeout(() => setSuccess(false), 3000);
  }, [success]);

  // const handleReload = () => {
  //   const data = true;
  //   activeReload(data); 
  // };

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
            // sx={{ overflowX: "scroll", overflowY: "scroll" }}
            style={{ paddingLeft: '10%' }}
          >
           <Grid
                container
                direction="row" // Change direction to "row"
                justifyContent="space-between" // Align items on the left and right
                alignItems="center" // Center vertically
                spacing={5}
                style={{ marginTop: '0.1rem' }}
            >
                <Grid item xs={12} lg={6} >
                <img src={initial} alt="image" style={{ borderRadius: "15px" }} width="140%"/>
                </Grid>
                <Grid item xs={12} lg={4} container direction="column" justifyContent="center" alignItems="flex-start" style={{ paddingLeft: '10%' }}>
                <MKButton size="large" sx={{
                        backgroundImage: 'linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)',
                        color: '#ffffff', // Text color
                        mb: 5, // Margin bottom                       
                    }}
                    onClick={() => activeReload(true)}>
                    <FileUploadRoundedIcon sx={{ mr: 4 }}/>
                    Upload
                </MKButton>
                <MKButton color="info" size="large" sx={{ backgroundImage: 'linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)',
                        color: '#ffffff', // Text color
                        mb: 5, // Margin bottom
                    }}>
                    <AccountTreeRoundedIcon sx={{ mr: 3 }}/>
                    Segment
                </MKButton>
                <MKButton color="info" size="large" sx={{backgroundImage: 'linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)',
                        color: '#ffffff', // Text color
                        mb: 5, // Margin bottom
                        }}>
                    <DownloadForOfflineRoundedIcon sx={{ mr: 2 }}/>
                    Download
                </MKButton>
                </Grid>
            </Grid>
          </MKBox>
        </MKBox>
      </MKBox>
      
    </MKBox>
  );
}

// Setting default props for the Visualized
Visualized.defaultProps = {
  height: "auto",
};

// Typechecking props for the Visualized
Visualized.propTypes = {
//   children: PropTypes.node.isRequired,
//   code: PropTypes.node.isRequired,
//   title: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default Visualized;

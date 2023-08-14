

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

// Project imports
import CenteredCard from "./centeredCard"

// Images
import initial from "./../../../../../assets/images/initial.png"
import stlImg from "./../../../../../assets/images/stl.jpg"
// import objImg from "./../../../../assets/images/obj.jpg"

function Visualized({height, ...rest }) {
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
            sx={{ overflowX: "scroll", overflowY: "scroll" }}
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
                    }}>
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

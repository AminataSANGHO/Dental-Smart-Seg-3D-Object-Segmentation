import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


function SimpleModal() {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  return (
    <MKBox component="section" py={6}>
      <Container>
        {/* <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">
          <MKButton variant="gradient" color="info" onClick={toggleModal}>
            Launch Demo Modal
          </MKButton>
        </Grid> */}
        <MKButton size="large" sx={{
                        backgroundImage: 'linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)',
                        color: '#ffffff', // Text color
                        mb: 5, // Margin bottom
                        borderRadius: '50px',
                        
                    }}
                    onClick={toggleModal}>
                    <HelpOutlineIcon sx={{ mr: 2 }}/>
                    Why Segment
                </MKButton>
        <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={show} timeout={500}>
            <MKBox
              position="relative"
              width="500px"
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
            >
              <MKBox display="flex" alginItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">Why segment dental arcade?</MKTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <MKBox p={3}>
                <MKTypography variant="body2" color="secondary" fontWeight="regular" alginItems="center">
                Segmenting dental arcade refers to the process of dividing or separating the dental arch,
                which includes the teeth and surrounding structures, 
                into distinct and identifiable regions or segments.
                This segmentation process is often performed for various 
                reasons within the field of dentistry and dental imaging.<br />
                Here are a few reasons why segmenting dental arcades might
                be important:<br /></MKTypography>
                <MKTypography variant="body2" color="text" fontWeight="regular" alginItems="center" sx={{alginItems:'center'}}>
                  <br />
                  <ul style={{ listStyleType: 'square', marginLeft: '1rem', paddingLeft: '0' }}>
                    <li>Treatment Planning</li>
                    <li>Diagnostic Analysis</li>
                    <li>Research and Study</li>
                    <li>Computer-Aided Design (CAD) and Manufacturing</li>
                    <li>Visualization and Education</li>
                    <li>3D Printing</li>
                  </ul>
                </MKTypography>
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <MKBox display="flex" justifyContent="space-between" p={1.5}>
                <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                  close
                </MKButton>
                
              </MKBox>
            </MKBox>
          </Slide>
        </Modal>
      </Container>
    </MKBox>
  );
}

export default SimpleModal;
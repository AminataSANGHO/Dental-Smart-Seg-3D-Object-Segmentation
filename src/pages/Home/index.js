
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import MKButton from "components/MKButton";


// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "DefaultFooter";




// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

import SimpleModal from "./components/SimpleModal";


function Home() {
  return (
    <>
      <DefaultNavbar
        routes={routes}        
        // transparent
        light
      />
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          // backgroundImage: `url(${bgImage})`,
          background: 'linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)',
          // 'linear-gradient(to top, #11093D, #3F3A62)',
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              textAlign='center'
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
              fontFamily="Arial, sans-serif"
              style={{ marginTop: '10rem' }}
            >
              Welcome to Dental Smart Seg<br/>
              your intelligent solution for precise dental arcade segmentation {" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >            
              With advanced image processing technology, 
              the app offers accurate and automated segmentation of dental arches from radiographic or 
              scanned dental images. Dental professionals can seamlessly utilize this tool to isolate 
              and define the contours of individual teeth and the overall dental arch, facilitating
               comprehensive treatment planning and analysis.
            </MKTypography>
          </Grid>

          <Grid item style={{ marginTop: '5rem', alignItems:'center' }}>
                <SimpleModal/>
          </Grid>
        </Container>

       
      </MKBox>
     

      {/* Footer */}
      <MKBox pt={0} px={1}  sx={{ background: "rgba(0, 0, 0)" }}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;



// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "DefaultFooter";

// About Us page sections
import Team from "pages/AboutUs/sections/Team";
import Supervisor from "./sections/Supervisor";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";



function AboutUs() {
  return (
    <>
      <DefaultNavbar
        routes={routes}        
        // transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          // backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          //   `${linearGradient(
          //     rgba(gradients.dark.main, 0.6),
          //     rgba(gradients.dark.state, 0.6)
          //   )}, url(${bgImage})`,
          // backgroundSize: "cover",
          background: 'linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)',          
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              About Us
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
            Our dynamic team is a blend of talented students from diverse universities, 
            united under the banner of '3D Smart Factory' internship program. 
            Together, we're harnessing our unique perspectives and skills to drive innovation, 
            collaborating across disciplines to unlock the future of manufacturing.
            </MKTypography>
           
          </Grid>
        </Container>
        
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          
        }}
      >
       
        <Team />
        <Supervisor />
       
      </Card>
      
      <MKBox pt={0} px={1}  sx={{ background: "rgba(0, 0, 0)" }}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;

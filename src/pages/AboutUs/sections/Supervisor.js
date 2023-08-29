

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "./HorizontalTeamCard";

// Images
import Bertin from "assets/images/Bertin.png";
import Hamza from "assets/images/Hamza.png";
import Amine from "assets/images/Amine.png";


function Supervisor() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      // bgColor="dark"
      sx={{background: 'linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)',
        }}
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container justifyContent='center' alignItems='center'>
          <Grid item xs={12} md={8} sx={{ mb: 6 }} textAlign='center'>
            <MKTypography variant="h1" color="white" >
             Supervisors
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={Bertin}
                name="Dr. Thierry Bertin"
                position={{ color: "success", label: "Engineer & Dentist" }}
                description="CEO of 3D Smart Factory"
                
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={Hamza}
                name="Mr. Hamza Mouncif"
                position={{ color: "info", label: "PhD Researcher & Data scientist" }}
                // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
         
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={Amine}
                name="Mr. Amine Kassimi"
                position={{ color: "info", label: "Data, ML & 3D Engineer" }}
                // description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
         
          
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Supervisor;

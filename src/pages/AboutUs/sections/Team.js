

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "./HorizontalTeamCard";

// Images
import Aminata from "assets/images/Aminata.png";
import Ismail from "assets/images/Ismail.png";
import Nouhaila from "assets/images/Nouhaila.png";
import Aicha from "assets/images/Aicha.jpeg";

function Team() {
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
            Executive Team
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={Aminata}
                name="Aminata SANGHO"
                position={{ color: "info", label: "Data Science and Frontend Development" }}
                description="ENSA KHOURIBGA"
                
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={Ismail}
                name="Ismail  CHAKRANE"
                position={{ color: "info", label: "Machine Learning and Backend Development " }}
                description="ENSAM RABAT"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={Aicha}
                name="EL KANFAOUY Aicha "
                position={{ color: "info", label: "Data science and backend development" }}
                description="ENSAT TANGER"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={Nouhaila}
                name="AIT BELLA Nouhaila "
                position={{ color: "info", label: "Data science and frontend development" }}
                description="ENSA KHOURIBGA"
              />
            </MKBox>
          </Grid>
          
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;

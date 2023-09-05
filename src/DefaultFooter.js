

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultFooter({ content }) {
  const { brand, socials, copyright } = content;

  return (
    <MKBox component="footer">
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={3} sx={{ mb: 3 }}>
            <MKBox>
              <Link to={brand.route}>
                <MKBox component="img" src={brand.image} alt={brand.name} maxWidth="10rem"  mb={0}/>
              </Link>
              <MKTypography variant="h4" sx={{color:'rgb(255,255,255)'}}>{brand.name}</MKTypography>
            </MKBox>
          
          </Grid>         
          <Grid item xs={12} md={6} sx={{ ml: 3, mb: 1}}>
             {copyright}
          </Grid>
          <Grid>
              <MKBox display="flex" alignItems="center" mt={3} ml={5}>
                  {socials.map(({ icon, link }, key) => (
                    <MKTypography
                      key={link}
                      component="a"
                      href={link}
                      // target="_blank"
                      rel="noreferrer"
                      variant="h2"
                      color="light"
                      opacity={1}
                      mr={key === socials.length - 1 ? 0 : 2.5}
                    >
                      {icon}
                    </MKTypography>
                  ))}
                </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;

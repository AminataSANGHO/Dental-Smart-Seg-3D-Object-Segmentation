

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import footerRoutes from "footer.routes";
import DefaultFooter from "DefaultFooter";
import Breadcrumbs from "examples/Breadcrumbs";

// Routes
import routes from "routes";

function BaseLayout({ breadcrumb, title, children }) {
  return (
    <>
    <MKBox display="flex" flexDirection="column" bgColor="white" minHeight="100vh"
    style={{
      background: 'linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)',
    }}>
      <MKBox bgColor="black" shadow="sm" py={0.25}>
        <DefaultNavbar
          routes={routes}          
          // transparent
          // relative
          light
        />
      </MKBox>
      <Container sx={{ mt: 6 }}>
        <Grid container item xs={12} flexDirection="column" justifyContent="center" mx="auto"
        style={{
          paddingTop:'5rem',
        }}>
          <MKBox width={{ xs: "100%", md: "50%", lg: "25%" }} mb={3}>
            <Breadcrumbs routes={breadcrumb} />
          </MKBox>
          {/* <MKTypography variant="h3" mb={1}>
            {title}
          </MKTypography> */}
          {children}
        </Grid>
      </Container>
      {/* <MKBox mt="auto">
        <CenteredFooter />
      </MKBox> */}
    </MKBox>
    {/* Footer */}
    <MKBox pt={0} px={1}  sx={{ background: "rgba(0, 0, 0)" }}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

// Typechecking props for the BaseLayout
BaseLayout.propTypes = {
  breadcrumb: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BaseLayout;

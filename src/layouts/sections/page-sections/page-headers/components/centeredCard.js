

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function CenteredCard({ image, title, description}) {
  return (
    <Card>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <MKBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          width="100%"
          position="relative"
          zIndex={1}
        />
        <MKBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MKBox>
      <MKBox p={3} mt={-1} textAlign="center">
        <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
          {title}
        </MKTypography>
        <MKBox mt={1} mb={3}>
          <MKTypography variant="body2" component="p" color="text">
            {description}
          </MKTypography>
        </MKBox>        
      </MKBox>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
CenteredCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,

};

export default CenteredCard;

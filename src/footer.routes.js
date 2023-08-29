

//  React components
import MKTypography from "components/MKTypography";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Images
import logo from "assets/images/Logo-dark-bg.png"

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Dental Smart Seg",
    image: logo,
    route: "/",
  },
  socials: [
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/company/",
    },
    
    {
      icon: <FacebookIcon />,
      link: "https://web.facebook.com/profile.php?id=100063931760200",
    },
    {
      icon: <TwitterIcon />,
      link: "https://3dsmartfactory.csit.ma/",
    },
    
  ],
  copyright: (
    <MKTypography variant="h5" fontWeight="regular" sx={{color:'rgb(255,255,255) '}}>
      All rights reserved. Copyright &copy; {date} 3D Smart Factory Interns{" "}
      
    </MKTypography>
  ),
};



//  React components
import MKTypography from "components/MKTypography";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
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
      link: "/",
    },
    {
      icon: <TwitterIcon />,
      link: "/",
    },
    {
      icon: <GitHubIcon />,
      link: "/",
    },
    
  ],
  copyright: (
    <MKTypography variant="h5" fontWeight="regular" sx={{color:'rgb(255,255,255) '}}>
      All rights reserved. Copyright &copy; {date} 3D Smart Factory Interns{" "}
      
    </MKTypography>
  ),
};

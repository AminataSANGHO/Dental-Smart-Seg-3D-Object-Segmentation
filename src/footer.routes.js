

// Material Kit 2 React components
import MKTypography from "components/MKTypography";


// Images
import logo from "assets/images/Logo-dark-bg.png"

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Dental Smart Seg",
    image: logo,
    route: "/",
  },
 
  copyright: (
    <MKTypography variant="h5" fontWeight="regular" sx={{color:'rgb(255,255,255) '}}>
      All rights reserved. Copyright &copy; {date} 3D Smart Factory Interns{" "}.
      
    </MKTypography>
  ),
};



/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';

// Pages
// import AboutUs from "layouts/pages/landing-pages/about-us";
// import ContactUs from "layouts/pages/landing-pages/contact-us";
// import Author from "layouts/pages/landing-pages/author";
// import SignIn from "layouts/pages/authentication/sign-in";
// import Presentation from "layouts/pages/presentation";
import Home from "layouts/pages/home";
import ContactUs from "layouts/pages/contact-us";
import AboutUs from "layouts/pages/about-us";
import Segment from "layouts/pages/segment";


// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    key:1,
    name: "home",
    icon: <HomeRoundedIcon/>,
    columns: 1,
    rowsPerColumn: 2,
    route: "/home",
    component: <Home />,
    
  },
  
  {
    key:2,
    name: "Segment",
    icon: <AccountTreeRoundedIcon/>,
    route: "/pages/segment",
    component: <Segment />,
    
  },
  {
    key:3,
    name: "about us",
    icon: <InfoIcon/>,
    route: "/pages/about-us",
    component: <AboutUs />,
    
  },
  {
    key:4,
    name: "contact us",
    icon: <ContactsIcon/>,
    route: "/pages/contact-us",
    component: <ContactUs />,
    
  },
  
];

export default routes;

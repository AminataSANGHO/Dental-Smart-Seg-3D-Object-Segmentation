
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import MKButton from "components/MKButton";

// Icons
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import StarsIcon from '@mui/icons-material/Stars';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';


// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "DefaultFooter";

// Images
import reat from "assets/images/react.png";
import vscode from "assets/images/vscode-.png";
import github from "assets/images/github.png";
import colab from "assets/images/colab.png";
import vkt from "assets/images/vtk.png";
import paraview from "assets/images/ParaView.png";
import pytorch from "assets/images/pytorch.png";
import fast from "assets/images/fast.png";
import node from "assets/images/node.png";






// Routes
import routes from "routes";
import footerRoutes from "footer.routes";



// import SimpleModal from "./components/SimpleModal";


function Docs() {
  return (
    <>
      <DefaultNavbar
        routes={routes}        
        // transparent
        light
      />
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          background: 'linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)',
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        //   placeItems: ""
        }}
      >
        <Container>
          <Grid container item xs={12} lg={10}  mx="auto">
            <Grid container justifyContent='left' alignContent='center' style={{ marginTop: '15%' , color: '#fff'}}>
                <LooksOneIcon fontSize="large" />
                <MKTypography
                ml= {2}
                    color="white"

                    sx={({ breakpoints, typography: { size } }) => ({
                        [breakpoints.down("md")]: {
                        fontSize: size["10xl"],
                        },
                    })}
                    // fontSize= '10xl'
                    variant= "h3"
                    fontFamily="Arial, sans-serif"
                    >
                    What's Dental Smart Seg?
                </MKTypography>

                <MKBox 
                borderRadius="xxl"
                my={3}
                style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    padding: '1%', 
                    
                }}>
                    <MKTypography
                    variant="body1"
                    color="dark"
                    // opacity={0.8}
                    // textAlign="left"
                    px={{ xs: 6, lg: 12 }}
                    mt={1}
                    ml={0}
                    >   
                    <b>Dental Smart Seg</b>  is a cutting-edge solution designed for precise segmentation of dental arcades.
                    Using advanced image processing technology, this application delivers precise and automated segmentation
                    of dental arches from scanned dental images. Dentists can effortlessly employ
                    this tool to isolate and delineate the outlines of individual teeth and the overall dental arch,
                    greatly enhancing the ease of comprehensive treatment planning and analysis.<br/><br/>
                    <b><AccountTreeRoundedIcon /> Segmentation:</b>
                    The segmentation algorithm is based on the famous MeshSegNet Machine Learning model with post processing application for better results.<br/>
                    <br/>
                    <b><ViewInArIcon/> Visualisation:</b>
                    We propose Visualisation of two types of 3d ojects files <b>.obj</b> and <b>.vtp</b> of dental arches.
                    This by using the VTK.JS an open-source JavaScript library that enables 3D data visualization in web browsers.
                    </MKTypography>
            </MKBox>
            </Grid>
            

            <Grid container justifyContent='left' alignContent='center' style={{ marginTop: '2rem' , color: '#fff'}}>
                <LooksTwoIcon fontSize="large" />
                <MKTypography
                ml= {2}
                    color="white"

                    sx={({ breakpoints, typography: { size } }) => ({
                        [breakpoints.down("md")]: {
                        fontSize: size["10xl"],
                        },
                    })}
                    // fontSize= '10xl'
                    variant= "h3"
                    fontFamily="Arial, sans-serif"
                    >
                    How to use Dental Smart Seg?
                </MKTypography>

                <MKBox 
                borderRadius="xxl"
                my={3}
                style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    padding: '1%',
                    
                }}>
                    <MKTypography
                    variant="body1"
                    color="dark"
                    px={{ xs: 6, lg: 12 }}
                    mt={1}
                    ml={0}
                    >            
                    Application offers a user interface that is very easy to handle by offering the features below:
                    <br/><br/><b><a href="/home"><StarsIcon/>Why segment:</a></b>Some  informations about the importance of segmentation.
                    <br/><br/> <b><a href="/pages/docs"> <DescriptionIcon/> The documentation</a> :</b> Partie detailing the functionality of the application.
                    <br/><br/><b><a href="/pages/docs"><PlayCircleFilledWhiteIcon/> Gegin:</a></b> the main part of the application offering the possibility of visualizing and segmenting 3D objects.
                    <br/><br/><b><a href="/pages/docs"><InfoIcon />About Us:</a> </b>Section intended for a description of developers and supervisors.
                    <br/><br/><b><a href="/pages/docs"><ContactsIcon/>Contact Us:</a></b> possibility to ask questions or informations requests related to the application.
                    </MKTypography>
            </MKBox>
            </Grid>


            <Grid container justifyContent='left' alignContent='center' style={{ marginTop: '2rem' , color: '#fff'}}>
                <Looks3Icon fontSize="large" />
                <MKTypography
                    ml= {2}
                    mb= {5}
                    color="white"

                    sx={({ breakpoints, typography: { size } }) => ({
                        [breakpoints.down("md")]: {
                        fontSize: size["10xl"],
                        },
                    })}
                    // fontSize= '10xl'
                    variant= "h3"
                    fontFamily="Arial, sans-serif"
                    >
                    Technologies
                </MKTypography>

                {/* <MKBox 
                borderRadius="xxl"
                my={3}
                style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    padding: '1%',
                    
                }}>
                    <MKTypography
                    variant="body1"
                    color="dark"
                    px={{ xs: 6, lg: 12 }}
                    mt={1}
                    ml={0}
                    >            
                   The app has been developping
                    </MKTypography>
            </MKBox> */}
            <Stack direction="row" spacing={5} style={{marginBottom: '1rem'}}>
                <Tooltip title="ReactJS" placement="top">
                    <img src={reat} alt="react" width='15%' height='50%'/>
                </Tooltip>
                <Tooltip title="VScode" placement="top">
                    <img src={vscode} alt="react" width='15%' height='50%'/>
                </Tooltip>
                <Tooltip title="GitHub" placement="top">
                    <img src={github} alt="react" width='15%' height='50%'/>
                </Tooltip>
                <Tooltip title="Google Colab" placement="top">
                    <img src={colab} alt="react"width='15%' height='50%'/>
                </Tooltip>
                <Tooltip title="NodeJS" placement="top">
                    <img src={node} alt="react"width='15%' height='50%'/>
                </Tooltip>
                
            </Stack>
            <Stack direction="row" spacing={4} style={{marginBottom: '3rem'}}>
                <Tooltip title="FastAPI" placement="top">
                 <img src={fast} alt="react"width='15%' height='50%'/>
                </Tooltip>
                <Tooltip title="PyTorch" placement="top">
                    <img src={pytorch} alt="react"width='15%' height='50%'/>
                </Tooltip>
                <Tooltip title="Paraview" placement="top">
                    <img src={paraview} alt="react"width='15%' height='50%'/>
                </Tooltip>
                <Tooltip title="VTK.JS " placement="top">
                    <img src={vkt} alt="react"width='15%' height='50%'/>
                </Tooltip>
               
                
            </Stack>
            </Grid>

            {/* <MKTypography
              variant="h1"
              color="white"
              textAlign='center'
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
              fontFamily="Arial, sans-serif"
              style={{ marginTop: '10rem' }}
            >
              Welcome to Dental Smart Seg<br/>
              your intelligent solution for precise dental arcade segmentation {" "}
            </MKTypography> */}
            {/* <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >            
              With advanced image processing technology, 
              the app offers accurate and automated segmentation of dental arches from radiographic or 
              scanned dental images. Dental professionals can seamlessly utilize this tool to isolate 
              and define the contours of individual teeth and the overall dental arch, facilitating
               comprehensive treatment planning and analysis.
            </MKTypography> */}
          </Grid>

          {/* <Grid item style={{ marginTop: '5rem', alignItems:'center' }}>
                <SimpleModal/>
          </Grid> */}
        </Container>

       
      </MKBox>
     

      {/* Footer */}
      <MKBox pt={0} px={1}  sx={{ background: "rgba(0, 0, 0)" }}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Docs;

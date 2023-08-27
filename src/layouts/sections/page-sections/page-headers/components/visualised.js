

import { useState, useEffect } from "react";

// prop-types is a library for type checking of props
import PropTypes from "prop-types";

// react-copy-to-clipboard components
import { CopyToClipboard } from "react-copy-to-clipboard";

// react-syntax-highlighter components
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Slide from "@mui/material/Slide";
import Icon from "@mui/material/Icon";

import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAlert from "components/MKAlert";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";
import axios from "axios";
// // Images
// import initial from "./../../../../../assets/images/initial.png"
import '@kitware/vtk.js/Rendering/Profiles/Geometry'
import vtkActor           from '@kitware/vtk.js/Rendering/Core/Actor';
import vtkMapper          from '@kitware/vtk.js/Rendering/Core/Mapper';
import vtkXMLPolyDataReader from '@kitware/vtk.js/IO/XML/XMLPolyDataReader';
import vtkRenderWindowInteractor from '@kitware/vtk.js/Rendering/Core/RenderWindowInteractor'
import vtkRenderWindow from '@kitware/vtk.js/Rendering/Core/RenderWindow'
import vtkInteractorStyleTrackballCamera from '@kitware/vtk.js/Interaction/Style/InteractorStyleTrackballCamera'
import vtkRenderer from '@kitware/vtk.js/Rendering/Core/Renderer'
import vtkRenderWindowGL from '@kitware/vtk.js/Rendering/OpenGL/RenderWindow'

function Visualized({height,uploadedFile,activeReload , ...rest }) {
  const { grey } = colors;

  const [activeTab, setActiveTab] = useState(0);
  const [success, setSuccess] = useState(false);
  const [currentFile, setCurrentFile] = useState(uploadedFile);
  const handleTabType = (event, newValue) => setActiveTab(newValue);

  const visualizeObj = (fileUrl) => {
    // Select the container element
    const container = document.querySelector('#vtkContainer');

    // VTK renderWindow/renderer
    const renderWindow = vtkRenderWindow.newInstance();
    const renderer = vtkRenderer.newInstance();
    renderWindow.addRenderer(renderer);

    // WebGL/OpenGL impl
    const openGLRenderWindow = vtkRenderWindowGL.newInstance();
    openGLRenderWindow.setContainer(container);
    openGLRenderWindow.setSize(1000, 1000);
    renderWindow.addView(openGLRenderWindow);

    // Interactor
    const interactor = vtkRenderWindowInteractor.newInstance();
    interactor.setView(openGLRenderWindow);
    interactor.initialize();
    interactor.bindEvents(container);

    // Interactor style
    const trackball = vtkInteractorStyleTrackballCamera.newInstance();
    interactor.setInteractorStyle(trackball);

    // Pipeline to read VTP file
    const reader = vtkXMLPolyDataReader.newInstance();
    const mapper = vtkMapper.newInstance();
    const actor = vtkActor.newInstance();

    // Load VTP file
    const vtkFileURL = fileUrl;
    console.log("in the visualiation : ", vtkFileURL);
    reader.setUrl(vtkFileURL);
    reader.loadData().then(() => {
      mapper.setInputData(reader.getOutputData());
      actor.setMapper(mapper);
      renderer.addActor(actor);

      actor.getProperty().setRepresentationToSurface();

      // Render
      renderer.resetCamera();
      renderWindow.render();

    });
}

  useEffect(() => {
    setTimeout(() => setSuccess(false), 3000);
    visualizeObj(currentFile);
  }, [success , currentFile]);

  const handlePrediction = () => {
    console.log('Predicting...'); // Log the predicting message
  
    const formData = { 'url': uploadedFile }; 
  
    axios
      .post('http://127.0.0.1:8000/api/segment', formData)                    
      .then(response => {
        console.log('File Url sent successfully', response.data.path);
        setCurrentFile(response.data.path);        
      })
      .catch(error => {
          console.log('Error predicting:', error)
      });
  };
    
  // const handlePrediction = async () => {
  //   const formData = { 'url': currentFile };

  //   try {
  //     const response = await axios.post('http://localhost:8000/api/segment', formData);
  //     console.log('File Url sent successfully', response.data.path);
  //     setCurrentFile(response.data.path); // Update 'currentFile' in state
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };
  

  return (
    <MKBox
      width="100%"
      position="relative"
      borderRadius="xl"
      shadow="lg"
      mb={12}
      sx={{ overflow: "hidden" }}
      {...rest}
    >
     

      <MKBox display={activeTab === 0 ? "block" : "none"}>
        <MKBox width="100%" p={3}>
          <MKBox
            bgColor="grey-100"
            width="100%"
            height={height}
            maxHeight="40rem"
            borderRadius="xl"
            // sx={{ overflowX: "scroll", overflowY: "scroll" }}
            style={{ paddingLeft: '10%' }}
          >
           <Grid
                container
                direction="row" // Change direction to "row"
                justifyContent="space-between" // Align items on the left and right
                alignItems="center" // Center vertically
                spacing={5}
                style={{ marginTop: '0.1rem' }}
            >
                <Grid item xs={12} lg={6} >
                <div id="vtkContainer" style={{ width: '100%'}}></div>
                </Grid>
                <Grid item xs={12} lg={4} container direction="column" justifyContent="center" alignItems="flex-start" style={{ paddingLeft: '10%' }}>
                <MKButton size="large" sx={{
                        backgroundImage: 'linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)',
                        color: '#ffffff', // Text color
                        mb: 5, // Margin bottom                       
                    }}
                    onClick={() => activeReload(true)}>
                    <FileUploadRoundedIcon sx={{ mr: 4 }}/>
                    Upload
                </MKButton>
                <MKButton color="info" size="large" sx={{ backgroundImage: 'linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)',
                        color: '#ffffff', // Text color
                        mb: 5, // Margin bottom
                    }}
                    
                    onClick={handlePrediction}

                    >
                    <AccountTreeRoundedIcon sx={{ mr: 3 }}/>
                    Segment
                </MKButton>
                <MKButton color="info" size="large" sx={{backgroundImage: 'linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)',
                        color: '#ffffff', // Text color
                        mb: 5, // Margin bottom
                        }}
                        
                    >
                    <DownloadForOfflineRoundedIcon sx={{ mr: 2 }}/>
                    <a style={{ color: 'inherit' }} href={uploadedFile} >Download</a>
                </MKButton>
                </Grid>
            </Grid>
          </MKBox>
        </MKBox>
      </MKBox>
      
    </MKBox>
  );
}

// Setting default props for the Visualized
Visualized.defaultProps = {
  height: "auto",
};

// Typechecking props for the Visualized
Visualized.propTypes = {
//   children: PropTypes.node.isRequired,
//   code: PropTypes.node.isRequired,
//   title: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default Visualized;

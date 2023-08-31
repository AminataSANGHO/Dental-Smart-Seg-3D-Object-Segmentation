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

import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import ReplyIcon from '@mui/icons-material/Reply';

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
import "@kitware/vtk.js/Rendering/Profiles/Geometry";
import vtkActor from "@kitware/vtk.js/Rendering/Core/Actor";
import vtkMapper from "@kitware/vtk.js/Rendering/Core/Mapper";
import vtkXMLPolyDataReader from "@kitware/vtk.js/IO/XML/XMLPolyDataReader";
import vtkOBJReader from "@kitware/vtk.js/IO/Misc/OBJReader";

import vtkRenderWindowInteractor from "@kitware/vtk.js/Rendering/Core/RenderWindowInteractor";
import vtkRenderWindow from "@kitware/vtk.js/Rendering/Core/RenderWindow";
import vtkInteractorStyleTrackballCamera from "@kitware/vtk.js/Interaction/Style/InteractorStyleTrackballCamera";
import vtkRenderer from "@kitware/vtk.js/Rendering/Core/Renderer";
import vtkRenderWindowGL from "@kitware/vtk.js/Rendering/OpenGL/RenderWindow";

import vtkFullScreenRenderWindow from "@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow";
import vtkColorTransferFunction from "@kitware/vtk.js/Rendering/Core/ColorTransferFunction";
import vtkAxesActor from "@kitware/vtk.js/Rendering/Core/AxesActor";
import vtkOrientationMarkerWidget from "@kitware/vtk.js/Interaction/Widgets/OrientationMarkerWidget";

// import display from "./display"
// import ThreeScene from "./display";
// import VTKViewer from "./myVTK";

function Visualized({ height, uploadedFile, activeBack, predit,  ...rest }) {
  const { grey } = colors;

  const [activeTab, setActiveTab] = useState(0);
  const [success, setSuccess] = useState(false);
  const handleTabType = (event, newValue) => setActiveTab(newValue);
  const [currObj, setCurrObj] = useState(uploadedFile);
  const [currLabel, setCurrLabel] = useState("");

  console.log(currObj, currLabel);

  const loadVTPTest = (objData, label) => {
    const blob = new Blob([objData], { type: "text/xml" });
    const vtpFilePath = URL.createObjectURL(blob);

    if (label === "") {
      // const parts = objData.name.split(".");
      // const extension = parts[parts.length - 1];
      // if (extension === "obj")

      const vtkRenderScreen = vtkFullScreenRenderWindow.newInstance({
        container: document.querySelector("#vtkContainer"),
        background: [0, 0, 0],
      });

      const reader = vtkXMLPolyDataReader.newInstance();
      reader.setUrl(vtpFilePath);

      reader.loadData().then(() => {
        // Create mapper and actor
        const mapper = vtkMapper.newInstance();
        mapper.setInputData(reader.getOutputData());

        const actor = vtkActor.newInstance();
        actor.setMapper(mapper);

        // create orientation widget
        const axes = vtkAxesActor.newInstance();
        const orientationWidget = vtkOrientationMarkerWidget.newInstance({
          actor: axes,
          interactor: vtkRenderScreen.getRenderWindow().getInteractor(),
        });
        orientationWidget.setEnabled(true);
        orientationWidget.setViewportCorner(vtkOrientationMarkerWidget.Corners.BOTTOM_RIGHT);

        orientationWidget.setViewportSize(0.15);
        orientationWidget.setMinPixelSize(100);
        orientationWidget.setMaxPixelSize(300);

        vtkRenderScreen.getRenderer().addActor(actor);
        vtkRenderScreen.getRenderer().resetCamera();

        //Start rendering
        vtkRenderScreen.getRenderWindow().render();
      });

      return;
    }

    const vtkRenderScreen = vtkFullScreenRenderWindow.newInstance({
      container: document.querySelector("#vtkContainer"),
      background: [0, 0, 0],
    });

    // Create a VTP reader
    const reader = vtkXMLPolyDataReader.newInstance();
    // reader.parseAsArrayBuffer(objData);
    reader.setUrl(vtpFilePath);

    reader.loadData().then(() => {
      // Get the VTP output data
      const vtpOutput = reader.getOutputData();

      // Get the materialid array from the VTP data
      // const materialidArray = vtpOutput.getCellData().getArrayByName('MaterialIds');
      const materialidArray = vtpOutput.getCellData().getArrayByName(label);

      // console.log(vtpOutput.getCellData())
      // console.log(vtpOutput.getCellData().getArrayByName("MaterialIds").getData())
      // console.log(vtpOutput.getPointData().getNormals().getElementComponentSize())

      // Map scalar array through the lookup table
      materialidArray.setName("Scalars"); // Make sure the array has a name
      vtpOutput.getCellData().setScalars(materialidArray);

      console.log("materialidArray.getData(): ", materialidArray.getData());

      // Create a color transfer function
      const colorTransferFunction = vtkColorTransferFunction.newInstance();

      // Create colors for 15 different classes (you can adjust these)
      const classColors = [
        [0.839, 0.153, 0.157], // Red
        [0.121, 0.466, 0.705], // Blue
        [0.172, 0.627, 0.172], // Green
        [0.58, 0.404, 0.741], // Purple
        [1.0, 0.498, 0.054], // Orange
        [0.89, 0.467, 0.761], // Pink
        [0.498, 0.498, 0.498], // Gray
        [0.737, 0.741, 0.133], // Yellow
        [0.09, 0.745, 0.811], // Teal
        [0.682, 0.78, 0.909], // Light Blue
        [0.09, 0.745, 0.172], // Bright Green
        [0.831, 0.607, 0.101], // Gold
        [0.647, 0.38, 0.094], // Brown
        [0.596, 0.306, 0.639], // Dark Purple
        [0.18, 0.18, 0.18], // Dark Gray
      ];

      // Assign colors to unique materialids
      // if(materialidArray.getData()){
      // }else{
      //     console.log("materialidArray is null")
      // }

      const uniqueMaterialIds = new Set(materialidArray.getData());
      const numColors = classColors.length;

      uniqueMaterialIds.forEach((materialid, index) => {
        // Normalize the index based on the unique material IDs
        const normalizedIndex = index / (uniqueMaterialIds.size - 1);

        // Calculate the color index and wrap around within the valid range
        const colorIndex = Math.floor(normalizedIndex * numColors) % numColors;

        const color = classColors[colorIndex];
        colorTransferFunction.addRGBPoint(materialid, color[0], color[1], color[2]);
      });

      // Apply symmetric colorization

      // Create mapper and actor
      const mapper = vtkMapper.newInstance();
      mapper.setInputData(reader.getOutputData());
      mapper.setLookupTable(colorTransferFunction);

      mapper.setUseLookupTableScalarRange(true); // Ensure correct scalar range

      // Map scalars through the lookup table
      mapper.setScalarModeToUseCellData();
      mapper.setScalarVisibility(true);

      mapper.setColorModeToMapScalars(); // Map colors based on the materialid values

      const actor = vtkActor.newInstance();
      actor.setMapper(mapper);

      // create orientation widget
      const axes = vtkAxesActor.newInstance();
      const orientationWidget = vtkOrientationMarkerWidget.newInstance({
        actor: axes,
        interactor: vtkRenderScreen.getRenderWindow().getInteractor(),
      });
      orientationWidget.setEnabled(true);
      orientationWidget.setViewportCorner(vtkOrientationMarkerWidget.Corners.BOTTOM_RIGHT);

      orientationWidget.setViewportSize(0.15);
      orientationWidget.setMinPixelSize(100);
      orientationWidget.setMaxPixelSize(300);

      vtkRenderScreen.getRenderer().addActor(actor);
      vtkRenderScreen.getRenderer().resetCamera();

      //Start rendering
      vtkRenderScreen.getRenderWindow().render();
    });
  };

  useEffect(() => {
    loadVTPTest(currObj, currLabel);
  }, [currObj, currLabel]);

  // const handleFileUpload = async () => {
  //   document.querySelector("#vtkContainer").innerHTML = "Segmenting...";

  //   console.log("Segmenting...");

  //   const formData = new FormData();
  //   formData.append("file", currObj);

  //     await axios
  //     .post("http://localhost:8000/api/v1/predict/post_processing", formData)
  //     .then((response) => {
  //       console.log("Response ", response);
  //       if (response) {
  //         document.querySelector("#vtkContainer").innerHTML = "";
  //         setCurrObj(response.data.prediction_file);
  //         setCurrLabel("Label");
  //       }
  //     })
  //     .catch((err) => {
  //       document.querySelector("#vtkContainer").innerHTML = " ";
  //       alert("Segmentation failed try again");
  //       console.log("Error ", err)
  //     });

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
      <Grid container justifyContent="right" // Center vertically
                            alignItems="center">
                  <MKButton
                        size="large"
                        sx={{
                          backgroundImage:
                            "linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)",
                          color: "#ffffff", // Text color
                          mr: 5, // Margin bottom
                        }}
                        onClick={() => activeBack(true)}
                      >
                        <ReplyIcon sx={{ mr: 4 }} />
                        Return
                  </MKButton>
                  <MKButton
                        size="large"
                        sx={{
                          backgroundImage:
                            "linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)",
                          color: "#ffffff", // Text color
                          mr: 3, // Margin bottom
                        }}
                        onClick={() => activeReload(true)}
                      >
                        <DownloadForOfflineRoundedIcon sx={{ mr: 3 }} />
                        Download
                  </MKButton>
             </Grid>
      <MKBox display={activeTab === 0 ? "block" : "none"}>
       

          <MKBox width="100%" p={3}>
            <MKBox
              bgColor="grey-100"
              width="100%"
              height={height}
              maxHeight="40rem"
              borderRadius="xl"
              sx={{ 
                // overflowX: "scroll", overflowY: "scroll",
               display: "flex", alignItems: "center", justifyContent: "center" }}
               id="vtkContainer"
            >
              
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

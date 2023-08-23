import React, { useEffect, useRef } from 'react';
import vtk from 'vtk.js';

const VTKViewer = ({ vtkFileURL }) => {
  const containerRef = useRef();

  useEffect(() => {
    let renderWindow, renderer, openGLRenderWindow, interactor, trackball;
    const reader = vtk.IO.XML.vtkXMLPolyDataReader.newInstance();
    const mapper = vtk.Rendering.Core.vtkMapper.newInstance();
    const actor = vtk.Rendering.Core.vtkActor.newInstance();

    // VTK renderWindow/renderer
    renderWindow = vtk.Rendering.Core.vtkRenderWindow.newInstance();
    renderer = vtk.Rendering.Core.vtkRenderer.newInstance();
    renderWindow.addRenderer(renderer);

    // WebGL/OpenGL impl
    openGLRenderWindow = vtk.Rendering.OpenGL.vtkRenderWindow.newInstance();
    openGLRenderWindow.setContainer(containerRef.current);
    openGLRenderWindow.setSize(1000, 1000);
    renderWindow.addView(openGLRenderWindow);

    // Interactor
    interactor = vtk.Rendering.Core.vtkRenderWindowInteractor.newInstance();
    interactor.setView(openGLRenderWindow);
    interactor.initialize();
    interactor.bindEvents(containerRef.current);

    // Interactor style
    trackball = vtk.Interaction.Style.vtkInteractorStyleTrackballCamera.newInstance();
    interactor.setInteractorStyle(trackball);

    // Load VTP file
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

    return () => {
      // Clean up on unmount
      if (openGLRenderWindow) {
        openGLRenderWindow.delete();
      }
      if (renderWindow) {
        renderWindow.delete();
      }
      if (interactor) {
        interactor.delete();
      }
      if (trackball) {
        trackball.delete();
      }
      if (reader) {
        reader.delete();
      }
      if (mapper) {
        mapper.delete();
      }
      if (actor) {
        actor.delete();
      }
    };
  }, [vtkFileURL]);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default VTKViewer;

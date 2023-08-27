// import React, { useEffect } from 'react';
// import * as THREE from 'three';
// import Stats from 'three/addons/libs/stats.module.js';
// import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
// import { VTKLoader } from 'three/addons/loaders/VTKLoader.js';

// let stats;
// let camera, controls, scene, renderer;

// init();
// animate();

// function init() {

// 	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 100 );
// 	camera.position.z = 0.2;

// 	scene = new THREE.Scene();

// 	scene.add( camera );

// 	// light

// 	const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x000000, 3 );
// 	scene.add( hemiLight );

// 	const dirLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
// 	dirLight.position.set( 2, 2, 2 );
// 	scene.add( dirLight );

// 	// const loader = new VTKLoader();
// 	// loader.load( 'outputs/input1.vtp', function ( geometry ) {

// 	// 	geometry.center();
// 	// 	geometry.computeVertexNormals();

// 	// 	const material = new THREE.MeshLambertMaterial();
// 	// 	const mesh = new THREE.Mesh( geometry, material );
// 	// 	mesh.position.set( - 0.075, 0.005, 0 );
// 	// 	mesh.scale.multiplyScalar( 0.2 );
// 	// 	scene.add( mesh );

// 	// }, undefined, function (error) {
// 	// 	// This function is called if there is an error while loading
// 	// 	console.log('Error loading VTP file:', error);
// 	// });

// 	// const loader = new VTKLoader();
// 	// loader.load( './outputs/final_segmented_2023_08_11_11_39_26.vtp', function ( geometry ) {

// 	// 	geometry.computeVertexNormals();
// 	// 	geometry.center();

// 	// 	const material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
// 	// 	const mesh = new THREE.Mesh( geometry, material );
// 	// 	mesh.position.set( - 0.025, 0, 0 );
// 	// 	mesh.scale.multiplyScalar( 0.01 );
// 	// 	scene.add( mesh );

// 	// } );

// 	const loader = new VTKLoader();
// 	loader.load( './outputs/file.vtp', function ( geometry ) {

// 		geometry.computeVertexNormals();
// 		geometry.center();

// 		const material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
// 		const mesh = new THREE.Mesh( geometry, material );
// 		mesh.position.set( - 0.025, 0, 0 );
// 		mesh.scale.multiplyScalar( 0.01 );
// 		scene.add( mesh );

// 	} );

// 	// renderer

// 	renderer = new THREE.WebGLRenderer( { antialias: true } );
// 	renderer.setPixelRatio( window.devicePixelRatio );
// 	renderer.setSize( window.innerWidth, window.innerHeight );
// 	document.body.appendChild( renderer.domElement );

// 	// controls

// 	controls = new TrackballControls( camera, renderer.domElement );
// 	controls.minDistance = .1;
// 	controls.maxDistance = 0.5;
// 	controls.rotateSpeed = 5.0;

// 	stats = new Stats();
// 	document.body.appendChild( stats.dom );

// 	//

// 	window.addEventListener( 'resize', onWindowResize );

// }

// function onWindowResize() {

// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	camera.updateProjectionMatrix();

// 	renderer.setSize( window.innerWidth, window.innerHeight );

// 	controls.handleResize();

// }

// function animate() {

// 	requestAnimationFrame( animate );

// 	controls.update();

// 	renderer.render( scene, camera );

// 	stats.update();

// }


import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { VTKLoader } from 'three/examples/jsm/loaders/VTKLoader';
import Stats from 'three/addons/libs/stats.module.js';

const ThreeScene = ({ filePath }) => {
  const containerRef = useRef();

  useEffect(() => {
    let stats;
    let camera, controls, scene, renderer;

    const init = () => {
        
            camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 100 );
            camera.position.z = 0.2;

            scene = new THREE.Scene();

            scene.add( camera );

            // light

            const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x000000, 3 );
            scene.add( hemiLight );

            const dirLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
            dirLight.position.set( 2, 2, 2 );
            scene.add( dirLight );

            const loader = new VTKLoader();
            loader.load( filePath, function ( geometry ) {

                geometry.computeVertexNormals();
                geometry.center();

                const material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
                const mesh = new THREE.Mesh( geometry, material );
                mesh.position.set( - 0.025, 0, 0 );
                mesh.scale.multiplyScalar( 0.01 );
                scene.add( mesh );

            } );

            // renderer

            renderer = new THREE.WebGLRenderer( { antialias: true } );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );

            // controls

            controls = new TrackballControls( camera, renderer.domElement );
            controls.minDistance = .1;
            controls.maxDistance = 0.5;
            controls.rotateSpeed = 5.0;

            stats = new Stats();
            document.body.appendChild( stats.dom );

            //

            window.addEventListener( 'resize', onWindowResize );
    };

    const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        controls.handleResize();
    }
    const animate = () => {
        requestAnimationFrame( animate );

        controls.update();
    
        renderer.render( scene, camera );
    
        stats.update();
    };

    init();
    animate();
  }, [filePath]);

  return (
    <div ref={containerRef} style={{ width: '100vw', height: '100vh' }}></div>
  );
};

export default ThreeScene;

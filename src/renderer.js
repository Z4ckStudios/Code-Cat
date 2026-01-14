import * as THREE from "./three.module.js";
import { TrackballControls } from "./TrackballControls.js";
import { CSS3DRenderer, CSS3DObject } from './CSS3DRenderer.js';

const camNum = 75;
let widthDivHeight = window.innerWidth / window.innerHeight;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(camNum, widthDivHeight);
camera.position.set(0, 0, 25);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bg"),
  alpha: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

const css3dRenderer = new CSS3DRenderer();
css3dRenderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("bgcssContainer").appendChild(css3dRenderer.domElement);

const css3dRenderer1 = new CSS3DRenderer();
css3dRenderer1.setSize(window.innerWidth, window.innerHeight);
document.getElementById("bgcssContainer1").appendChild(css3dRenderer1.domElement);

const spheregeometry = new THREE.SphereGeometry(100, 100, 0, 0)
const spherematerial = new THREE.MeshBasicMaterial({color:0xFF0000, wireframe: true});
const sphere = new THREE.Mesh(spheregeometry, spherematerial);
sphere.scale.set(5, 5, 5);

sphere.rotateX(80.11);

scene.add(sphere);

var CSSOS = 0.5;

const bgcssDiv = document.getElementById("bgcss");
const cssObject = new CSS3DObject(bgcssDiv);
cssObject.position.set(0, 0, -150);
cssObject.rotation.set(0, 0, 0);
cssObject.scale.set(CSSOS, CSSOS, CSSOS);

const bgcssDiv1 = document.getElementById("bgcss1");
const cssObject1 = new CSS3DObject(bgcssDiv1);
cssObject1.position.set(0, 0, 150);
cssObject1.rotation.set(0, 135, 0);
cssObject1.scale.set(CSSOS, CSSOS, CSSOS);

scene.add(cssObject);
scene.add(cssObject1);

const controls = new TrackballControls(camera, renderer.domElement);
controls.noPan = true;
controls.noZoom = true;
controls.rotateSpeed = 1;
controls.dynamicDampingFactor = 0.05;

const controls1 = new TrackballControls(camera, css3dRenderer.domElement);
controls1.noPan = true;
controls1.noZoom = true;
controls1.rotateSpeed = 1;
controls1.dynamicDampingFactor = 0.05;

// var incrementValue = 0.01;

function animate() {
  requestAnimationFrame(animate);

  // document.addEventListener("keydown",
  // function(e) {
  //   if(e.code == "KeyW") {\
  //     cssObject.position.setZ(cssObject.position.z += incrementValue);
  //     cssObject1.position.setZ(cssObject1.position.z += incrementValue);
  //   }
  //   if(e.code == "KeyS") {
  //     cssObject.position.setZ(cssObject.position.z -= incrementValue);
  //     cssObject1.position.setZ(cssObject1.position.z -= incrementValue);
  //   }
  // })

  controls.update();
  controls1.update();
  renderer.render(scene, camera);
  css3dRenderer.render(scene, camera);
}

animate();
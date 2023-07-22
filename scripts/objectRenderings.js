import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";

// Get the parent div's dimensions
const parentDiv = document.getElementById('steering_wheel');
const parentWidth = parentDiv.clientWidth;
const parentHeight = parentDiv.clientHeight;

// Set the renderer size to match the parent div's dimensions and enable transparency
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(parentWidth, parentHeight);
parentDiv.appendChild(renderer.domElement);

const cameraMin = 0.0001;

const aspect = parentWidth / parentHeight;
const camera = new THREE.PerspectiveCamera(75, aspect, cameraMin, 1000);
const controls = new OrbitControls(camera, renderer.domElement);

const scene = new THREE.Scene();

camera.position.z = 5;

const cube = new THREE.Mesh(
  new THREE.BoxBufferGeometry(),
  new THREE.MeshNormalMaterial()
);

const spotLight1 = new THREE.SpotLight(0xffffff);
const spotLight2 = new THREE.SpotLight(0xffffff);
const spotLight3 = new THREE.SpotLight(0xffffff);
const spotLight4 = new THREE.SpotLight(0xffffff);

spotLight1.position.set(0, 0, -5);
spotLight2.position.set(0, 0, 5);
spotLight3.position.set(5, 5, 5);
spotLight4.position.set(-5, -5, -5);

scene.add(spotLight1);
scene.add(spotLight2);
scene.add(spotLight3);
scene.add(spotLight4);

const loader = new GLTFLoader();

loader.load('assets/models/cop.glb', (gltf) => {
  scene.add(gltf.scene);
});

(function animate() {
  requestAnimationFrame(animate);

  // Get the updated parent div's dimensions
  const updatedParentWidth = parentDiv.clientWidth;
  const updatedParentHeight = parentDiv.clientHeight;

  // Check if the size has changed
  if (parentWidth !== updatedParentWidth || parentHeight !== updatedParentHeight) {
    // Update renderer size and camera aspect ratio
    renderer.setSize(updatedParentWidth, updatedParentHeight);
    camera.aspect = updatedParentWidth / updatedParentHeight;
    camera.updateProjectionMatrix();

    // Update parent dimensions
    parentWidth = updatedParentWidth;
    parentHeight = updatedParentHeight;
  }

  controls.update();

  // Clear the scene with an alpha value to make the background transparent
  renderer.setClearAlpha(0);
  renderer.render(scene, camera);
})();
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const renderer = new THREE.WebGLRenderer;

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  500
);

const orbit = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

camera.position.set(1,2,7);
orbit.update();

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color:0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);

scene.add(box);

// box.rotation.set(4,3,2);
function animate (time) {
  box.rotation.x += time / 1000;
  box.rotation.y += time / 1000;
  box.position.x += time / 5000;
  renderer.render(scene, camera);
};

renderer.setAnimationLoop(animate);

renderer.render(scene, camera);

 
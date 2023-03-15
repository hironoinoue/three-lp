import './style.css'
import * as THREE from "three";
/*get canvas*/
const canvas = document.querySelector(".webgl");

/**
 * scene,renderer,camera
 */

/*scene*/
const scene = new THREE.Scene();
/*canvas*/
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
/*camera*/
const camera = new THREE.PerspectiveCamera(
  35, 
  sizes.width / sizes.height, 
  0.1, 
  100
);
camera.position.z = 6;/*camera position*/
scene.add(camera);
/*renderer*/
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
/*renderer size */
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.render(scene,camera);

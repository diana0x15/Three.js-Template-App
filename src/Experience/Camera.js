import Experience from "./Experience.js";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

/**
 * Custom Perspective Camera.
 */
export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    this.setInstance();
    this.setOrbitControls();
  }

  /**
   * Instantiate the camera.
   */
  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      /* fov= */ 45,
      /* aspect= */ this.sizes.width / this.sizes.height,
      /* near= */ 0.1,
      /* far= */ 100
    );

    this.instance.position.set(6, 4, 8);
    this.scene.add(this.instance);
  }

  /**
   * Set up orbit controls to allow the camera to orbit around the * scene.
   */
  setOrbitControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);

    // Enable damping (i.e. inertia). This gives a sense of weight to the
    // controls and some more text here.
    this.controls.enableDamping = true;
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;

    // Apply camera changes.
    this.instance.updateProjectionMatrix();
  }

  update() {
    this.controls.update();
  }
}

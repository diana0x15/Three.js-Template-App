import Experience from "../Experience.js";
import * as THREE from "three";

export default class World {
  constructor() {
    this.experience = new Experience();

    // Test cube.
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({
        wireframe: true,
      })
    );
    this.experience.scene.add(cube);
  }
}

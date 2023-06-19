import { SIZES_UPDATE_EVENT, TIME_TICK_EVENT } from "./Events.js";

/**
 * Util class for handling viewport size.
 */
export class Sizes {
  constructor() {
    this.getSizes();

    window.addEventListener("resize", () => {
      this.getSizes();
    });
  }

  getSizes() {
    // The world takes the full viewport.
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    // Trigger sizes event.
    document.dispatchEvent(new Event(SIZES_UPDATE_EVENT));
  }
}

/**
 * Util class for handling time.
 */
export class Time {
  constructor() {
    // App start time.
    this.start = Date.now();

    // Current time.
    this.currentTime = this.start;

    // Start the animation loop.
    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  tick() {
    // Compute time.
    this.now = Date.now();
    this.delta = this.now - this.currentTime;
    this.currentTime = this.now;
    this.elapsedTime = this.currentTime - this.start;

    // Trigger a tick event.
    document.dispatchEvent(new Event(TIME_TICK_EVENT));

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
}

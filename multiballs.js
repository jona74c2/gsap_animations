"use strict";

console.log("Script running");

gsap.to(".ball", { duration: 2, x: 400, rotate: "200deg", stagger: 0.2, ease: "bounce" });

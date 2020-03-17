"use strict";
import { gsap } from "gsap";

console.log("Script running");

const ball = document.querySelector(".ball");
const spike = document.querySelector(".spike");

const tl = gsap.timeline();

tl.to(ball, { duration: 2, x: 365, rotate: "200deg" });
tl.to(spike, { duration: 1, y: -30 });
tl.to(ball, { duration: 2, scale: 0.1, y: "2.3vw" });

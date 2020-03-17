"use strict";

console.log(window.innerHeight);
console.log("innerHeight");

const ball = document.querySelector(".ball");
const spike = document.querySelector(".spike");
const innerHeight = window.innerHeight;
const tl = gsap.timeline();

tl.to(ball, { duration: 2, x: 365, rotate: "200deg" });
tl.to(spike, { duration: 1, y: -30 });
tl.to(ball, { duration: 2, scale: 0, y: -innerHeight, x: 0 });

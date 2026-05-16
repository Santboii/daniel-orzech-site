"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload("/images/hero.jpg", { as: "image" });
  ReactDOM.preconnect("https://formspree.io");
  return null;
}

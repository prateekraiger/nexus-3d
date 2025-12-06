import React from "react";
import Scene from "./components/Scene";
import Background from "./components/layout/Background";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="relative w-full h-screen bg-neutral-950 overflow-hidden text-white selection:bg-nexus-accent/30">
      <Background />
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
      <Header />
      <Footer />
    </div>
  );
}

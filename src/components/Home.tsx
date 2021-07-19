import React, { useState, useRef, useEffect } from "react";
import Hero from "./Hero";
import Events from "./Events";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Home = () => {
  return (
    <main>
      <div className="container">
        <Hero />
      </div>
      <Events />
    </main>
  );
};

export default Home;

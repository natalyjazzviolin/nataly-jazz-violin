import React, { useState, useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import BackgroundImage from "gatsby-background-image";

const Hero = () => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "hero.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 490, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "hero.jpeg" }) {
          childImageSharp {
            fixed(width: 2000) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  // Set ImageData.
  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fixed,
      media: `(min-width: 491px)`,
    },
  ];

  return (
    <div className="hero">
      <BackgroundImage id="bgImg" Tag="section" fluid={sources}>
        <h2>
          <mark>
            Photo courtesy of &nbsp;
            <a href="https://www.margotschulman.com/" target="a_blank">
              Margot Schulman
            </a>
          </mark>
        </h2>
      </BackgroundImage>
      <div className="bio">
        <p>
          <span>Jazz violinist</span>, <span>orchestra musician</span>, and{" "}
          <span>educator</span> - Nataly brings her beautiful classical tone to
          the world of hot jazz and swing.
        </p>
      </div>
    </div>
  );
};

export default Hero;

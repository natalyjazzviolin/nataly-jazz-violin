import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = () => {
  const [isActive, setActive] = useState<boolean>(false);
  const node = useRef<any>();

  //Handle click event
  useEffect(() => {
    document.addEventListener("click", handleEvent);

    return () => {
      document.removeEventListener("click", handleEvent);
    };
  }, []);

  //Toggle menu button
  const toggleMenu = () => {
    setActive(!isActive);
  };

  //Handle clicks outside the menu button
  const handleEvent = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    console.log("Clicked outside");
    setActive(isActive);
  };

  return (
    <header>
      <nav className="nav" aria-label="Main Menu">
        <ul className="nav__list">
          <li className="nav__list-item title">
            <AnchorLink to="#">
              Nataly <span>Merezhuk</span>
            </AnchorLink>
          </li>
          <li className="nav__list-item">
            <AnchorLink to="#events">Events</AnchorLink>
          </li>
          <li className="nav__list-item">
            <AnchorLink to="#">Listen</AnchorLink>
          </li>
          <li className="nav__list-item">
            <AnchorLink to="#">Learn</AnchorLink>
          </li>
          <li className="nav__list-item">
            <AnchorLink to="#">Contact</AnchorLink>
          </li>
          <li className="nav__list-item">
            <button
              id="nav__toggle"
              aria-expanded="false"
              aria-controls="nav-menu-ex-1"
              aria-label="Menu"
              onClick={toggleMenu}
              className={`${isActive ? "open" : ""}`}
              ref={node}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </li>
          <li className="nav__list-item">
            <ul className={`mobilenav ${isActive ? "open" : ""}`}>
              <li className="mobilenav-item">
                <AnchorLink to="#events">Events</AnchorLink>
              </li>
              <li className="mobilenav-item">
                <AnchorLink to="#">Listen</AnchorLink>
              </li>
              <li className="mobilenav-item">
                <AnchorLink to="#">Learn</AnchorLink>
              </li>
              <li className="mobilenav-item">
                <AnchorLink to="#">Contact</AnchorLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

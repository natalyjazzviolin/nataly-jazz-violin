import React, { useState, useRef, useEffect } from "react";
import Hero from "./Hero";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Events = () => {
  return (
    <div className="event" id="events">
      <h2>Upcoming Events</h2>
      <ul className="event__list">
        <li className="event__list-item">
          <h3>Private Event</h3>
          <div className="details">
            <p>July 26 2021</p>
            <button>RSVP</button>
          </div>
        </li>
        <li className="event__list-item"></li>
        <li className="event__list-item"></li>
        <li className="event__list-item"></li>
        <li className="event__list-item"></li>
      </ul>
    </div>
  );
};

export default Events;

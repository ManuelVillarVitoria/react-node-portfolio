import React from "react";
import Buttons from "../../utilities/Buttons/Buttons";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import { SCREEN_CONSTANTS } from "./data";
import './AboutMeView.css'

const AboutMeView = ({ renderHighlight }) => {
  return (
    <div className="about-me-parent">
      <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
      <div className="about-me-card">
        <div className="about-me-profile"></div>
        <div className="about-me-details">
          <span className="about-me-description">
            {SCREEN_CONSTANTS.description}
          </span>
          <div className="about-me-highlights">
            <div className="about-me-heading">
              <span>{SCREEN_CONSTANTS.highlights.heading}</span>
            </div>
            {renderHighlight}
          </div>
          <div className="about-me-options">
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeView;

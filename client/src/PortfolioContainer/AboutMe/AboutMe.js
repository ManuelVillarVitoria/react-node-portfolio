import React from "react";
import { SCREEN_CONSTANTS } from "./data";
import ScrollService from "../../utilities/RxJs/ScrollService";
import Animations from "../../utilities/RxJs/Animations";
import "./AboutMe.css";
import AboutMeView from "./AboutMeView";

const AboutMe = ({ id }) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== { id }) return;

    Animations.animations.fadeInScreen({ id });
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={id || ""}>
      <AboutMeView renderHighlight={renderHighlight()} />
    </div>
  );
};

export default AboutMe;

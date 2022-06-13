import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import { from } from "rxjs";

const Resume = ({ id }) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const ResumeHeading = ({
    heading,
    subHeading,
    description,
    toDate,
    fromDate,
  }) => {
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
          <span>{heading && heading}</span>
          {fromDate && toDate && (
            <div className="heading-date">
              `${fromDate} ${toDate}`
            </div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{subHeading && subHeading}</span>
        </div>
        <div className="resume-heading-description">
          <span>{description && description}</span>
        </div>
      </div>
    </div>;
  };

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== id) return;
    Animations.animations.fadeInSCreen(id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="resume-container screen-container" id={id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
      </div>
    </div>
  );
};

export default Resume;

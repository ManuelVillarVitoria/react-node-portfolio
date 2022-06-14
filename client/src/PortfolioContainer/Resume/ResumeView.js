import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

const ResumeView = ({getBullets, getResumeScreens}) => {

  return (
    <div className="resume-content">
      <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
      <div className="resume-card">
        <div className="resume-bullets">
          <div className="bullet-container">
            <div className="bullet-icons"></div>
            <div className="bullets">{getBullets}</div>
          </div>
        </div>

        <div className="resume-bullet-details">{getResumeScreens}</div>
      </div>
    </div>
  );
};

export default ResumeView;

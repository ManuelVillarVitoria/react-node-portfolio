import React from "react";


const ResumeHeading = ({
  heading,
  subHeading,
  description,
  toDate,
  fromDate,
}) => {
  return (
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
    </div>
  );
};

export default ResumeHeading;

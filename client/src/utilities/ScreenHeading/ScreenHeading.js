import React from "react";
import "./ScreenHeading.css";

export default function ScreenHeading({ title, subHeading }) {
  return (
    <div className="heading-container">
      <div className="screen-heading">
        <span>{title}</span>
      </div>

      {subHeading && (
        <div className="screen-sub-heading">
          <span>{subHeading}</span>
        </div>
      )}

      <div className="heading-separator">
        <div className="separator-line"></div>
        <div className="separator-blob">
          <div></div>
        </div>
      </div>
    </div>
  );
}

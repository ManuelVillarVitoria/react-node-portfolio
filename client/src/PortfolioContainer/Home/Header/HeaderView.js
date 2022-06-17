import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HeaderView.css";

const HeaderView = ({
  headerButton,
  showHeaderOptions,
  logo,
  getHeaderOptions,
}) => {
  return (
    <div className="header-container" onClick={headerButton}>
      <div className="header-parent">
        <div className="header-hamburger" onClick={headerButton}>
          <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
        </div>
        <div className="header-logo">
          <span>{logo}</span>
        </div>
        <div
          className={
            showHeaderOptions
              ? "header-options show-hamburger-options"
              : "header-options"
          }
        >
          {getHeaderOptions}
        </div>
      </div>
    </div>
  );
};

export default HeaderView;

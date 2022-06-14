import React from "react";
import Typical from "react-typical";
import codesandbox from "../../../assets/images/codesandbox.png";
import Buttons from "../../../utilities/Buttons/Buttons";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.linkedin.com/in/mwfront/"
                target="_blank"
                rel="noreferrer"
                title="Linkedin"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a
                href="https://github.com/ManuelVillarVitoria"
                target="_blank"
                rel="noreferrer"
                title="Github"
              >
                <i className="fa fa-github-square"></i>
              </a>
              <a
                href="https://medium.com/@manuelvillar_19482"
                target="_blank"
                rel="noreferrer"
                title="Medium"
              >
                <i className="fa fa-brands fa-medium"></i>
              </a>
              <a
                href="https://codesandbox.io/dashboard/all/?workspace=d705a9d9-5ec2-4b59-86a2-4aae8af77374"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={codesandbox}
                  className="codesandbox-icon"
                  alt="codesandbox"
                  title="CodeSandbox"
                />
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Manuel</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🎈😀",
                    1000,
                    "Frontend Developer 💻",
                    1000,
                    "React/Redux Dev 🧑‍💻",
                    1000,
                    "JS/TS Dev 🙋",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                knack of building modern & scalable apps with front operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <Buttons />
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

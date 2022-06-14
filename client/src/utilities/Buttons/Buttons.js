import React from "react";

const Buttons = () => {
  return (
    <>
      <button className="btn primary-btn">Hire Me</button>
      <a
        href="Manuel Villar_FullStack_Developer.pdf"
        download="Manuel Villar_React Developer.pdf"
      >
        <button className="btn highlighted-btn">Get Resume</button>
      </a>
    </>
  );
};

export default Buttons;

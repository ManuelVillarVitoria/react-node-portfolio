import React, { useState } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../utilities/commonUtils";
import ScrollService from "../../../utilities/RxJs/ScrollService";
import "./Header.css";
import HeaderView from "./HeaderView";

const Header = () => {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };
  let currentScreenSubscription =
    ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClasses(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{screen.screen_name}</span>
      </div>
    ));
  };

  const getHeaderOptionsClasses = (index) => {
    let classes = "header-option ";
    if (index < TOTAL_SCREENS.length - 1) classes += "header-option-seperator ";

    if (selectedScreen === index) classes += "selected-header-option ";

    return classes;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  return (
    <HeaderView
      headerButton={() => setShowHeaderOptions(!showHeaderOptions)}
      showHeaderOptions={showHeaderOptions}
      logo={"ManuDEV~"}
      getHeaderOptions={getHeaderOptions()}
    />
  );
};

export default Header;

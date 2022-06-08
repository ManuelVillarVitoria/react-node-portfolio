import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from "rxjs";

export default class ScrollService {
  static scrollHandler = new ScrollService();

  static currentScreenBroadCaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  }
  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("Contact Me");
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };
  scrollToHome = () => {
    let HomeMeScreen = document.getElementById("Home");
    if (!HomeMeScreen) return;
    HomeMeScreen.scrollIntoView({ behavior: "smooth" });
  };
  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientReact();
    let elementTop = rec.top;
    let elementBottom = rec.elementBottom;

    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;
    let completeVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;

      switch(type) {
          case "partial":
              return partiallyVisible;

          case "complete":
              return completeVisible
              default:
                  return false
      }
  };

  checkCurrentScreenUnderViewport = e => {
      if(!e || Object.keys(e).length <1)
      return;
      for(let screen of TOTAL_SCREENS {
          let screenFromDOM = document.getElementById(screen.screen_name);
          if(!screenFromDOM)
          continue;

          let fullyVisible = this.isElementInView(screenFromDOM, "complete")
          let partiallyVisible = this.isElementInView(screenFromDOM, "partial")

          if(fullyVisible || partiallyVisible) {
            if(partiallyVisible && !screen.alreadyRendered) {
                ScrollService.currentScreenFadeIn.next({
                    fadeInScreen: screen.screen_name
                });
                screen['alreadyRendered'] = true;
                break;
            }
            if(fullyVisible){
                ScrollService.currentScreenBroadCaster.next({
                    screenInView: screen.screen_name
                })
            }
          }
      }
  }
}

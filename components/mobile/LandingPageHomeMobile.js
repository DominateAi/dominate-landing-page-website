import React, { Component } from "react";
import LandingPageMobileNavbar from "./LandingPageMobileNavbar";
import LandingPageHomeMobileFeature from "./LandingPageHomeMobileFeature";
import { LandingPageHomeMobileTrusted } from "./LandingPageHomeMobileTrusted";
import LandingPageHomeMobilePricing from "./LandingPageHomeMobilePricing";
import LandingPageMobileFooter from "./LandingPageMobileFooter";
import LandingPageHomeMobileBlogLinkFold from "./LandingPageHomeMobileBlogLinkFold";
import LandingPageHomeMobileFeatureNew from "./LandingPageHomeMobileFeatureNew";

/*const slide1 = "/img/mobile/home/slide/slide1.png";
const slide2 = "/img/mobile/home/slide/slide2.png";
const slide3 = "/img/mobile/home/slide/slide3.png";
const slide4 = "/img/mobile/home/slide/slide4.png";
const slide5 = "/img/mobile/home/slide/slide5.png";
*/
const slide1 = "./img/mobile/home/slide/manage.png";
const slide2 = "./img/mobile/home/slide/track.png";
const slide3 = "./img/mobile/home/slide/send.png";
const slide4 = "./img/mobile/home/slide/close.png";
const slide5 = "./img/mobile/home/slide/compare.png";

const imgPaths = [slide1, slide2, slide3, slide4, slide5];

export class LandingPageHomeMobile extends Component {
  render() {
    return (
      <div className="mobile-background-color">
        <LandingPageMobileNavbar />
        <LandingPageHomeMobileFeature imgPaths={imgPaths} delaySlide="2000" />
        <LandingPageHomeMobileFeatureNew />
        <LandingPageHomeMobileTrusted />
        <LandingPageHomeMobileBlogLinkFold />
        <LandingPageHomeMobilePricing />
        <LandingPageMobileFooter />
      </div>
    );
  }
}

export default LandingPageHomeMobile;

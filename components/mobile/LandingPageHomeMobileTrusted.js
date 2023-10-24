import React, { Component } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/*-- trusted img --*/
// const logo1 = "/img/mobile/home/trust/udemy.svg";
// const logo2 = "/img/mobile/home/trust/brandwatch.svg";
// const logo3 = "/img/mobile/home/trust/domo.svg";
// const logo4 = "/img/mobile/home/trust/gdd.svg";
// const logo5 = "/img/mobile/home/trust/meltwater.svg";
// const logo6 = "/img/mobile/home/trust/moltin.svg";
// const logo7 = "/img/mobile/home/trust/myrltech.svg";
// const logo8 = "/img/mobile/home/trust/netbase.svg";
// const logo9 = "/img/mobile/home/trust/shiprocket.svg";
// const logo10 = "/img/mobile/home/trust/trendkite.svg";

const img1 = "./img/mobile-dark-theme/home/trusted.png";
const img2 = "./img/mobile-dark-theme/home/strava.png";
const img3 = "./img/mobile-dark-theme/home/notion.png";
const img4 = "./img/mobile-dark-theme/home/grammarly.png";
const img5 = "./img/mobile-dark-theme/home/slack.png";
const img6 = "./img/mobile-dark-theme/home/adobe.png";
const img7 = "./img/mobile-dark-theme/home/figma.png";
const img8 = "./img/mobile-dark-theme/home/zapier.png";
const img9 = "./img/mobile-dark-theme/home/airtable.png";

export class LandingPageHomeMobileTrusted extends Component {
  renderTrusted = () => {
    return (
      <div className="mobile-trusted-section">
        <h5 className="mobile-featues-title mobile-featues-title--trusted">
          We are Trusted By
        </h5>
        {/* <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={35}
          totalSlides={10}
          interval={5000}
          isPlaying={true}
          //playDirection={"forward"}

          step={1}
          infinite={true}
        >
          <Slider>
            <Slide index={0}>
              <img src={logo1} alt="logo" className="trusted-logo" />
            </Slide>
            <Slide index={1}>
              <img src={logo2} alt="logo" className="trusted-logo" />
            </Slide>
            <Slide index={2}>
              <img src={logo3} alt="logo" className="trusted-logo" />
            </Slide>
            <Slide index={3}>
              <img src={logo4} alt="logo" className="trusted-logo" />
            </Slide>
            <Slide index={4}>
              <img src={logo5} alt="logo" className="trusted-logo" />
            </Slide>
            <Slide index={5}>
              <img src={logo6} alt="logo" className="trusted-logo" />
            </Slide>
            <Slide index={6}>
              <img src={logo7} alt="logo" className="trusted-logo" />
            </Slide>

            <Slide index={7}>
              <img src={logo8} alt="logo" className="trusted-logo" />
            </Slide>
            <Slide index={8}>
              <img src={logo9} alt="logo" className="trusted-logo" />
            </Slide>
            <Slide index={9}>
              <img src={logo10} alt="logo" className="trusted-logo" />
            </Slide>
          </Slider>

          <DotGroup dotNumbers={true} className="slide_dotgroup" />
          <div className=" carousel-btn-section">
            <ButtonBack className=" carousel-btn carousel-btn--left float-left"></ButtonBack>
            <ButtonNext className="float-right carousel-btn carousel-btn--right"></ButtonNext>{" "}
          </div>
        </CarouselProvider> */}
        <div className="mobile-trusted-inner-section text-center">
          <img src={img1} alt="" className="trusted-circle-img" />
          <div className="mobile-trusted-company-logo-div-1">
            <img src={img2} alt="strava" />
          </div>
          <div className="mobile-trusted-company-logo-div-2">
            <img src={img3} alt="notion" />
          </div>
          <div className="mobile-trusted-company-logo-div-3">
            <img src={img4} alt="grammarly" />
          </div>
          <div className="mobile-trusted-company-logo-div-4">
            <img src={img5} alt="slack" />
          </div>
          <div className="mobile-trusted-company-logo-div-5">
            <img src={img6} alt="adobe" />
          </div>
          <div className="mobile-trusted-company-logo-div-6">
            <img src={img7} alt="figma" />
          </div>
          <div className="mobile-trusted-company-logo-div-7">
            <img src={img8} alt="zapier" />
          </div>
          <div className="mobile-trusted-company-logo-div-8">
            <img src={img9} alt="airtable" />
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderTrusted()}</div>;
  }
}

export default LandingPageHomeMobileTrusted;

import HeadTag from "../components/common/HeadTag";
import LandingPageNewHome from "../components/desktop/home/LandingPageNewHome";
import LandingPageHomeMobile from "../components/mobile/LandingPageHomeMobile";
// import getWindowWidth, { xsWindowWidth } from "../components/getWindowWidth";

export default function Home() {
  // const currentWindowWidth = getWindowWidth();
  return (
    <>
      <HeadTag />

      <div className="d-none d-md-block pricing-page-bg">
        <LandingPageNewHome />
      </div>

      <div className="d-block d-md-none">
        <LandingPageHomeMobile />
      </div>

      {/* here on view page source content doesn't diplayed */}
      {/* {currentWindowWidth > xsWindowWidth && <LandingPageNewHome />}
      {currentWindowWidth <= xsWindowWidth && <LandingPageHomeMobile />} */}
    </>
  );
}

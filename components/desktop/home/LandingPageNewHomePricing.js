import React, { useState } from "react";
import LandingPageCurrency from "../LandingPageCurrency";
import PageTitleFontBig from "../common/PageTitleFontBig";

const img7 = "./img/desktop/home/video-placeholder.png";

export default function LandingPageNewHomePricing() {
  /*==============================================================
        play video
  ===============================================================*/
  const playVideo = () => {
    let playPromise = document.getElementById("homePageVideoId").play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("unmuted");
        })
        .catch((error) => {
          console.log("muted");
        });
    }
  };

  /*=====================================
            renderVideoBlock
  ====================================*/
  const renderVideoBlock = () => {
    return (
      <div className="new-home-video-main-div text-center">
        <h3 className="m-0 companies-that-trust-text">
          Watch our introduction Video
        </h3>
        <h5 className="new-home-video-text">Why Dominate?</h5>
        <div className="new-home-video-div">
          {/*<img src={img7} alt="home video" className="new-home-placeholder" />*/}
          <video
            id="homePageVideoId"
            playsInline
            muted={false}
            //autoPlay
            loop
            onClick={playVideo}
            controls
            poster={img7}
          >
            <source
              src="https://res.cloudinary.com/sls/video/upload/v1619594532/dominate/Dominate_Official_Promo_Video_httpswww.dominate.ai_720_x_1280_lcmidk.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className=" home-pricing-section">
        <PageTitleFontBig text={"plans"} extraClass={"home-pricing-title"} />
        <LandingPageCurrency />
        {renderVideoBlock()}
      </div>
    </>
  );
}

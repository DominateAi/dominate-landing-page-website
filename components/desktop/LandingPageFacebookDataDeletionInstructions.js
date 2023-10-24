import React, { useEffect } from "react";
import PageTitleFontBig from "./common/PageTitleFontBig";
import LandingPageFooter from "./LandingPageFooter";
import LandingPageNavbar from "./LandingPageNavbar";

export default function LandingPageFacebookDataDeletionInstructions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="background-section">
      <LandingPageNavbar />
      <div className="facebook-data-deletion-main-div">
        <PageTitleFontBig text={"Facebook Data Deletion Instructions"} />
        <div className="facebook-data-deletion-content-div">
          <p className="facebook-data-deletion-para-text">
            Dominate Login is a facebook login app and we do not save your
            personal data in our server. According to Facebook policy, we have
            to provide User Data Deletion Callback URL or Data Deletion
            Instructions URL.
          </p>
          <h4 className="facebook-data-deletion-sub-title-text">
            If you want to delete your activities for Dominate Login App, you
            can remove your information by following these steps:
          </h4>
          <h5 className="facebook-data-deletion-step-text">
            1. Go to your Facebook Account’s Setting &amp; Privacy. Click
            “Settings”
          </h5>
          <h5 className="facebook-data-deletion-step-text">
            2. Look for “Apps and Websites” and you will see all of the apps and
            websites you linked with your Facebook.
          </h5>
          <h5 className="facebook-data-deletion-step-text">
            3. Search and Click “Dominate Login” in the search bar.
          </h5>
          <h5 className="facebook-data-deletion-step-text">
            4. Scroll and click “Remove”.
          </h5>
          <h5 className="facebook-data-deletion-step-text">
            5. Congratulations, you have succesfully removed your app
            activities.
          </h5>
        </div>
      </div>
      <LandingPageFooter />
    </div>
  );
}

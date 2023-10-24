import React, { Component } from "react";
import PageTitle from "../desktop/common/PageTitle";
import LandingPageFooter from "./LandingPageFooter";
import LandingPageNavbar from "./LandingPageNavbar";
import ScrollDown from "./ScrollDown";
import ScrollTop from "./ScrollTop";

export class LandingPagePrivacy extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderBlock1 = () => {
    return (
      <div className="terms-para-section">
        <p className="terms-para-text">
          At Dominate, accessible from{" "}
          <a href={process.env.NEXT_PUBLIC_LOGIN_URL}>
            {process.env.NEXT_PUBLIC_LOGIN_URL}
          </a>
          , one of our main priorities is the privacy of our visitors. This
          Privacy Policy document contains types of information that is
          collected and recorded by Dominate and how we use it.{" "}
        </p>
        <p className="terms-para-text">
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.{" "}
        </p>
        <h3 className="terms-para-text terms-para-text--title terms-white-text">
          Log Files
        </h3>
        <p className="terms-para-text ">
          Dominate follows a standard procedure of using log files. These files
          log visitors when they visit websites. All hosting companies do this
          and a part of hosting services' analytics. The information collected
          by log files include internet protocol (IP) addresses, browser type,
          Internet Service Provider (ISP), date and time stamp, referring/exit
          pages, and possibly the number of clicks.These are not linked to any
          information that is personally identifiable. The purpose of the
          information is for analysing trends, administering the site, tracking
          users' movement on the website, and gathering demographic information.
        </p>
        <h3 className="terms-para-text terms-para-text--title terms-white-text ">
          Cookies and Web Beacons
        </h3>
        <p className="terms-para-text">
          Like any other website, Dominate uses 'cookies'. These cookies are
          used to store information including visitors' preferences, and the
          pages on the website that the visitor accessed or visited. The
          information is used to optimize the users' experience by customizing
          our web page content based on visitors' browser type and/or other
          information.
        </p>
        <h3 className="terms-para-text terms-para-text--title terms-white-text">
          Privacy Policies
        </h3>
        <p className="terms-para-text">
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of Dominate. Our Privacy Policy was created with
          the help of the Privacy Policy Generator and the Privacy Policy
          Generator Online.
        </p>
        <h3 className="terms-para-text terms-para-text--title terms-white-text">
          Third Party Privacy Policies
        </h3>
        <p className="terms-para-text">
          Dominate's Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options. You may find a complete list of these
          Privacy Policies and their links here : Privacy Policy Links.
        </p>
        <p className="terms-para-text">
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites. What Are Cookies?
        </p>
        <h3 className="terms-para-text terms-para-text--title terms-white-text">
          Children's Information
        </h3>
        <p className="terms-para-text">
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>
        <p className="terms-para-text">
          Dominate does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>
        <h3 className="terms-para-text terms-para-text--title terms-white-text">
          Online Privacy Policy Only
        </h3>
        <p className="terms-para-text">
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in Dominate. This policy is not applicable to
          any information collected offline or via channels other than this
          website.
        </p>
        <h3 className="terms-para-text terms-para-text--title terms-white-text">
          Consent
        </h3>
        <p className="terms-para-text ">
          By using our website, you hereby consent to our Privacy Policy and
          agree to its Terms and Conditions.
        </p>
      </div>
    );
  };
  render() {
    return (
      <>
        <div className=" background-section">
          <div className=" background-section--privacy1">
            <LandingPageNavbar />
            <ScrollDown />
            <ScrollTop />
            <div className="privacy-title-section">
              <PageTitle text={"privacy policy"} />
            </div>
            {this.renderBlock1()}

            <LandingPageFooter />
          </div>
        </div>
      </>
    );
  }
}

export default LandingPagePrivacy;

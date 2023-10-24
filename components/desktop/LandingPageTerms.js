import React, { Component } from "react";
import PageTitle from "./common/PageTitle";
import LandingPageNavbar from "./LandingPageNavbar";
import LandingPageFooter from "./LandingPageFooter";
import ScrollTop from "./ScrollTop";
import ScrollDown from "./ScrollDown";

export class LandingPageTerms extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderBlock = () => {
    return (
      <div className="terms-para-section">
        <h3 className="terms-para-text terms-white-text">
          Welcome to Dominate!
        </h3>
        <p className="terms-para-text">
          These terms and conditions outline the rules and regulations for the
          use of Dominate's Website, located at
          <a href={process.env.NEXT_PUBLIC_LOGIN_URL}>
            {process.env.NEXT_PUBLIC_LOGIN_URL}
          </a>
          .
        </p>
        <p className="terms-para-text">
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use Dominate if you do not agree to
          take all of the terms and conditions stated on this page. Our Terms
          and Conditions were created with the help of the Terms And Conditions
          Generator and the Terms &amp; Conditions Generator.
        </p>
        <h3 className="terms-para-text terms-para-text--title terms-white-text">
          Cookies
        </h3>
        <p className="terms-para-text">
          We employ the use of cookies. By accessing Dominate, you agreed to use
          cookies in agreement with the Dominate's Privacy Policy.Most
          interactive websites use cookies to let us retrieve the user's details
          for each visit. Cookies are used by our website to enable the
          functionality of certain areas to make it easier for people visiting
          our website. Some of our affiliate/advertising partners may also use
          cookies.
        </p>
        <h3 className="terms-para-text terms-para-text--title terms-white-text">
          License
        </h3>
        <p className="terms-para-text">
          Unless otherwise stated, Dominate and/or its licensors own the
          intellectual property rights for all material on Dominate. All
          intellectual property rights are reserved. You may access this from
          Dominate for your own personal use subjected to restrictions set in
          these terms and conditions.
        </p>
        <h3 className="terms-para-text terms-para-text--title terms-white-text">
          You must not:
        </h3>
        <h3 className="terms-para-text p-0">
          Republish material from Dominate
        </h3>
        <h3 className="terms-para-text p-0">
          Sell, rent or sub-license material from Dominate
        </h3>
        <h3 className="terms-para-text p-0">
          Reproduce, duplicate or copy material from Dominate
        </h3>
        <h3 className="terms-para-text p-0">
          Redistribute content from Dominate
        </h3>
        <h3 className="terms-para-text">
          This Agreement shall begin on the date hereof.
        </h3>
        <p className="terms-para-text">
          Parts of this website offer an opportunity for users to post and
          exchange opinions and information in certain areas of the website.
          Dominate does not filter, edit, publish or review Comments prior to
          their presence on the website. Comments do not reflect the views and
          opinions of Dominate,its agents and/or affiliates. Comments reflect
          the views and opinions of the person who post their views and
          opinions. To the extent permitted by applicable laws, Dominate shall
          not be liable for the Comments or for any liability, damages or
          expenses caused and/or suffered as a result of any use of and/or
          posting of and/or appearance of the Comments on this website.
        </p>
        <h3 className="terms-para-text">
          Dominate reserves the right to monitor all Comments and to remove any
          Comments which can be considered inappropriate, offensive or causes
          breach of these Terms and Conditions.
        </h3>
        <h3 className="terms-para-text terms-white-text">
          You warrant and represent that:
        </h3>
        <div className="terms-list">
          <ol className="terms-para-text">
            <li>
              -You are entitled to post the Comments on our website and have all
              necessary licenses and consents to do so;
            </li>
            <li>
              -The Comments do not invade any intellectual property right,
              including without limitation copyright, patent or trademark of any
              third party;
            </li>
            <li>
              The Comments do not contain any defamatory, libelous, offensive,
              indecent or otherwise unlawful material which is an invasion of
              privacy
            </li>
            <li>
              -The Comments will not be used to solicit or promote business or
              custom or present commercial activities or unlawful activity.
            </li>
            <li>
              -You hereby grant Dominate a non-exclusive license to use,
              reproduce, edit and authorize others to use, reproduce and edit
              any of your Comments in any and all forms, formats or media.
            </li>
          </ol>
        </div>
        <h3 className="terms-para-text terms-para-text--title terms-white-text">
          Hyperlinking to our Content
        </h3>
        <h3 className="terms-para-text">
          The following organizations may link to our Website without prior
          written approval:
        </h3>
        <p className="terms-para-text">
          Government agencies; Search engines; News organizations; Online
          directory distributors may link to our Website in the same manner as
          they hyperlink to the Websites of other listed businesses; and System
          wide Accredited Businesses except soliciting non-profit organizations,
          charity shopping malls, and charity fundraising groups which may not
          hyperlink to our Web site. These organizations may link to our home
          page, to publications or to other Website information so long as the
          link: (a) is not in any way deceptive; (b) does not falsely imply
          sponsorship, endorsement or approval of the linking party and its
          products and/or services; and (c) fits within the context of the
          linking party's site.
        </p>
        <p className="terms-para-text">
          We may consider and approve other link requests from the following
          types of organizations: commonly-known consumer and/or business
          information sources; dot.com community sites; associations or other
          groups representing charities; online directory distributors; internet
          portals; accounting, law and consulting firms; and educational
          institutions and trade associations. We will approve link requests
          from these organizations if we decide that: (a) the link would not
          make us look unfavorably to ourselves or to our accredited businesses;
          (b) the organization does not have any negative records with us; (c)
          the benefit to us from the visibility of the hyperlink compensates the
          absence of Dominate; and (d) the link is in the context of general
          resource information.
        </p>
        <p className="terms-para-text">
          These organizations may link to our home page so long as the link: (a)
          is not in any way deceptive; (b) does not falsely imply sponsorship,
          endorsement or approval of the linking party and its products or
          services; and (c) fits within the context of the linking party's site.
        </p>
        <p className="terms-para-text">
          If you are one of the organizations listed in paragraph 2 above and
          are interested in linking to our website, you must inform us by
          sending an e-mail to Dominate. Please include your name, your
          organization name, contact information as well as the URL of your
          site, a list of any URLs from which you intend to link to our Website,
          and a list of the URLs on our site to which you would like to link.
          Wait 2-3 weeks for a response.
        </p>
        <h3 className="terms-para-text terms-white-text">
          Approved organizations may hyperlink to our Website as follows:
        </h3>
        <h3 className="terms-para-text p-0">
          By use of our corporate name; or
        </h3>
        <h3 className="terms-para-text p-0">
          By use of the uniform resource locator being linked to; or
        </h3>
        <h3 className="terms-para-text p-0">
          By use of any other description of our Website being linked to that
          makes sense within the context and format of content on the linking
          party's site.
        </h3>
        <h3 className="terms-para-text">
          No use of Dominate's logo or other artwork will be allowed for linking
          absent a trademark license agreement.
        </h3>
        <h3 className="terms-para-text p-0 terms-white-text">iFrames</h3>
        <h3 className="terms-para-text ">
          Without prior approval and written permission, you may not create
          frames around our Webpages that alter in any way the visual
          presentation or appearance of our Website.
        </h3>
        <h3 className="terms-para-text p-0 terms-white-text">
          Content Liability
        </h3>
        <h3 className="terms-para-text ">
          We shall not be hold responsible for any content that appears on your
          Website. You agree to protect and defend us against all claims that is
          rising on your Website. No link(s) should appear on any Website that
          may be interpreted as libelous, obscene or criminal, or which
          infringes, otherwise violates, or advocates the infringement or other
          violation of, any third party rights.
        </h3>
        <h3 className="terms-para-text p-0 terms-white-text">Your Privacy</h3>
        <h3 className="terms-para-text">Please read Privacy Policy</h3>
        <h3 className="terms-para-text terms-para-text--title terms-white-text">
          Reservation of Rights
        </h3>
        <p className="terms-para-text">
          We reserve the right to request that you remove all links or any
          particular link to our Website. You approve to immediately remove all
          links to our Website upon request. We also reserve the right to amen
          these terms and conditions and it's linking policy at any time. By
          continuously linking to our Website, you agree to be bound to and
          follow these linking terms and conditions.
        </p>
        <h3 className="terms-para-text p-0 terms-white-text">
          Removal of links from our website
        </h3>
        <p className="terms-para-text">
          If you find any link on our Website that is offensive for any reason,
          you are free to contact and inform us any moment. We will consider
          requests to remove links but we are not obligated to or so or to
          respond to you directly.
        </p>
        <p className="terms-para-text">
          We do not ensure that the information on this website is correct, we
          do not warrant its completeness or accuracy; nor do we promise to
          ensure that the website remains available or that the material on the
          website is kept up to date.
        </p>
        <h3 className="terms-para-text terms-para-text--title terms-white-text">
          Disclaimer
        </h3>
        <h3 className="terms-para-text">
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website. Nothing in this disclaimer will:
        </h3>
        <h3 className="terms-para-text p-0">
          limit or exclude our or your liability for death or personal injury;
        </h3>
        <h3 className="terms-para-text p-0">
          limit or exclude our or your liability for fraud or fraudulent
          misrepresentation;
        </h3>
        <h3 className="terms-para-text p-0">
          limit any of our or your liabilities in any way that is not permitted
          under applicable law; or exclude any of our or your liabilities that
          may not be excluded under applicable law.
        </h3>
        <h3 className="terms-para-text p-0">
          The limitations and prohibitions of liability set in this Section and
          elsewhere in this disclaimer: (a) are subject to the preceding
          paragraph;
        </h3>
        <h3 className="terms-para-text ">
          and (b) govern all liabilities arising under the disclaimer, including
          liabilities arising in contract, in tort and for breach of statutory
          duty.
        </h3>
        <h3 className="terms-para-text ">
          As long as the website and the information and services on the website
          are provided free of charge, we will not be liable for any loss or
          damage of any nature.
        </h3>
      </div>
    );
  };

  render() {
    return (
      <div className="background-section">
        <div className="background-section--terms1">
          <LandingPageNavbar />
          <ScrollTop />
          <ScrollDown />
          <div className="terms-section">
            <div className="privacy-title-section">
              <PageTitle text={"Terms and conditions"} />
            </div>
            {this.renderBlock()}
          </div>
          <LandingPageFooter />
        </div>
      </div>
    );
  }
}

export default LandingPageTerms;

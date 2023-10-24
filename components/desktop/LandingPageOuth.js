import React, { Component } from "react";
import PageTitleFontBig from "./common/PageTitleFontBig";
import LandingPageFooter from "./LandingPageFooter";
import LandingPageNavbar from "./LandingPageNavbar";

export class LandingPageOuth extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className=" background-section">
        <div className=" background-section--privacy1">
          <LandingPageNavbar />
          <PageTitleFontBig
            text={"OAuth Home Page"}
            extraClass={"oauth-page-title"}
          />
          <div className="oauth-padding-div">
            <h2 className="montserrat-38-font montserrat-38-font--oauth">
              i. Limited User Requirements Disclosure
            </h2>
            <h3 className="font-24-nunito font-24-nunito--outh pt-20 pl-40">
              <a
                href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/`}
                // target="_blank"
                // rel="noopener noreferrer"
              >
                <span className="oauth-span-text">Dominate.ai</span>
              </a>
              's use and transfer to any other app of information received from
              Google APIs will adhere to{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="oauth-span-text">
                  Google API Services User Data Policy
                </span>
              </a>
              , including the Limited Use requirements
            </h3>
            <h2 className="montserrat-38-font montserrat-38-font--oauth pt-40">
              ii. OAuth Functionality
            </h2>
            <h3 className="font-24-nunito font-24-nunito--outh pt-20 pl-45">
              Dominate uses Google and Microsoft OAuth to provide a seamless
              experience to the users wherein users can get an integrated inbox
              experience that makes it easy to have deep integration between
              their google accounts and dominate eliminating the need to
              manually create the same contacts and events (or sync contacts and
              events) in both platforms and also compose and send emails from
              within dominate using your own gmail account to your leads with
              attachments and using templates stored in dominate. <br />
              <br />
              <br /> It is important to note that none of your data is being
              stored in the dominate database. Nonw of your personal information
              being received from google is stored in dominate database as well.
              We are just using your approval to receive access tokens to enable
              you to use mails, contacts and events from within dominate.
              <br />
              <br />
              <br /> All of your data such as emails, calendar events and
              contacts are being sourced directly from google in real time
              without any data being stored in dominate database - this is why
              there is also a slight delay for fetching the required
              information.
            </h3>
            <h3 className="montserrat-38-font montserrat-38-font--oauth pt-96">
              iii. Emails
            </h3>
            <h3 className="font-24-nunito font-24-nunito--outh pt-20 pl-45">
              Once you provide access to dominate and sign in with your gmail
              account, you will be able to start composing, sending, viewing,
              editing and deleting all of your emails right from within
              dominate.
              <br />
              <br />
              <br />
              This is important because since dominate has quotations and
              proposals functionality and also the ability to email leads from
              within the software itself, you can use your official email
              directly through gmail to now do this instead of having to keep a
              separate tab open for the same.
              <br />
              <br />
              <br /> With this deep integration, you can be rest assured that
              you are not entering data repeatedly.
            </h3>
            <h3 className="montserrat-38-font montserrat-38-font--oauth pt-96">
              iv. Contacts
            </h3>
            <h3 className="font-24-nunito font-24-nunito--outh pt-20 pl-45">
              Sometimes, you may want to convert your existing contacts into
              leads and do not want to enter their details manually. This is why
              we have now have a deep integration with your google account so
              that you can view all your contacts within dominate.
              <br />
              <br />
              <br />
              Even if you want to sync your leads to your contacts - basically
              you want your dominate leads to become your google contacts, you
              can do the same as we have ability to create contacts in our
              application.
              <br />
              <br />
              <br /> It is important to note that all contacts are being
              retrieved from your google account in real time and not being
              stored in dominate database. This is why there can also be a small
              delay for the same.
            </h3>
            <h3 className="montserrat-38-font montserrat-38-font--oauth pt-96">
              v. Events
            </h3>
            <h3 className="font-24-nunito font-24-nunito--outh pt-20 pb-50 pl-40">
              Dominate provides you the ability to create followups for leads
              and also ability to create meetings with prospects. This means,
              you would need to create these on your calendar but users also
              require dominate calendar to be synced to their google or
              microsoft calendars, and this is why we have deep integrations
              providing our users the ability to create, view, edit and delete
              events from their calendars. <br /> <br />
              <br />
              There are not "automated" tasks that are currently taking place
              inside Dominate in the context of OAuth. All activities are taking
              place based on manual intervention by each user. As already
              stated, no personal information such as contacts, emails and
              events are being stored at dominate database and is being fetched
              in real time from your google account.
            </h3>
          </div>
          <LandingPageFooter />
        </div>
      </div>
    );
  }
}

export default LandingPageOuth;

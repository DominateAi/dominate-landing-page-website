import React from "react";
import PageTitle from "./common/PageTitle";
import LandingPageFooter from "./LandingPageFooter";
import LandingPageNavbar from "./LandingPageNavbar";
import ScrollDown from "./ScrollDown";
import ScrollTop from "./ScrollTop";

const LandingPageCancellationandRefund = () => {
  const renderBlockOne = () => {
    return (
      <div className="terms-para-section terms-white-text">
        <h4 className="privacy-section-subtitle">Cancellation</h4>
        <p className="terms-para-text pt-40">
          Your subscription won't change until your current billing cycle ends.
          Once your subscription runs out, your subscription will be canceled,
          and your account will automatically revert to Dominate Free. None of
          your data will be lost, and you will maintain access to all of your
          notes and notebooks.
          <br />
          <br />
          The steps to cancel your subscription will vary based on your payment
          method.
          <br />
          <br />
          In the event this Refund Policy conflicts with any agreement you have
          with Dominate, including, but not limited to, the Dominate
          <span className="oauth-span-text">
            <a
              href="https://evernote.com/legal/terms-of-service"
              target="_blank"
            >
              {" "}
              Terms of Service
            </a>
          </span>
          ,{" "}
          <span className="oauth-span-text">
            <a
              href="https://evernote.com/legal/commercial-terms"
              target="_blank"
            >
              Commercial Terms
            </a>
          </span>
          , or Dominate{" "}
          <span className="oauth-span-text">
            <a href="https://evernote.com/legal/teams" target="_blank">
              Teams Agreement
            </a>
          </span>{" "}
          (each referred to as "Agreement"), such Agreement will govern.
          Capitalized terms used in this policy but not defined shall have the
          same meaning ascribed to them in the Agreement.
        </p>
        <h4 className="privacy-section-subtitle">Refund</h4>
        <p className="terms-para-text pt-40">
          Dominate plans may be refunded in keeping with the following
          guidelines:
        </p>
        <ol className="terms-of-services-list">
          <li className="pt-0">
            For any monthly Individual Paid Service subscription fee, Dominate
            will process a refund if the request is received within two days of
            the date of the payment.
          </li>
          <li>
            For any annual Individual Paid Service subscription fee, Dominate
            will process a refund if the request is received within sixty days
            of the date of the payment.
          </li>
        </ol>
        <p className="terms-para-text pt-40">
          Once a payment is past these time frames, no prorated refunds or
          credits will be offered for partially used subscriptions. Dominate may
          be unable to process refunds for payments made through third-party app
          stores such as AppSumo. If we issue a refund or credit in one
          instance, we are under no obligation to issue the same refund or
          credit in the future.
          <br />
          <br />
          We also reserve the right to issue refunds or credits at our sole
          discretion in the following situations:
        </p>
        <ol className="terms-of-services-list">
          <li className="pt-0">
            Where we materially modify the Dominate
            <span className="oauth-span-text">
              <a
                href="https://evernote.com/legal/terms-of-service"
                target="_blank"
              >
                {" "}
                Terms of Service,{" "}
              </a>
            </span>
            <span className="oauth-span-text">
              <a href="https://evernote.com/legal/privacy.php" target="_blank">
                Privacy Policy
              </a>
            </span>
            , or{" "}
            <span className="oauth-span-text">
              <a
                href="https://evernote.com/legal/commercial-terms"
                target="_blank"
              >
                {" "}
                Commercial Terms
              </a>
            </span>{" "}
            during a billing period and such modification ("Terms Modification")
            adversely affects you, we may refund a portion of your Individual
            Paid Service subscription fee equal to the remaining unused term of
            the Individual Paid Service subscription, as we determine
            appropriate or as may be required by applicable law. To be eligible
            for a refund, you must provide written notice which must (a)
            identify your account and (b) request cancellation of the specific
            Individual Paid Service. The cancellation will be effective upon our
            receipt of your notice and our determination that you are authorized
            to effect such cancellation. Please refer to the section entitled,
            ”How Can I send a Notice to Dominate” in the
            <span className="oauth-span-text">
              <a
                href="https://evernote.com/legal/terms-of-service"
                target="_blank"
              >
                {" "}
                Terms of Service{" "}
              </a>
            </span>
            on how to provide notice.
          </li>
          <li>
            As described in the{" "}
            <span className="oauth-span-text">
              <a
                href="https://evernote.com/legal/terms-of-service"
                target="_blank"
              >
                Terms of Service
              </a>
            </span>{" "}
            section entitled, “Right to Modify the Service,” where a
            modification or interruption of any part of the Dominate service
            adversely affects you and alternative remedies as specified in our
            Terms of Service are not available, we may refund a portion of your
            Individual Paid Service subscription fee equal to the remaining
            unused term of the Individual Paid Service subscription, as we
            determine appropriate or as may be required by applicable law.
          </li>
        </ol>
        <p className="terms-para-text pt-40">
          As with Individual Paid Service subscriptions, if we issue a refund or
          credit for an Dominate Teams subscription in one instance, we are
          under no obligation to issue the same refund or credit in the future.
        </p>
        <h4 className="privacy-section-subtitle">TERMINATION BY CUSTOMER</h4>
        <p className="terms-para-text pt-40">
          <u>Terminations eligible for refund:</u>
        </p>
        <ol className="terms-of-services-list">
          <li className="pt-0">
            For any monthly Teams Service subscription fee, Dominate will
            process a refund if the request is received within two days of the
            date of the payment.
          </li>
          <li>
            For any annual Teams Service subscription fee, Dominate will process
            a refund if the request is received within sixty days of the date of
            the payment.
          </li>
        </ol>
        <p className="terms-para-text pt-40">
          Once a payment is past these time frames, no prorated refunds or
          credits will be offered for partially used subscriptions.
        </p>
        <h4 className="terms-para-text pt-40">
          <u>Terminations not eligible for refund:</u>
        </h4>
        <p className="terms-para-text pt-40">
          Customers whose Accounts are paid monthly through credit card billing
          can remove any seats or cancel their Teams subscription before the
          next payment cycle. Customers whose Accounts are paid via invoice,
          whether monthly or annually, can remove seats or cancel their Teams
          subscription before the next payment cycle. Changes in any of these
          cases will be reflected in the next billing cycle.
          <br />
          <br />
          Other than as stated above, we reserve the right to issue refunds or
          credits at our sole discretion, or as required by applicable law.
        </p>
        <h4 className="privacy-section-subtitle">
          TERMINATION BY CUSTOMER DUE TO CHANGES IN DOMINATE TEAMS AGREEMENT
        </h4>
        <p className="terms-para-text pt-40">
          In the event Customer does not wish to continue using Dominate Teams
          under the terms of an Amended Agreement as described in the
          <span className="oauth-span-text">
            <a href="https://evernote.com/legal/teams" target="_blank">
              Dominate Teams Agreement
            </a>
          </span>
          , Section 21(h), Customer may request a partial refund, and Dominate
          will refund the prorated portion of any prepaid Fees applicable to the
          period after the effective date of termination. Please refer to
          Section 21(h) of the Dominate Teams Agreement for instructions on how
          to provide notice of cancellation.
        </p>
        <h4 className="privacy-section-subtitle">
          TERMINATION BY CUSTOMER FOR MODIFICATIONS OR INTERRUPTIONS TO THE
          DOMINATE SERVICE.
        </h4>
        <p className="terms-para-text pt-40">
          As described in the{" "}
          <span className="oauth-span-text">
            <a
              href="https://evernote.com/legal/terms-of-service"
              target="_blank"
            >
              {" "}
              Terms of Service
            </a>
          </span>{" "}
          section entitled, “Right to Modify the Service,” where a modification
          or interruption of any part of the Dominate service adversely affects
          the Dominate Teams Customer and alternative remedies as specified in
          our Terms of Service are not available, we may refund a portion of the
          Customer’s Dominate Teams subscription fee equal to the remaining
          unused term of the Dominate Teams subscription, as we determine
          appropriate or as may be required by applicable law.
        </p>
        <h4 className="privacy-section-subtitle">TERMINATION BY DOMINATE</h4>
        <p className="terms-para-text pt-40">
          Dominate will refund the prorated portion of any prepaid Fees
          applicable to the period after the effective date of termination.
        </p>
      </div>
    );
  };
  return (
    <div className="background-section">
      <div className="background-section--terms1">
        <LandingPageNavbar />
        <ScrollDown />
        <ScrollTop />
        <div className="terms-section terms-section--terms-of-services">
          <div className="privacy-title-section">
            <PageTitle text={"Cancellation and Refund"} />
          </div>
          {renderBlockOne()}
        </div>
        <LandingPageFooter />
      </div>
    </div>
  );
};

export default LandingPageCancellationandRefund;

import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import Link from "next/link";

// const logo = "/img/mobile/navbar/logo.svg";
const logo = "./img/mobile-dark-theme/logo/dominate-logo.png";

export class LandingPageMobileNavbar extends Component {
  render() {
    return (
      <div className="mobile-navbar-section">
        <Link href="/">
          <a>
            <img src={logo} alt="logo" className="mobile-logo-img" />
          </a>
        </Link>
        <div className="row mx-0 flex-nowrap justify-content-row align-items-center">
          <Accordion allowZeroExpanded={true} className="mobile-accoedian">
            <AccordionItem>
              <AccordionItemHeading className="accordian-heading">
                <AccordionItemButton>Comparison</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordian-panel">
                <div className="arrow-up">
                  <h3 className="mobile-nav-link-header">
                    Compare Dominate With
                  </h3>
                  <div className="row align-itmes-center flex-nowrap pl-28 pr-18 pt-19 mx-0 mobile-nav-link-section">
                    <div className="column">
                      <Link href="/dominate-vs-pipedrive">
                        <a>
                          <h5 className="mobile-nav-link">Pipedrive</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-salesflare">
                        <a>
                          <h5 className="mobile-nav-link">Salesflare</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-closeio">
                        <a>
                          <h5 className="mobile-nav-link">Close.IO</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-zendesksell">
                        <a>
                          <h5 className="mobile-nav-link">Zendesk Sell</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-salesforce">
                        <a>
                          <h5 className="mobile-nav-link">Salesforce</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-affinity">
                        <a>
                          <h5 className="mobile-nav-link">Affinity.CO</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-apollo">
                        <a>
                          <h5 className="mobile-nav-link">Apollo.IO</h5>
                        </a>
                      </Link>
                    </div>
                    <div className="column pl-28">
                      <Link href="/dominate-vs-prospect">
                        <a>
                          <h5 className="mobile-nav-link">Prospect.IO</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-clari">
                        <a>
                          <h5 className="mobile-nav-link">Clari</h5>
                        </a>
                      </Link>

                      <Link href="/dominate-vs-freshsales">
                        <a>
                          <h5 className="mobile-nav-link">Freshsales</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-zohocrm">
                        <a>
                          <h5 className="mobile-nav-link">Zoho CRM</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-insightly">
                        <a>
                          <h5 className="mobile-nav-link">Insightly</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-bitrix">
                        <a>
                          <h5 className="mobile-nav-link">Bitrix24</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-copper">
                        <a>
                          <h5 className="mobile-nav-link">Copper CRM</h5>
                        </a>
                      </Link>
                    </div>
                    <div className="column pl-28">
                      <Link href="/dominate-vs-hunterio">
                        <a>
                          <h5 className="mobile-nav-link">Hunter.IO</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-easyleadz">
                        <a>
                          <h5 className="mobile-nav-link">EasyLeadz</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-bombora">
                        <a>
                          <h5 className="mobile-nav-link">Bombora</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-proposify">
                        <a>
                          <h5 className="mobile-nav-link">Proposify</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-clearbit">
                        <a>
                          <h5 className="mobile-nav-link">Clearbit</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-alore">
                        <a>
                          <h5 className="mobile-nav-link">Alore.IO</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-wiza">
                        <a>
                          <h5 className="mobile-nav-link">Wiza</h5>
                        </a>
                      </Link>
                    </div>
                    <div className="column pl-28">
                      <Link href="/dominate-vs-nimble">
                        <a>
                          <h5 className="mobile-nav-link">Nimble</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-hubspot">
                        <a>
                          <h5 className="mobile-nav-link">Hubspot</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-skrapp">
                        <a>
                          <h5 className="mobile-nav-link">Skrapp.IO</h5>
                        </a>
                      </Link>
                      <Link href="/dominate-vs-lusha">
                        <a>
                          <h5 className="mobile-nav-link">Lusha</h5>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <a href={process.env.NEXT_PUBLIC_LOGIN_URL}>
            <span className="navbar-btn navbar-btn--mobile">
              Login / Sign Up
            </span>
          </a>
        </div>
      </div>
    );
  }
}

export default LandingPageMobileNavbar;

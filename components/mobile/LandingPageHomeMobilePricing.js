import React, { Component } from "react";
import Link from "next/link";
import ReactFlagsSelect from "react-flags-select";
import { priceData } from "../../store/data/priceData";
import isEmpty from "../../store/validation/is-empty";
import { Fragment } from "react";

// const img1 = "/img/mobile/home/price/img1.png";
// const img2 = "/img/mobile/home/price/img2.png";
// const img3 = "/img/mobile/home/price/img3.png";
// const img4 = "/img/mobile/home/price/img4.png";
// const img5 = "/img/mobile/home/price/img5.png";
// const img6 = "/img/mobile/home/price/img6.svg";

const img1 = "./img/mobile-dark-theme/price/img1.png";
const img2 = "./img/mobile-dark-theme/price/img2.png";
const img3 = "./img/mobile-dark-theme/price/img3.png";
const img4 = "./img/mobile-dark-theme/price/img4.png";
const img5 = "./img/mobile-dark-theme/price/img5.png";
const img6 = "./img/mobile-dark-theme/price/img6.png";

const price = [
  {
    path: img1,
    imgClass: "price-img1",
    name: "pod",
    //user: "2-5 users",
    user: "1 user",
    cost: "free",
  },
  {
    path: img2,
    imgClass: "price-img2",
    name: "Astronaut",
    user: "2-5 users",
    cost: "$20/Mo",
  },
  {
    path: img3,
    imgClass: "price-img3",
    name: "rover",
    user: "6-10 users",
    //user: "2-5 users",
    cost: "$80/Mo",
  },
  {
    path: img4,
    imgClass: "price-img4",
    name: "Spaceship",
    user: "11-15 users",
    //user: "6-10 users",
    cost: "$160/Mo",
  },
  {
    path: img5,
    imgClass: "price-img5",
    name: "space station",
    user: "16-20 users",
    //user: "11-15 users",
    cost: "$240/Mo",
  },
  {
    path: img6,
    imgClass: "price-img6",
    name: "Colony",
    sales: "Enterprise clients",
    cost: "Contact Sales",
  },
];
export class LandingPageHomeMobilePricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "US",
      // currencyData: priceData,
    };
  }

  renderBlock1 = () => {
    let filterdata = [];
    if (!isEmpty(this.state.currency)) {
      // let trimStr = this.state.currency.trim();
      // let uperStr = trimStr.toUpperCase();
      // let searchData = new RegExp(uperStr, "i");
      // console.log(this.state.currency);
      // filterdata = this.state.currencyData.filter((Data) => {
      //   if (searchData.test(Data.country)) {
      //     return Data;
      //   }
      // });
      // console.log(values.currency);
      filterdata = priceData.filter((a) => a.country === this.state.currency);
    } else {
      filterdata = this.state.priceData;
    }
    // console.log(filterdata, "filteData");

    return (
      <div className="mobile-home-price-outer-section">
        {price.map((val, index) => (
          <div key={index} className="mobile-home-price-inner-section">
            <div className="row mx-0 align-items-center flex-nowrap h-100">
              <div className="mobile-price-img-div ">
                <img src={val.path} alt={val.name} className={val.imgClass} />
              </div>
              <div className="row mx-0 align-items-center flex-nowrap justify-content-between mobile-price-name-cost-div">
                <div className="mobile-price-name-div">
                  <h3 className="mobile-price-name">{val.name}</h3>
                  {/*index === 0 ? (
                    <h3 className="mobile-price-user">{val.user}</h3>
                  ) : index === 4 ? (
                    <h3 className="mobile-price-user mobile-price-user--sales">
                      {val.sales}
                    </h3>
                  ) : (
                    <h3 className="mobile-price-user">{val.user}</h3>
                  )*/}

                  {index === 5 ? (
                    <h3 className="mobile-price-user">Enterprise clients</h3>
                  ) : (
                    <h3 className="mobile-price-user">{val.user}</h3>
                  )}
                </div>
                <div>
                  {index === 0 ? (
                    <h3 className="mobile-price-cost">
                      Free
                      <span className="mobile-price-per-month">
                        Per User / Month
                      </span>{" "}
                    </h3>
                  ) : index === 5 ? (
                    // <h3 className="mobile-price-cost">Contact Sales</h3>
                    <Link href="/contact">
                      <a>
                        <div className="mobile-home-pricing-btn">
                          Contact Us
                        </div>
                      </a>
                    </Link>
                  ) : (
                    <>
                      {filterdata.map((data, key) => (
                        <Fragment key={key}>
                          {/*getSymbolFromCurrency("USD")*/}
                          {index === 1 ? (
                            <h3 className="mobile-price-cost">
                              {/* {data.symbol} {data.priceAstronaut / 100} */}
                              {data.symbol} {data.priceAstronaut}
                              <span className="mobile-price-per-month">
                                Per User / Month
                              </span>{" "}
                            </h3>
                          ) : index === 2 ? (
                            <h3 className="mobile-price-cost">
                              {/* {data.symbol} {data.priceRover / 100} */}
                              {data.symbol} {data.priceRover}
                              <span className="mobile-price-per-month">
                                Per User / Month
                              </span>{" "}
                            </h3>
                          ) : index === 3 ? (
                            <h3 className="mobile-price-cost">
                              {/* {data.symbol} {data.priceSpaceShip / 100} */}
                              {data.symbol} {data.priceSpaceShip}
                              <span className="mobile-price-per-month">
                                Per User / Month
                              </span>{" "}
                            </h3>
                          ) : index === 4 ? (
                            <h3 className="mobile-price-cost">
                              {/* {data.symbol} {data.priceSpacestation / 100} */}
                              {data.symbol} {data.priceSpacestation}
                              <span className="mobile-price-per-month">
                                Per User / Month
                              </span>{" "}
                            </h3>
                          ) : (
                            ""
                          )}
                        </Fragment>
                      ))}
                    </>
                  )}
                  {/* {index === 5 ? (
                  <Link href="/contact">
                    <a>
                      <div className="mobile-home-pricing-btn">Contact US</div>
                    </a>
                  </Link>
                ) : (
                  // <a href={process.env.NEXT_PUBLIC_LOGIN_URL}>
                  //   <span className="mobile-home-pricing-btn">Start Trial</span>
                  // </a>
                  ""
                )} */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div>
        <h2 className="mobile-featues-title">Pricing</h2>
        <div className="background-img-mobile background-img-mobile--pricing">
          <div className="row mx-0 align-items-baseline justify-content-center pt-27">
            <h5 className="new-home-select-currency-text">Select Currency</h5>
            <div className="currency-dropdown">
              <ReactFlagsSelect
                selected={this.state.currency}
                onSelect={(code) =>
                  this.setState({
                    currency: code,
                  })
                }
                //searchable
                countries={["US", "IN", "DE", "GB", "CA", "AU", "AE", "ZA"]}
                customLabels={{
                  US: "United States (USD)",
                  IN: "India (INR)",
                  DE: "Germany (EUR)",
                  GB: "United Kingdom (GBP)",
                  CA: "Canada (CAD)",
                  AU: "Australia (AUD)",
                  AE: "United Arab Emirates (AED)",
                  ZA: "South Africa (ZAR)",
                }}
                placeholder="Currency"
              />
            </div>
          </div>
          {this.renderBlock1()}
        </div>
      </div>
    );
  }
}

export default LandingPageHomeMobilePricing;

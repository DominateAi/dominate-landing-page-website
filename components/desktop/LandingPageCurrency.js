import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { priceData } from "../../store/data/priceData";
import isEmpty from "../../store/validation/is-empty";
import "react-responsive-modal/styles.css";
import GetInTouch from "./modals/GetInTouch";
import Modal from "react-responsive-modal";

//-- for img importing --//
// const img1 = "/img/desktop/price/img1.png";
// const img2 = "/img/desktop/price/img2.png";
// const img3 = "/img/desktop/price/img3.png";
// const img4 = "/img/desktop/price/img4.png";
// const img5 = "/img/desktop/price/img5.png";
// const img6 = "/img/desktop/price/img6.svg";
const img1 = "./img/desktop-dark-theme/price/img1.png";
const img2 = "./img/desktop-dark-theme/price/img2.png";
const img3 = "./img/desktop-dark-theme/price/img3.png";
const img4 = "./img/desktop-dark-theme/price/img4.png";
const img5 = "./img/desktop-dark-theme/price/img5.png";
const img6 = "./img/desktop-dark-theme/price/img6.png";

const price_array = [
  {
    path: img1,
    imgClass: "price-img1",
    name: "pod",
    //user: "2-5 users",
    user: "1 user",
    cost: "free forever",
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
    name: "spaceship",
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
export default function LandingPageCurrency() {
  const [values, setValues] = useState({ currency: "US" });
  // const [currencyData, setCurrencyData] = useState(priceData);
  const [open, isOpen] = useState(false);

  /*===========================================
                   renderModal
  ============================================*/
  const handleOpen = () => {
    isOpen(!open);
  };

  /*===========================================
                   renderCrad
  ============================================*/
  const renderBlock1 = () => {
    let filterdata = [];
    if (!isEmpty(values.currency)) {
      // console.log(values.currency);
      filterdata = priceData.filter((a) => a.country === values.currency);
    } else {
      filterdata = priceData;
    }
    // console.log(filterdata, "filteData");

    return (
      <div className="row justify-content-center align-items-end price-array-outer-div">
        {price_array.map((val, index) => (
          <div key={index} className="price-card-div">
            <div className="price-card">
              <div className="price-img-div">
                <img src={val.path} alt={val.name} className={val.imgClass} />
              </div>
              <div className="price-name-div row mx-0 flex-nowrap justify-content-between">
                <div className="text-left">
                  <h3 className="price-name">{val.name}</h3>
                  {index === 5 ? (
                    <h3 className="price-user ">{val.sales}</h3>
                  ) : (
                    <h3 className="price-user ">{val.user}</h3>
                  )}
                </div>
                <div className="text-right">
                  {index === 5 ? (
                    <div
                      className="price-cost-div price-cost-div--contact"
                      onClick={handleOpen}
                    >
                      <h3 className="price-cost">{val.cost}</h3>
                    </div>
                  ) : index === 0 ? (
                    <div className="price-cost-div">
                      <h3 className="price-cost">Free Forever</h3>
                    </div>
                  ) : (
                    <>
                      {filterdata.map((data, key) => (
                        <div className="price-cost-div" key={key}>
                          {/*getSymbolFromCurrency("USD")*/}
                          {index === 1 ? (
                            <h3 className="price-cost">
                              {/* {data.symbol} {data.priceAstronaut / 100} */}
                              {data.symbol} {data.priceAstronaut}
                            </h3>
                          ) : index === 2 ? (
                            <h3 className="price-cost">
                              {/* {data.symbol} {data.priceRover / 100} */}
                              {data.symbol} {data.priceRover}
                            </h3>
                          ) : index === 3 ? (
                            <h3 className="price-cost">
                              {/* {data.symbol} {data.priceSpaceShip / 100} */}
                              {data.symbol} {data.priceSpaceShip}
                            </h3>
                          ) : index === 4 ? (
                            <h3 className="price-cost">
                              {/* {data.symbol} {data.priceSpacestation / 100} */}
                              {data.symbol} {data.priceSpacestation}
                            </h3>
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                    </>
                  )}
                  {index === 5 ? (
                    " "
                  ) : (
                    <h5 className="price-per-month-text">Per User / Month</h5>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  /*===========================================
                   renderModal
  ============================================*/
  const renderModal = () => {
    return (
      <Modal
        open={open}
        onClose={handleOpen}
        closeOnEsc={true}
        closeOnOverlayClick={false}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal customModal--get",
          closeButton: "customCloseButton",
        }}
      >
        <span className="closeIconInModal" onClick={handleOpen} />
        <div>
          <GetInTouch />
        </div>
      </Modal>
    );
  };
  return (
    <>
      <div className="row mx-0 align-items-center justify-content-center pt-55">
        <div className="row mx-0 align-items-ceter">
          <h5 className="new-home-select-currency-text pt-20">
            Select Currency
          </h5>
          {/*<SelectCurrency
                name="currency"
                value={this.state.currency}
                onChange={this.handleChange}
                //onCurrencySelected={onSelectedCurrency}
                //className="new-home-currency-select"
              />*/}
          <div className="currency-dropdown">
            <ReactFlagsSelect
              selected={values.currency}
              onSelect={(code) =>
                setValues({
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
        {renderBlock1()}
        {renderModal()}
      </div>
    </>
  );
}

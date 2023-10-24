import getSymbolFromCurrency from "currency-symbol-map";
import currencyToSymbolMap from "currency-symbol-map/map";

console.log("mapppp", currencyToSymbolMap);

const USD = getSymbolFromCurrency("USD");
const INR = getSymbolFromCurrency("INR");
const EURO = getSymbolFromCurrency("EUR");
const GBP = getSymbolFromCurrency("GBP");
const CAD = getSymbolFromCurrency("CAD");
const AUD = getSymbolFromCurrency("AUD");
const AED = getSymbolFromCurrency("AED");
const ZAR = getSymbolFromCurrency("ZAR");

export const priceData = [
  {
    id: "USD",
    country: "US",
    priceAstronaut: 25,
    priceRover: 24,
    priceSpaceShip: 22,
    priceSpacestation: 20,
    symbol: USD,
  },
  {
    id: "INR",
    country: "IN",
    priceAstronaut: 1500,
    priceRover: 1400,
    priceSpaceShip: 1200,
    priceSpacestation: 1000,
    symbol: INR,
  },
  //DE use for euro
  {
    id: "EUR",
    country: "DE",
    priceAstronaut: 22,
    priceRover: 20,
    priceSpaceShip: 18,
    priceSpacestation: 16,
    symbol: EURO,
  },
  //GB use for GBP
  {
    id: "GBP",
    country: "GB",
    priceAstronaut: 19,
    priceRover: 18,
    priceSpaceShip: 16,
    priceSpacestation: 15,
    symbol: GBP,
  },
  //$CA
  {
    id: "CAD",
    country: "CA",
    priceAstronaut: 32,
    priceRover: 30,
    priceSpaceShip: 28,
    priceSpacestation: 25,
    symbol: CAD,
  },
  //A$
  {
    id: "AUD",
    country: "AU",
    priceAstronaut: 34,
    priceRover: 32,
    priceSpaceShip: 30,
    priceSpacestation: 28,
    symbol: AUD,
  },
  //د.إ use for aed
  {
    id: "AED",
    country: "AE",
    priceAstronaut: 100,
    priceRover: 90,
    priceSpaceShip: 85,
    priceSpacestation: 80,
    symbol: AED,
  },
  {
    id: "ZAR",
    country: "ZA",
    priceAstronaut: 360,
    priceRover: 340,
    priceSpaceShip: 320,
    priceSpacestation: 300,
    symbol: ZAR,
  },
];

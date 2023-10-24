import Validator from "validator";
import isEmpty from "./is-empty";

export const validateContactUsForm = (data) => {
  let errors = {};

  // email
  if (!Validator.isEmail(data.email)) {
    errors.email = "Please enter valid email";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }
  //full name
  if (Validator.isEmpty(data.fullname)) {
    errors.fullname = "Name is required";
  }

  if (
    !Validator.isLength(data.fullname, { min: 2, max: 30 }) ||
    !Validator.isAlpha(data.fullname)
  ) {
    errors.fullname =
      "Name must be of 2 to 30 lowercase or uppercase characters";
  }
  // phone number 10 digits
  if (!Validator.isLength(data.pnumber, 10)) {
    errors.pnumber = "Phone number must be of 10 digits";
  }

  // phone number
  if (Validator.isEmpty(data.pnumber)) {
    errors.pnumber = "Phone number is required";
  }

  // country code
  // if (data.contactCountryCode.charAt(0) !== "+") {
  //   errors.contactCountryCode = "Please add + in country code";
  // }

  // country code
  //if (isNaN(data.c_code) || data.c_code.length === 0) {
  // errors.c_code = "Country code invalid";
  //}
  //if (Validator.isEmpty(data.c_code)) {
  // errors.c_code = "Required";
  //}

  // company name
  if (
    !Validator.isLength(data.cname, { min: 2, max: 30 }) ||
    !Validator.matches(data.cname, /^[a-zA-Z0-9\s]+$/)
  ) {
    errors.cname = "Name must be of 2 to 30 lowercase or uppercase characters";
  }

  // message
  if (
    !Validator.isLength(data.message, { min: 2, max: 100 }) ||
    !Validator.matches(data.message, /^[a-zA-Z0-9\s]+$/)
  ) {
    errors.message =
      "Message must be of lowercase, uppercase characters or numbers";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

import Validator from "validator";
import isEmpty from "./is-empty";

export const validateContactUsFormEbook = (data) => {
  let ebookErrors = {};

  // email
  if (!Validator.isEmail(data.email)) {
    ebookErrors.email = "Please enter valid email";
  }

  if (Validator.isEmpty(data.email)) {
    ebookErrors.email = "Email is required";
  }
  // first name
  if (Validator.isEmpty(data.fname)) {
    ebookErrors.fname = "Name is required";
  }

  if (
    !Validator.isLength(data.fname, { min: 2, max: 30 }) ||
    !Validator.isAlpha(data.fname)
  ) {
    ebookErrors.fname =
      "Name must be of 2 to 30 lowercase or uppercase characters";
  }

  // last name
  if (Validator.isEmpty(data.lname)) {
    ebookErrors.lname = "Name is required";
  }

  if (
    !Validator.isLength(data.lname, { min: 2, max: 30 }) ||
    !Validator.isAlpha(data.lname)
  ) {
    ebookErrors.lname =
      "Name must be of 2 to 30 lowercase or uppercase characters";
  }

  // company name
  if (
    !Validator.isLength(data.cname, { min: 2, max: 30 }) ||
    !Validator.matches(data.cname, /^[a-zA-Z0-9\s]+$/)
  ) {
    ebookErrors.cname =
      "Name must be of 2 to 30 lowercase or uppercase characters";
  }

  return {
    ebookErrors,
    isValid: isEmpty(ebookErrors),
  };
};

import React, { useState } from "react";

export default function BlogMainNewsLetter() {
  const [values, setValues] = useState({
    emailAddressNewsLetter: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitNewsLetter = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    console.log(values);
  };

  /*=======================================
         renderBlockThree
  ======================================*/

  const renderNewsLetter = () => {
    return (
      <div className="new-blog-newslatter-div text-left">
        <h4 className="new-blog-newslatter-subtitle">Subscribe to</h4>
        <h3 className="new-blog-newslatter-title">Our Newsletter</h3>
        <div className="new-blog-newslatter-serach-div row mx-0 align-items-center">
          <form onSubmit={handleSubmitNewsLetter}>
            <input
              onChange={handleChange}
              value={values.emailAddressNewsLetter}
              name="emailAddressNewsLetter"
              placeholder="Email Address"
              autoComplete="off"
            />
            <button
              type="submit"
              className="new-blog-newslatter-subscribe-button"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    );
  };

  /*=======================================
        main
  ======================================*/
  return <>{renderNewsLetter()}</>;
}

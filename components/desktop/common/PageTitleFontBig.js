import React from "react";

function PageTitleFontBig({ text, extraClass }) {
  return (
    <div>
      <h2 className={`title-text title-text-big text-center ${extraClass}`}>
        {text}
      </h2>
    </div>
  );
}

export default PageTitleFontBig;

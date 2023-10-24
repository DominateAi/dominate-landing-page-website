import React from "react";
import Link from "next/link";

export default function ComparisonPageBackButton() {
  return (
    <>
      <Link href="/">
        <a>
          <img
            // src={"/img/mobile/get/arrow.svg"}
            src={"./img/mobile-dark-theme/icon/left-arrow.png"}
            alt="back"
            className="back-img back-img--comparison"
          />
        </a>
      </Link>
    </>
  );
}

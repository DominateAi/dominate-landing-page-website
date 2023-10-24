import React from "react";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

function ScrollTop() {
  return (
    <div>
      <div>
        <ScrollUpButton
          ContainerClassName="AnyClassForContainer"
          TransitionClassName="AnyClassForTransition"
          StopPosition={0}
        >
          <div className="arrow-button">
            <img
              // src={"/img/desktop/arrow_up.svg"}
              src={"./img/desktop-dark-theme/icons/scroll-arrow.png"}
              alt="arrow"
              className="dominate-arrow-button"
            />
          </div>
        </ScrollUpButton>
      </div>
    </div>
  );
}

export default ScrollTop;

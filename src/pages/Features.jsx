import React, { forwardRef } from "react";
import css from "../styles/features.module.scss";
import image from "../Images/scanner-image.png";

const Features = forwardRef((props, ref) => {
  const gotoSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className={css.featureContainer} ref={ref}>
      <div className={css.right}>
        <img src={image} alt="..." className={css.img} />
      </div>
      <div className={css.left}>
        <p className={css.textOne}>Scan Document</p>
        <p className={css.textTwo}>
          Now you can scan the handwritten documents and convert them to the
          digital text with grammar auto correct facility.
        </p>
        <div>
          <span className={css.featureText}>Key Features:</span>
          <ol>
            <li> Accept any kind of image extensions.</li>
            <li>Download the digital text file in .pdf, .doc formats</li>
          </ol>
        </div>
        <button
          className={css.btn}
          onClick={() => {
            gotoSection(props.scanRef);
          }}
        >
          Try Now
        </button>
      </div>
    </div>
  );
});

export default Features;

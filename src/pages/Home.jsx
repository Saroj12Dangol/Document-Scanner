import React, { forwardRef } from "react";
import css from "../styles/home.module.scss";
import image from "../Images/web_home3.webp";
const Home = forwardRef((props, ref) => {
  const gotoSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className={css.homeContainer} ref={ref}>
      <div className={css.left}>
        <p className={css.textOne}>
          <span className={css.singleText}>H</span>andwritten{" "}
          <span className={css.singleText}>D</span>
          ocument <span className={css.singleText}>S</span>canner with{" "}
          <span className={css.singleText}>G</span>rammar{" "}
          <span className={css.singleText}>C</span>hecker
        </p>
        <p className={css.textTwo}>
          <span style={{ fontWeight: 700 }}>DScanner</span> - is a web
          application to provide <span className={css.singleText}>digital</span>{" "}
          text from <span className={css.singleText}>handwritten</span> text and
          also allows to check and auto-correct the{" "}
          <span className={css.singleText}>grammar</span>.
        </p>
        <button
          className={css.btn}
          onClick={() => {
            gotoSection(props.scanRef);
          }}
        >
          Try Now
        </button>
      </div>
      <div className={css.right}>
        <img src={image} alt="..." className={css.img} />
      </div>
    </div>
  );
});

export default Home;

import React from "react";
import style from "../style/LandingPage.module.css";
import LogoHeader from "./LogoHeader";

function LandingPage() {
  return (
    <div className={style.outerContainer}>
      <img
        src="/images/banner.png"
        alt="Banner"
        className={style.bannerImage}
      />
      <div className={style.landingPageContainer}>
        <LogoHeader />
      </div>
    </div>
  );
}
export default LandingPage;
/*
          
*/

import React from "react";
import style from "../style/SignUp.module.css";
import LogoHeader from "./LogoHeader";
import AdditionalInfo from "./AdditionalInfo";

function SignUp() {
  return (
    <div className={style.signUpContainer}>
      <LogoHeader
        signup="used in sign up"
        customStyleLogoContainer={{
          background: "white",
          borderBottom: "5px solid darkgrey",
        }}
        logoCustomStyle={{ marginLeft: "6vw" }}
        customStyleOptionDiv={{ marginRight: "5vw" }}
        customStyleButton={{
          backgroundColor: "white",
          color: "black",
          fontSize: "1.7em",
        }}
      />
      <div className={style.contentDiv}>
        <img src="icon" className={style.contentDivImg} />
        <p className={style.contentDivPara1}>Step 1 of 3</p>
        <h2 className={style.contentDivHeading}>
          Finishing setting up your account.
        </h2>
        <p className={style.contentDivPara2}>
          Netflix is personalised for you.
        </p>
        <p className={style.contentDivPara3}>
          Create a password to watch on any device
        </p>
        <button className={style.contentDivButton}>Click me</button>
      </div>
      <AdditionalInfo
        item1="FAQ"
        item2="Privacy"
        item5="Help Center"
        item6="Cookie Preference"
        item9="Netflix Shop"
        item10="Corporate Information"
        item13="Terms of Use"
        signupAdditionalInfoContainerStyle={style.additionalInfoContainer}
        signupContactParaStyle={style.contactPara}
        signupNavlinkStyle={style.navlink}
        signupDropdownStyle={style.dropdown}
        signupCountryParaStyle={style.countryPara}
      />
    </div>
  );
}

export default SignUp;

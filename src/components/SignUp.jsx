import React from "react";
import style from "../style/SignUp.module.css";
import LogoHeader from "./LogoHeader";
import AdditionalInfo from "./AdditionalInfo";
import Registeration from "./Registeration";
import RegisterationForm from "./RegisterationForm";
import ChoosePlan from "./ChoosePlan";
import PlanForm from "./PlanForm";
import PaymentPicker from "./PaymentPicker";

function SignUp({ child }) {
  return (
    <div className={style.signUpContainer}>
      <LogoHeader
        signup="used in sign up"
        customStyleLogoContainer={{
          background: "white",
          borderBottom: "5px solid darkgrey",
        }}
        logoCustomStyle={{
          margin: "3vh",
          marginLeft: "6vw",
          fontSize: "2em",
        }}
        customStyleOptionDiv={{ marginRight: "5vw" }}
        customStyleButton={{
          backgroundColor: "white",
          color: "black",
          fontSize: "1.5em",
        }}
      />

      {child === "registeration" && <Registeration />}
      {child === "registerationform" && <RegisterationForm />}
      {child === "choosePlan" && <ChoosePlan />}
      {child === "planForm" && <PlanForm />}
      {child === "paymentPicker" && <PaymentPicker/> }

      <AdditionalInfo
        item1="FAQ"
        item2="Privacy"
        item5="Help Center"
        item6="Cookie Preference"
        item9="Netflix Shop"
        item10="Corporate Information"
        item13="Terms of Use"
        signupAdditionalInfoContainerStyle={style.additionalInfoContainer}
        signupInfoChildDivContainerStyle={style.infoChildDivContainer}
        signupContactParaStyle={style.contactPara}
        signupNavlinkStyle={style.navlink}
        signupDropdownStyle={style.dropdown}
        signupCountryParaStyle={style.countryPara}
      />
    </div>
  );
}

export default SignUp;

/*
      <div className={style.contentDiv}>
        <img src="/images/combined.png" className={style.contentDivImg} />
        <p className={style.contentDivPara1}>Step 1 of 3</p>
        <h2 className={style.contentDivHeading}>
          Finishing setting up your account.
        </h2>
        <p className={style.contentDivPara2}>
          Netflix is personalised for you.
        </p>
        <p className={style.contentDivPara3}>
          Create a password to watch on any device at any time.
        </p>
        <button className={style.contentDivButton} onClick={handleButtonClick}>
          Next
        </button>
      </div>
*/

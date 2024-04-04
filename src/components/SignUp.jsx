import React from "react";
import style from "../style/SignUp.module.css";
import LogoHeader from "./LogoHeader";
import AdditionalInfo from "./AdditionalInfo";
import Registeration from "./Registeration";
import RegisterationForm from "./RegisterationForm";
import ChoosePlan from "./ChoosePlan";
import PlanForm from "./PlanForm";
import PaymentPicker from "./PaymentPicker";
import CreditOption from "./CreditOption";
import UpiOption from "./UpiOption";
import UpiOrderConfirm from "./UpiOrderConfirm";

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
          fontSize: "1em",
        }}
      />

      {child === "registeration" && <Registeration />}
      {child === "registerationform" && <RegisterationForm />}
      {child === "choosePlan" && <ChoosePlan />}
      {child === "planForm" && <PlanForm />}
      {child === "paymentPicker" && <PaymentPicker />}
      {child === "creditOption" && <CreditOption />}
      {child === "upiOption" && <UpiOption />}
      {child === "upiorderconfirm" && <UpiOrderConfirm />}

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

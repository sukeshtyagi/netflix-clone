import React from "react";
import style from "../style/SignUp.module.css";
import LogoHeader from "./LogoHeader";

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
    </div>
  );
}

export default SignUp;

import React from "react";
import style from "../style/UpiOption.module.css";
import CreditOption2 from "./CreditOption2";

function UpiOption() {
  return (
    <CreditOption2
      upiComponent="UPI "
      upiImageStyle={style.upiImage}
      upiInfoStyle={style.upiInfo}
    />
  );
}

export default UpiOption;

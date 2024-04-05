import React from "react";
import style from "../style/UpiOption.module.css";
import UpiOptionParentComponent from "./UpiOptionParentComponent";

function UpiOption() {
  return (
    <UpiOptionParentComponent
      upiComponent="UPI "
      upiImageStyle={style.upiImage}
      upiInfoStyle={style.upiInfo}
    />
  );
}

export default UpiOption;

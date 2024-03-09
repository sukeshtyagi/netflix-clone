import React from "react";
import style from "../style/PaymentPicker.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";

function PaymentPicker() {
  return (
    <div className={style.paymentContainer}>
      <div className={style.contentDiv}>
        <p className={style.step}>Step 3 of 3</p>
        <h1 className={style.heading}>Choose how to pay</h1>
        <p className={style.description}>
          Your payment is encrypted and you can change your payment method any
          time.
        </p>
        <p className={style.line4}>Secure for peace of mind.</p>
        <p className={style.line5}>Cancel easy online.</p>
        <div className={style.encryption}>
          <p className={style.text}>End-to-end encrypted</p>
          <FontAwesomeIcon icon={faLock} className={style.icon} />
        </div>

        <div className={style.card}>
          <p className={style.text}>Credit or Debit Card</p>
          <FontAwesomeIcon icon={faArrowRight} className={style.icon} />
        </div>

        <div className={style.upi}>
          <p className={style.text}>UPI Autopay</p>
          <FontAwesomeIcon icon={faArrowRight} className={style.icon} />
        </div>
      </div>
    </div>
  );
}

export default PaymentPicker;

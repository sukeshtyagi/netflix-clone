import React from "react";
import style from "../style/PaymentPicker.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";

function PaymentPicker() {
  return (
    <div className={style.paymentContainer}>
      <p className="step">step 3 of 3</p>
      <h1 className="heading">Choose how to pay</h1>
      <p className="description">
        Your payment is encrypted and you can change your payment method any
        time.
      </p>
      <p className="line4">Secure for peace of mind.</p>
      <p className="line">Cancel easy online.</p>
      <div className="encryption">
        <p className="text">End-to-end encrypted</p>
        <FontAwesomeIcon icon={faLock} />
      </div>

      <div className="card">
        <p className="text">Credit or Debit Card</p>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>

      <div className="upi">
        <p className="text">UPI Auotpay</p>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
}

export default PaymentPicker;

import React, { useState, useEffect } from "react";
import style from "../style/PaymentPicker.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function PaymentPicker() {
  const navigate = useNavigate();
  const [allowNavigation, setAllowNavigation] = useState(null);

  const handleCardOption = () => {
    setAllowNavigation("card");
  };

  const handleUpiOption = () => {
    setAllowNavigation("upi");
  };

  useEffect(() => {
    if (allowNavigation === "card") {
      navigate("/signup/creditoption");
    }
    if (allowNavigation === "upi") {
      navigate("/signup/upiOption");
    }
  }, [allowNavigation]);

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
        <div className={style.encryptionDiv}>
          <p className={style.text1}>End-to-end encrypted</p>
          <FontAwesomeIcon icon={faLock} className={style.lockIcon} />
        </div>

        <div className={style.card} onClick={handleCardOption}>
          <p className={style.text2}>Credit or Debit Card</p>
          <FontAwesomeIcon icon={faArrowRight} className={style.arrowIcon} />
        </div>

        <div className={style.upi} onClick={handleUpiOption}>
          <p className={style.text3}>UPI Autopay</p>
          <FontAwesomeIcon icon={faArrowRight} className={style.arrowIcon} />
        </div>
      </div>
    </div>
  );
}

export default PaymentPicker;

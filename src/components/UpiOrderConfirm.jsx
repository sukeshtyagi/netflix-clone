import React, { useState } from "react";
import style from "../style/CreditOption.module.css";
import { NavLink, useNavigate } from "react-router-dom";

function UpiOrderConfirm() {
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [error, setError] = useState(false);
  const price = localStorage.getItem("price");

  const plan = localStorage.getItem("plan");
  const upiId = localStorage.getItem("UPI ID");

  const handleClick = () => {
    const agreementCheckbox = document.getElementById("agreementCheckbox");
    if (agreementCheckbox.checked) {
      setIsButtonDisabled(true);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      setError(true);
    }
  };

  return (
    <div className={style.paymentContainer}>
      <div className={style.contentDiv}>
        <h1 className={style.heading}>Set up your credit or debit card</h1>

        <div className={style.cardDetailContainer}>
          <div className={style.planDetail}>
            <div className={style.planInnerDiv}>
              <p className={style.cost}>&#x20B9; {price}/month</p>
              <p className={style.planName}>{plan}</p>
            </div>
            <NavLink to="/signup/planform" className={style.navlinkChangePlan}>
              Change
            </NavLink>
          </div>

          <div className={style.planDetail} style={{ marginTop: "1vh" }}>
            <div className={style.planInnerDiv}>
              <p className={style.cost}>UPI AutoPay</p>
              <p className={style.planName} style={{ marginTop: "0" }}>
                {upiId}
              </p>
            </div>
            <NavLink to="/signup/upiOption" className={style.navlinkChangePlan}>
              Change
            </NavLink>
          </div>

          <p className={style.info1}>
            Any payment above &#x20B9; 2000 shall need additional
            authentification.
          </p>
          <p className={style.info2}>
            By checking the checkBox below, you agree to our
            <NavLink className={style.navlinkInfo}>
              Terms of Use, Privacy Statement
            </NavLink>
            , and that you're over 18.Netflix will automatically continue your
            membership and charge the membership fee(currently &#x20B9; {price}
            /month) to your payment method untill you cancel.You may cancel at
            any time to avoid future charges.
          </p>

          <div className={style.checkboxContainer}>
            <input type="checkbox" id="agreementCheckbox" />
            <label className={style.checkboxLabel}>I agree</label>
          </div>

          {error && (
            <p className={style.errorMsg}>
              Click I agree to continue to payment.
            </p>
          )}

          {!isButtonDisabled && (
            <button onClick={handleClick} className={style.contentDivButton}>
              Start Membership
            </button>
          )}
          {isButtonDisabled && (
            <button onClick={handleClick} className={style.contentDivButton}>
              Processing payment
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UpiOrderConfirm;

/*
 
*/

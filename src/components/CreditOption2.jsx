import React, { useState } from "react";
import style from "../style/CreditOption.module.css";
import { NavLink, useNavigate } from "react-router-dom";

function CreditOption2({ upiComponent, upiImageStyle, upiInfoStyle }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [upiId, setUpiId] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleUpiIdChange = (event) => {
    const newUpiId = event.target.value;
    setUpiId(newUpiId);
    localStorage.setItem("UPI ID", newUpiId);
  };

  const handleClick = () => {
    if (!selectedOption || !upiId) {
      setError(true);
    } else {
      setError(false);
      navigate("/signup/upiorderconfirm/");
    }
  };

  return (
    <div className={style.paymentContainer}>
      <div className={style.contentDiv}>
        <p className={style.step}>
          Step <span>3</span> of <span>3</span>
        </p>
        {upiComponent && <h1 className={style.heading}>Set up UPI AutoPay</h1>}

        {upiComponent && (
          <img
            src="/images/upi.png"
            alt="Cards we accept"
            className={upiImageStyle}
          />
        )}

        {upiComponent && (
          <p className={upiInfoStyle}>
            You can change this recurring payment any time in your settings.
          </p>
        )}

        {upiComponent && (
          <div className={style.cardDetailContainer}>
            <div className={style.cardNumberDiv}>
              <select
                className={style.cardNumber}
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">Select your UPI app</option>
                <option value="paytm">Paytm</option>
                <option value="phonepay">PhonePay</option>
                <option value="googlepay">GooglePay</option>
              </select>
            </div>

            <div className={style.cardDetails}>
              <input
                type="text"
                className={style.expiryDate}
                style={{
                  height: "7.1vh",
                  backgroundColor: "rgba(199,199,199,0.4)",
                }}
                placeholder="UPI ID"
                value={upiId}
                onChange={handleUpiIdChange}
              />
            </div>
            <p>
              <NavLink className={style.navlinkCaptcha}>
                How do I find my UPI ID?
              </NavLink>
            </p>

            {error && (
              <p className={style.errorMsg}>Fill in the details to continue.</p>
            )}

            <button onClick={handleClick} className={style.contentDivButton}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreditOption2;

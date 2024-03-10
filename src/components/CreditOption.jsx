import React from "react";
import style from "../style/CreditOption.module.css";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

function CreditOption() {
  const price = localStorage.getItem("price");
  const plan = localStorage.getItem("plan");

  return (
    <div className={style.paymentContainer}>
      <div className={style.contentDiv}>
        <p className={style.step}>
          Step <span>3</span> of <span>3</span>
        </p>
        <h1 className={style.heading}>Set up your credit or debit card</h1>
        <img
          src="/images/card.png"
          alt="Cards we accept"
          className={style.cardImage}
        />
        <div className={style.cardDetailContainer}>
          <div className={style.cardNumberDiv}>
            <input
              type="text"
              className={style.cardNumber}
              placeholder="Card Number"
            />
            <FontAwesomeIcon icon={faCreditCard} className={style.cardIcon} />
          </div>

          <div className={style.cardDetails}>
            <input type="text" className={style.expiryDate} />

            <div className={style.cvvDetails}>
              <input type="text" className={style.cvvDate} />
              <FontAwesomeIcon icon={faLock} className={style.lockIcon} />
            </div>
          </div>

          <div className={style.cardHolderName}>
            <input
              type="text"
              className={style.name}
              placeholder="Name on card"
            />
          </div>
        </div>

        <div className={style.planDetail}>
          <p className={style.cost}>&#x20B9; {price}/month</p>
          <p className={style.planName}>{plan}</p>
          <NavLink className={style.navlinkChangePlan}>Change</NavLink>
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
          /month) to your payment method untill you cancel.You may cancel at any
          time to avoid future charges.
        </p>
        <button className={style.contentDivButton}>Start Membership</button>
        <p className={style.captcha}>
          This page is protected by google reCAPTCHA to ensure you're not a bot.
          <NavLink className={style.navlinkCaptcha}>Learn more</NavLink>
        </p>
      </div>
    </div>
  );
}

export default CreditOption;

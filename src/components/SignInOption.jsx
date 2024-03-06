import React, { useState } from "react";
import style from "../style/SignInOption.module.css";

function SignInOption({
  landingPageHeader,
  customStylesBodyDiv,
  customStylesInput,
  customStylesButton,
  customStylesGetStartedDiv,
  customStylesBodyDivPara,
}) {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className={style.bodyDiv} style={customStylesBodyDiv}>
      {landingPageHeader && (
        <>
          <h1>Unlimited movies, TV shows and more</h1>
          <p className={style.priceLine}>Starts at ₹149. Cancel anytime.</p>
        </>
      )}

      <p className={style.bodyDivPara} style={customStylesBodyDivPara}>
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className={style.getStartedDiv} style={customStylesGetStartedDiv}>
        <input
          className={style.getStartedDivInput}
          style={customStylesInput}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          onClick={() => console.log(email)}
          className={style.getStartedDivButton}
          style={customStylesButton}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default SignInOption;

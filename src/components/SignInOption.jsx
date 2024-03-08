import React, { useState } from "react";
import style from "../style/SignInOption.module.css";
import { useNavigate } from "react-router-dom";

function SignInOption({
  landingPageHeader,
  customStylesBodyDiv,
  customStylesInput,
  customStylesButton,
  customStylesGetStartedDiv,
  customStylesBodyDivPara,
}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handelSignUpClick = () => {
    if (isValidEmail(email)) {
      localStorage.setItem("userEmail", email);
      navigate("/registeration");
    } else {
      setErrorMsg(true);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9._-]+@(gmail\.com|yahoo\.com|rediffmail\.com)$/i;
    return emailRegex.test(email);
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
          onClick={handelSignUpClick}
          className={style.getStartedDivButton}
          style={customStylesButton}
        >
          Get Started
        </button>
        {errorMsg && (
          <p className={style.errorMsg}>Enter Correct Email Id To Proceed.</p>
        )}
      </div>
    </div>
  );
}

export default SignInOption;

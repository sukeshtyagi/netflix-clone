import React, { useState } from "react";
import style from "../style/LandingPage.module.css";
import LogoHeader from "./LogoHeader";

function LandingPage() {
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className={style.outerContainer}>
      <img
        src="/images/banner.png"
        alt="Banner"
        className={style.bannerImage}
      />
      <div className={style.landingPageContainer}>
        <LogoHeader />

        <div className={style.bodyDiv}>
          <h1>Unlimited movies, TV shows and more</h1>
          <p className={style.priceLine}>Starts at ₹149. Cancel anytime.</p>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className={style.getStartedDiv}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <button onClick={() => console.log(email)}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
/*
          
*/

import React, { useState } from "react";
import style from "../style/LandingPage.module.css";
import LogoHeader from "./LogoHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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

      <div className={style.reasonsDiv}>
        <p>More reasons to join</p>
        <div className={style.reasonsChildDivContainer}>
          <div className={style.reasonsChildDiv}>
            <h2>Stories tailored to your taste</h2>
            <img
              src="/images/handStar.png"
              alt=""
              className={style.reasonsImage1}
            />
          </div>
          <div className={style.reasonsChildDiv}>
            <h2>Cancel or switch plans anytime</h2>
            <img
              src="/images/handshake.png"
              alt=""
              className={style.reasonsImage2}
            />
          </div>
          <div className={style.reasonsChildDiv}>
            <h2>A place just for kids</h2>
            <img
              src="/images/heart.png"
              alt=""
              className={style.reasonsImage3}
            />
          </div>
          <div className={style.reasonsChildDiv}>
            <h2>For your phone,laptop,tablet and TV</h2>
            <img
              src="/images/mobile.png"
              alt=""
              className={style.reasonsImage4}
            />
          </div>
        </div>
      </div>

      <div className={style.faqContainer}>
        <p>Frequently Asked Questions</p>
        <div className={style.faqChildDivContainer}>
          <div className={style.faqChildDiv}>
            <p>What is Netflix?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>

          <div className={style.faqChildDiv}>
            <p>How much does Netflix?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>

          <div className={style.faqChildDiv}>
            <p>Where can I watch?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>

          <div className={style.faqChildDiv}>
            <p>How do I cancel?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>

          <div className={style.faqChildDiv}>
            <p>What can I watch on Netflix?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>

          <div className={style.faqChildDiv}>
            <p>Is Netflix good for kids?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;

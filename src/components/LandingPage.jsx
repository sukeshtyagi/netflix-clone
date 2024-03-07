import React, { useState } from "react";
import style from "../style/LandingPage.module.css";
import LogoHeader from "./LogoHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SignInOption from "./SignInOption";
import { NavLink } from "react-router-dom";

function LandingPage() {
  const hindiIcon = <span className={style.icon}>🇮🇳</span>;
  const englishIcon = <span className={style.icon}>🇺🇸</span>;

  const [isActive, setIsActive] = useState(false);

  const handleDropdownClick = () => {
    setIsActive(true);
  };

  const handleDropdownBlur = () => {
    setIsActive(false);
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
        <SignInOption landingPageHeader="used in landing page" />
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
      <SignInOption
        customStylesBodyDiv={{
          backgroundColor: "black",
          marginTop: 0,
          marginBottom: 0,
          borderBottom: "5px solid firebrick",
          paddingBottom: 0,
          height: "30vh",
        }}
        customStylesBodyDivPara={{
          textAlign: "left",
          marginLeft: "7vw",
          marginTop: "8vh",
        }}
        customStylesGetStartedDiv={{
          justifyContent: "flex-start",
          marginLeft: "6vw",
          marginTop: "2vh",
        }}
        customStylesInput={{
          width: "50vw",
          marginLeft: "0",
        }}
        customStylesButton={{
          width: "20vw",
        }}
      />

      <div className={style.additionalInfoContainer}>
        <p className={style.contactPara}>Questions? Call 00-800-919-1964</p>
        <div className={style.infoChildDivContainer}>
          <div className={style.infoChildDiv}>
            <NavLink to="/faq" className={style.navlink}>
              FAQ
            </NavLink>
            <NavLink to="/investor" className={style.navlink}>
              Investor Relations
            </NavLink>
            <NavLink to="/privacy" className={style.navlink}>
              Privacy
            </NavLink>
            <NavLink to="/speedtest" className={style.navlink}>
              Speed Test
            </NavLink>
          </div>

          <div className={style.infoChildDiv}>
            <NavLink to="/help-center" className={style.navlink}>
              Help Center
            </NavLink>
            <NavLink to="/jobs" className={style.navlink}>
              Jobs
            </NavLink>
            <NavLink to="/cookie-preference" className={style.navlink}>
              Cookie Preference
            </NavLink>
            <NavLink to="/legal-notices" className={style.navlink}>
              Legal Notices
            </NavLink>
          </div>

          <div className={style.infoChildDiv}>
            <NavLink to="/account" className={style.navlink}>
              Account
            </NavLink>
            <NavLink to="/ways-to-watch" className={style.navlink}>
              Ways to Watch
            </NavLink>
            <NavLink to="/corporate-info" className={style.navlink}>
              Corporate Info
            </NavLink>
            <NavLink to="/only-on-netflix" className={style.navlink}>
              Only on Netflix
            </NavLink>
          </div>

          <div className={style.infoChildDiv}>
            <NavLink to="/media-center" className={style.navlink}>
              Media Center
            </NavLink>
            <NavLink to="/terms-of-use" className={style.navlink}>
              Terms of Use
            </NavLink>
            <NavLink to="/contact" className={style.navlink}>
              Contact
            </NavLink>
          </div>
        </div>

        <div
          className={`${style.dropdownContainer} ${
            isActive ? style.active : ""
          }`}
        >
          <select
            className={style.dropdown}
            onClick={handleDropdownClick}
            onBlur={handleDropdownBlur}
          >
            <option value="option2">{hindiIcon} Hindi</option>
            <option value="option1">{englishIcon} English</option>
          </select>
        </div>
        <p className={style.countryPara}>Netflix India</p>
      </div>
    </div>
  );
}
export default LandingPage;

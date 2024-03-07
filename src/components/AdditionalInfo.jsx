import React, { useState } from "react";
import style from "../style/AdditionalInfo.module.css";
import { NavLink } from "react-router-dom";

function AdditionalInfo() {
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
        className={`${style.dropdownContainer} ${isActive ? style.active : ""}`}
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
  );
}

export default AdditionalInfo;

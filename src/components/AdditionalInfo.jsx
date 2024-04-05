import React, { useState } from "react";
import style from "../style/AdditionalInfo.module.css";
import { NavLink } from "react-router-dom";

function AdditionalInfo({
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
  item15,
  signupOuterContainerStyle,
  customStyleAdditionalInfoContainer,
  signupInfoChildDivContainerStyle,
  signupAdditionalInfoContainerStyle,
  signupContactParaStyle,
  signupNavlinkStyle,
  signupDropdownStyle,
  signupCountryParaStyle,
}) {
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
    <div className={`${style.outerContainer} ${signupOuterContainerStyle} `}>
      <div
        className={`${style.additionalInfoContainer} 
                  ${signupAdditionalInfoContainerStyle}`}
        style={customStyleAdditionalInfoContainer}
      >
        <p className={`${style.contactPara} ${signupContactParaStyle}`}>
          Questions? Call 00-800-919-1964
        </p>

        <div
          className={`${style.infoChildDivContainer} ${signupInfoChildDivContainerStyle}`}
        >
          <div className={style.infoChildDiv}>
            <NavLink
              to={`/${item1}`}
              className={`${style.navlink} ${signupNavlinkStyle}`}
            >
              {item1}
            </NavLink>
            <NavLink
              to={`/${item2}`}
              className={`${style.navlink} ${signupNavlinkStyle}`}
            >
              {item2}
            </NavLink>
            <NavLink
              to={`/${item3}`}
              className={`${style.navlink} ${signupNavlinkStyle}`}
            >
              {item3}
            </NavLink>
            <NavLink
              to={`/${item4}`}
              className={`${style.navlink} ${signupNavlinkStyle}`}
            >
              {item4}
            </NavLink>
          </div>
          <div className={style.infoChildDiv}>
            <NavLink
              to={`/${item5}-center`}
              className={`${style.navlink} ${signupNavlinkStyle}`}
            >
              {item5}
            </NavLink>
            <NavLink
              to={`/${item6}`}
              className={`${style.navlink} ${signupNavlinkStyle}`}
            >
              {item6}
            </NavLink>
            <NavLink
              to={`/${item7}-preference`}
              className={`${style.navlink} ${signupNavlinkStyle}`}
            >
              {item7}
            </NavLink>
            <NavLink
              to={`/${item8}-notices`}
              className={`${style.navlink} ${signupNavlinkStyle}`}
            >
              {item8}
            </NavLink>
          </div>
          <div className={style.infoChildDiv}>
            <NavLink
              to={`/${item9}`}
              className={`${style.navlink} ${signupNavlinkStyle}`}
            >
              {item9}
            </NavLink>
            <NavLink
              to={`/${item10}-to-watch`}
              className={`${style.navlink} ${signupNavlinkStyle}`}
            >
              {item10}
            </NavLink>
            <NavLink
              to={`/${item11}-info`}
              className={`${style.navlink} ${signupNavlinkStyle}`}
            >
              {item11}
            </NavLink>
            <NavLink
              to={`/${item12}-on-netflix`}
              className={`${style.navlink} ${signupNavlinkStyle}`}
            >
              {item12}
            </NavLink>
          </div>
          <div className={style.infoChildDiv}>
            <NavLink
              to={`/${item13}-on-netflix`}
              className={`${style.navlink} ${signupNavlinkStyle}`}
            >
              {item13}
            </NavLink>
            <NavLink
              to={`/${item14}-on-netflix`}
              className={`${style.navlink} ${signupNavlinkStyle}`}
            >
              {item14}
            </NavLink>
            <NavLink
              to={`/${item15}-on-netflix`}
              className={`${style.navlink} ${signupNavlinkStyle}`}
            >
              {item15}
            </NavLink>
          </div>
        </div>

        <div className={`${style.dropdownContainer} ${signupDropdownStyle}`}>
          <select
            className={style.dropdown}
            onClick={handleDropdownClick}
            onBlur={handleDropdownBlur}
          >
            <option value="option2">{hindiIcon} Hindi</option>
            <option value="option1">{englishIcon} English</option>
          </select>
        </div>

        <p className={`${style.countryPara} ${signupCountryParaStyle}`}>
          Netflix India
        </p>
      </div>
    </div>
  );
}

export default AdditionalInfo;

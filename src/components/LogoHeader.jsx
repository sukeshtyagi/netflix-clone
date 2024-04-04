import React from "react";
import style from "../style/LogoHeader.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

function LogoHeader({
  login,
  logoCustomStyle,
  customStyleLogoContainer,
  signup,
  customStyleOptionDiv,
  customStyleButton,
}) {
  const userEmail = localStorage.getItem("userEmail");
  const navigate = useNavigate();

  const hindiIcon = <span className={style.icon}>🇮🇳</span>;
  const englishIcon = <span className={style.icon}>🇺🇸</span>;

  return (
    <div className={style.logoContainer} style={customStyleLogoContainer}>
      <p
        className={style.logo}
        style={logoCustomStyle}
        onClick={() => navigate("/")}
      >
        NETFLIX
      </p>

      {!login && !signup && !userEmail && (
        <>
          <div className={style.headerButton}>
            <FontAwesomeIcon icon={faEllipsis} className={style.icon} />
          </div>
          <div className={style.optionDiv}>
            <select className={style.dropdown}>
              <option value="option2">{hindiIcon} Hindi</option>
              <option value="option1">{englishIcon} English</option>
            </select>
            <button onClick={() => navigate("/login")} className={style.button}>
              Sign In
            </button>
          </div>
        </>
      )}

      {!login && !signup && userEmail && (
        <div className={style.optionDiv}>
          <select className={style.dropdown}>
            <option value="option2">{hindiIcon} Hindi</option>
            <option value="option1">{englishIcon} English</option>
          </select>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className={style.button}
          >
            Sign Out
          </button>
        </div>
      )}

      {signup && userEmail && (
        <div className={style.optionDiv} style={customStyleOptionDiv}>
          <button
            onClick={() => {
              localStorage.removeItem("userEmail");
              navigate("/login");
              console.log("button executed");
            }}
            className={style.button}
            style={customStyleButton}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default LogoHeader;

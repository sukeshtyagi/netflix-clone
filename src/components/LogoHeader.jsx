import React from "react";
import style from "../style/LogoHeader.module.css";
import { useNavigate } from "react-router-dom";

function LogoHeader({ login, logoCustomStyle }) {
  const navigate = useNavigate();
  const hindiIcon = <span className={style.icon}>🇮🇳</span>;
  const englishIcon = <span className={style.icon}>🇺🇸</span>;

  return (
    <div className={style.logoContainer}>
      <p
        className={style.logo}
        style={logoCustomStyle}
        onClick={() => navigate("/")}
      >
        NETFLIX
      </p>

      {!login && (
        <div className={style.optionDiv}>
          <select className={style.dropdown}>
            <option value="option2">{hindiIcon} Hindi</option>
            <option value="option1">{englishIcon} English</option>
          </select>
          <button onClick={() => navigate("/login")} className={style.button}>
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}

export default LogoHeader;

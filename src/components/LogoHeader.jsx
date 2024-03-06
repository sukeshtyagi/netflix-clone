import React from "react";
import style from "../style/LogoHeader.module.css";
import { useNavigate } from "react-router-dom";

function LogoHeader() {
  const navigate = useNavigate();
  const englishIcon = <span className={style.icon}>🇺🇸</span>;
  const hindiIcon = <span className={style.icon}>🇮🇳</span>;

  return (
    <div className={style.logoContainer}>
      <p className={style.logo} onClick={() => navigate("/")}>
        NETFLIX
      </p>

      <div className={style.optionDiv}>
        <select className={style.dropdown}>
          <option value="option1">{englishIcon} English</option>
          <option value="option2">{hindiIcon} Hindi</option>
        </select>
        <button onClick={() => navigate("/login")} className={style.button}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default LogoHeader;

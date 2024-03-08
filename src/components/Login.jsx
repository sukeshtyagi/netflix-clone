import React from "react";
import LogoHeader from "./LogoHeader";
import style from "../style/Login.module.css";
import { NavLink } from "react-router-dom";
import AdditionalInfo from "./AdditionalInfo";

function Login() {
  return (
    <div className={style.loginContainer}>
      <div className={style.overlay}>
        <LogoHeader
          login="login as child comp"
          logoCustomStyle={{ marginLeft: "6vw" }}
        />

        <div className={style.signInOuterContainer}>
          <div className={style.signIn}>
            <h1>Sign In</h1>
            <input type="text" placeholder="Username or Phone Number" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </div>
          <div className={style.rememberContainer}>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
            <NavLink className={style.navlinkRememberContainer} to="/need-help">
              Need Help?
            </NavLink>
          </div>

          <div className={style.signUpOptionContainer}>
            <p className={style.signUpPara}>
              New to Netflix ?
              <NavLink to="/" className={style.navlinkSignUpPara}>
                Sign up now.
              </NavLink>
            </p>
            <p className={style.signUpCaptcha}>
              This page is protected by google reCAPTCHA to ensure you're not a
              bot.
              <NavLink className={style.navlinkSignUpCaptcha}>
                Learn more
              </NavLink>
            </p>
          </div>
        </div>
        <AdditionalInfo
          item1="FAQ"
          item2="Cookie Preference"
          item5="Help Center"
          item6="Corporate Information"
          item9="Terms of Use"
          item13="Privacy"
          customStyleAdditionalInfoContainer={{ marginTop: "15vh" }}
        />
      </div>
    </div>
  );
}

export default Login;

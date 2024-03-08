import React from "react";
import style from "../style/RegisterationForm.module.css";
import { useNavigate } from "react-router-dom";

function RegisterationForm() {
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userEmail");

  const handleButtonClick = () => {
    navigate("/signup");
  };

  return (
    <div className={style.formContainer}>
      <div className={style.contentDiv}>
        <p className={style.contentDivLine1}>Step 1 of 3</p>

        <h1 className={style.contentDivHeading1}>Welcome back!</h1>

        <h1 className={style.contentDivHeading2}>Joining Netflix is easy.</h1>

        <p className={style.contentDivLine2}>
          Enter your password and you'll be watching in no time.
        </p>

        <p className={style.emailLabel}>Email</p>
        {/*update this conditional rendering*/}
        {!userEmail && (
          <p className={style.userEmail}>sukeshtyagi05@gmail.comp</p>
        )}

        <input
          type="password"
          className={style.inputPassword}
          placeholder="Enter your password"
        />

        <p className={style.forgotPassword}>Forgot your password?</p>

        <button className={style.contentDivButton} onClick={handleButtonClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default RegisterationForm;

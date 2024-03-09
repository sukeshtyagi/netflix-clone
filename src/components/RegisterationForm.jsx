import React, { useState } from "react";
import style from "../style/RegisterationForm.module.css";
import { useNavigate } from "react-router-dom";

function RegisterationForm() {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userEmail");

  const handleButtonClick = () => {
    if (validatePassword(password)) {
      navigate("/signup");
    } else {
      setErrorMessage(true);
    }
  };
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
    return passwordRegex.test(password);
  };

  console.log(userEmail);

  return (
    <div className={style.formContainer}>
      <div className={style.contentDiv}>
        <p className={style.contentDivLine1}>Step 1 of 3</p>
        <h1 className={style.contentDivHeading1}>Welcome back!</h1>
        <h1 className={style.contentDivHeading2}>Joining Netflix is easy.</h1>
        <p className={style.contentDivLine2}>
          Enter your password and Pou'll be watching in no time.
        </p>
        <p className={style.emailLabel}>Email</p>
        {userEmail && <p className={style.userEmail}>{userEmail}</p>}
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className={style.inputPassword}
          placeholder="Enter your password"
        />
        {errorMessage && (
          <>
            <p className={style.errorMessage1}>
              Password must be at least 6 characters long
            </p>
            <p className={style.errorMessage}>
              Must include lowercase, uppercase.
            </p>
            <p className={style.errorMessage3}>
              Must include number, and special character.
            </p>
          </>
        )}
        <p className={style.forgotPassword}>Forgot your password?</p>
        <button className={style.contentDivButton} onClick={handleButtonClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default RegisterationForm;

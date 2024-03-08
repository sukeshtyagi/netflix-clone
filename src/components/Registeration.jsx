import React from "react";
import style from "../style/Registeration.module.css";
import { useNavigate } from "react-router-dom";

function Registeration() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/registeration/form");
  };

  return (
    <div className={style.registerationContainer}>
      <div className={style.contentDiv}>
        <img src="/images/combined.png" className={style.contentDivImg} />
        <p className={style.contentDivPara1}>Step 1 of 3</p>
        <h2 className={style.contentDivHeading}>
          Finishing setting up your account.
        </h2>
        <p className={style.contentDivPara2}>
          Netflix is personalised for you.
        </p>
        <p className={style.contentDivPara3}>
          Create a password to watch on any device at any time.
        </p>
        <button className={style.contentDivButton} onClick={handleButtonClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Registeration;

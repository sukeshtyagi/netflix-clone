import React from "react";
import style from "../style/ChoosePlan.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function ChoosePlan() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/signup/planform");
  };

  return (
    <div className={style.choosePlanContainer}>
      <div className={style.contentDiv}>
        <FontAwesomeIcon icon={faCheck} className={style.iconOuter} />
        <p className={style.contentDivLine1}>Step 2 of 3</p>
        <h1 className={style.contentDivHeading1}>Choose your plan.</h1>

        <div className={style.lineDivContainer}>
          <FontAwesomeIcon icon={faCheck} className={style.icon} />
          <p className={style.lineDivLine1}>No commitments, cancel anytime.</p>
        </div>

        <div className={style.lineDivContainer}>
          <FontAwesomeIcon icon={faCheck} className={style.icon2} />
          <p className={style.lineDivLine2}>
            Everything on Netflix for one low price.
          </p>
        </div>

        <div className={style.lineDivContainer}>
          <FontAwesomeIcon icon={faCheck} className={style.icon} />
          <p className={style.lineDivLine3}>No ads and no extra fees. Ever.</p>
        </div>
        <button className={style.childDivButton} onClick={handleButtonClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ChoosePlan;

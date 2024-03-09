import React from "react";
import style from "../style/PlanForm.module.css";

function PlanForm() {
  return (
    <div className={style.formContainer}>
      <div className={style.contentDiv}>
        <p className={style.step}>Step 2 of 3</p>
        <h1 className={style.heading}>Choose plan that's right for you</h1>
        <p className={style.popular}>Most popular</p>
        <div className={style.planContainer}>
          <div className={style.planDetails}>
            <div className={style.planNamePremium}>
              <p className={style.normal}>Premium</p>
              <p className={style.quality}>4k+HDR</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Monthly Price</p>
              <p className={style.line2}>Rs 649</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Video and sound quality</p>
              <p className={style.line2}>Best</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Resolution</p>
              <p className={style.line2}>4K (Ultra HD) + HDR</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Spatial Audio Immersive Sound</p>
              <p className={style.line2}>Included</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Supported Devices</p>
              <p className={style.line2}>TV, computer, mobile phone, tablet</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>
                Devices your household can watch at the same time
              </p>
              <p className={style.line2}>4</p>
            </div>
            <div className={style.downloadDetail}>
              <p className={style.line1}>Download devices</p>
              <p className={style.line2}>6</p>
            </div>
          </div>

          <div className={style.planDetails}>
            <div className={style.planNameStandard}>
              <p className={style.normal}>Standard</p>
              <p className={style.quality}>1080p</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Monthly Price</p>
              <p className={style.line2}>Rs 499</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Video and sound quality</p>
              <p className={style.line2}>Great</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Resolution</p>
              <p className={style.line2}>1080p(Full HD)</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Spatial Audio Immersive Sound</p>
              <p className={style.line2}>Excluded</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Supported Devices</p>
              <p className={style.line2}>TV, computer, mobile phone, tablet</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>
                Devices your household can watch at the same time
              </p>
              <p className={style.line2}>2</p>
            </div>
            <div className={style.downloadDetail}>
              <p className={style.line1}>Download devices</p>
              <p className={style.line2}>2</p>
            </div>
          </div>

          <div className={style.planNameBasic}>
            <div className={style.planName}>
              <p className={style.normal}>Basic</p>
              <p className={style.quality}>720p</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Monthly Price</p>
              <p className={style.line2}>Rs 199</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Video and sound quality</p>
              <p className={style.line2}>Good</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Resolution</p>
              <p className={style.line2}>720p(HD)</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Spatial Audio Immersive Sound</p>
              <p className={style.line2}>Excluded</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Supported Devices</p>
              <p className={style.line2}>
                TV, computer, mobile phone, tablet,{" "}
              </p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>
                Devices your household can watch at the same time
              </p>
              <p className={style.line2}>1</p>
            </div>
            <div className={style.downloadDetail}>
              <p className={style.line1}>Download devices</p>
              <p className={style.line2}>1</p>
            </div>
          </div>

          <div className={style.planDetails}>
            <div className={style.planName}>
              <p className={style.normal}>Mobile</p>
              <p className={style.quality}>480p</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Monthly Price</p>
              <p className={style.line2}>Rs 149</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Video and sound quality</p>
              <p className={style.line2}>Fair</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Resolution</p>
              <p className={style.line2}>480p</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Spatial Audio Immersive Sound</p>
              <p className={style.line2}>Excluded</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>Supported Devices</p>
              <p className={style.line2}>Mobile phone , tablet</p>
            </div>
            <div className={style.detail}>
              <p className={style.line1}>
                Devices your household can watch at the same time
              </p>
              <p className={style.line2}>1</p>
            </div>
            <div className={style.downloadDetail}>
              <p className={style.line1}>Download devices</p>
              <p className={style.line2}>1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanForm;

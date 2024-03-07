import React from "react";
import style from "../style/LandingPage.module.css";
import LogoHeader from "./LogoHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SignInOption from "./SignInOption";
import AdditionalInfo from "./AdditionalInfo";

function LandingPage() {
  return (
    <>
      <div className={style.outerContainer}>
        <div className={style.landingPageContainer}>
          <LogoHeader />
          <SignInOption landingPageHeader="used in landing page" />
        </div>
      </div>

      <div className={style.reasonsDiv}>
        <p>More reasons to join</p>
        <div className={style.reasonsChildDivContainer}>
          <div className={style.reasonsChildDiv}>
            <h2>Stories tailored to your taste</h2>
            <img
              src="/images/handStar.png"
              alt=""
              className={style.reasonsImage1}
            />
          </div>
          <div className={style.reasonsChildDiv}>
            <h2>Cancel or switch plans anytime</h2>
            <img
              src="/images/handshake.png"
              alt=""
              className={style.reasonsImage2}
            />
          </div>
          <div className={style.reasonsChildDiv}>
            <h2>A place just for kids</h2>
            <img
              src="/images/heart.png"
              alt=""
              className={style.reasonsImage3}
            />
          </div>
          <div className={style.reasonsChildDiv}>
            <h2>For your phone,laptop,tablet and TV</h2>
            <img
              src="/images/mobile.png"
              alt=""
              className={style.reasonsImage4}
            />
          </div>
        </div>
      </div>
      <div className={style.faqContainer}>
        <p>Frequently Asked Questions</p>
        <div className={style.faqChildDivContainer}>
          <div className={style.faqChildDiv}>
            <p>What is Netflix?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>

          <div className={style.faqChildDiv}>
            <p>How much does Netflix?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>

          <div className={style.faqChildDiv}>
            <p>Where can I watch?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>

          <div className={style.faqChildDiv}>
            <p>How do I cancel?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>

          <div className={style.faqChildDiv}>
            <p>What can I watch on Netflix?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>

          <div className={style.faqChildDiv}>
            <p>Is Netflix good for kids?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>
        </div>
      </div>
      <SignInOption
        customStylesBodyDiv={{
          backgroundColor: "black",
          marginTop: 0,
          marginBottom: 0,
          paddingBottom: 0,
          height: "30vh",
        }}
        customStylesBodyDivPara={{
          textAlign: "left",
          marginLeft: "7vw",
          marginTop: "8vh",
        }}
        customStylesGetStartedDiv={{
          justifyContent: "flex-start",
          marginLeft: "6vw",
          marginTop: "2vh",
        }}
        customStylesInput={{
          width: "50vw",
          marginLeft: "0",
        }}
        customStylesButton={{
          width: "20vw",
        }}
      />
      <div className={style.segregate}></div>
      <AdditionalInfo
        item1="FAQ"
        item2="Investor Relations"
        item3="Privacy"
        item4="Speed Test"
        item5="Help Center"
        item6="Jobs"
        item7="Cookie Preference"
        item8="Legal Notices"
        item9="Account"
        item10="Ways to Watch"
        item11="Corporate Information"
        item12="Only on Netflix"
        item13="Media Center"
        item14="Terms of Use"
        item15="Contact"
      />
    </>
  );
}
export default LandingPage;
/*

    <div className={style.outerContainer}>
      <div className={style.landingPageContainer}>
        <LogoHeader />
        <SignInOption landingPageHeader="used in landing page" />
      </div>

      <div className={style.reasonsDiv}>
        <p>More reasons to join</p>
        <div className={style.reasonsChildDivContainer}>
          <div className={style.reasonsChildDiv}>
            <h2>Stories tailored to your taste</h2>
            <img
              src="/images/handStar.png"
              alt=""
              className={style.reasonsImage1}
            />
          </div>
          <div className={style.reasonsChildDiv}>
            <h2>Cancel or switch plans anytime</h2>
            <img
              src="/images/handshake.png"
              alt=""
              className={style.reasonsImage2}
            />
          </div>
          <div className={style.reasonsChildDiv}>
            <h2>A place just for kids</h2>
            <img
              src="/images/heart.png"
              alt=""
              className={style.reasonsImage3}
            />
          </div>
          <div className={style.reasonsChildDiv}>
            <h2>For your phone,laptop,tablet and TV</h2>
            <img
              src="/images/mobile.png"
              alt=""
              className={style.reasonsImage4}
            />
          </div>
        </div>
      </div>

      <div className={style.faqContainer}>
        <p>Frequently Asked Questions</p>
        <div className={style.faqChildDivContainer}>
          <div className={style.faqChildDiv}>
            <p>What is Netflix?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>

          <div className={style.faqChildDiv}>
            <p>How much does Netflix?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>

          <div className={style.faqChildDiv}>
            <p>Where can I watch?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>

          <div className={style.faqChildDiv}>
            <p>How do I cancel?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>

          <div className={style.faqChildDiv}>
            <p>What can I watch on Netflix?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>

          <div className={style.faqChildDiv}>
            <p>Is Netflix good for kids?</p>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
          </div>
        </div>
      </div>
      <SignInOption
        customStylesBodyDiv={{
          backgroundColor: "black",
          marginTop: 0,
          marginBottom: 0,
          borderBottom: "5px solid firebrick",
          paddingBottom: 0,
          height: "30vh",
        }}
        customStylesBodyDivPara={{
          textAlign: "left",
          marginLeft: "7vw",
          marginTop: "8vh",
        }}
        customStylesGetStartedDiv={{
          justifyContent: "flex-start",
          marginLeft: "6vw",
          marginTop: "2vh",
        }}
        customStylesInput={{
          width: "50vw",
          marginLeft: "0",
        }}
        customStylesButton={{
          width: "20vw",
        }}
      />

      <AdditionalInfo
        item1="FAQ"
        item2="Investor Relations"
        item3="Privacy"
        item4="Speed Test"
        item5="Help Center"
        item6="Jobs"
        item7="Cookie Preference"
        item8="Legal Notices"
        item9="Account"
        item10="Ways to Watch"
        item11="Corporate Information"
        item12="Only on Netflix"
        item13="Media Center"
        item14="Terms of Use"
        item15="Contact"
      />
    </div>
*/

// import Comp1 from "./comp/comp1";
var { useState, useEffect } = React;
// import { Comp1 } from "./Comp1.js";
let gestures = ["rock", "paper", "scissors"];
let result = "lose";
let mobileMaxWidth = 500;
function userWin(userpick, housepick) {
  // let userIndex = gestures.findIndex(userpick);
  // let houseIndex = gestures.findIndex(housepick);
  // if (userIndex == houseIndex) {
  //   return 'draw';
  // }
  let result = "";
  switch (userpick) {
    case "rock":
      if (housepick == "scissors") {
        result = "win";
        break;
      } else if (housepick == "rock") {
        result = "draw";
        break;
      } else {
        result = "lose";
        break;
      }
    case "paper":
      if (housepick == "rock") {
        result = "win";
        break;
      } else if (housepick == "paper") {
        result = "draw";
        break;
      } else {
        result = "lose";
        break;
      }
    case "scissors":
      if (housepick == "paper") {
        result = "win";
        break;
      } else if (housepick == "scissors") {
        result = "draw";
        break;
      } else {
        result = "lose";
        break;
      }
  }
  return result;
}
function Title({ score }) {
  return (
    <div className="titleHolder">
      <div className="titleName">
        <img src="./images/logo.svg" alt="RockPaperscissor" />
      </div>
      <div className="scoreHolder">
        <div className="scoreTitle">SCORE</div>
        <div className="scoreCount">{score}</div>
      </div>
    </div>
  );
}
function Screen1({ handleGestureClick }) {
  function handleClick(alt) {
    handleGestureClick(alt);
  }
  return (
    <div className="screen1Holder">
      <div className="screen1InnerHolder">
        <div className="paperScissorHolder">
          <MakeGestureWithCircle
            gesture="paper"
            disabled={false}
            handleGestureClick={handleClick}
          ></MakeGestureWithCircle>
          <MakeGestureWithCircle
            gesture="scissors"
            disabled={false}
            handleGestureClick={handleClick}
          ></MakeGestureWithCircle>
        </div>
        <div className="rockHolder">
          <MakeGestureWithCircle
            gesture="rock"
            disabled={false}
            handleGestureClick={handleClick}
          ></MakeGestureWithCircle>
        </div>
      </div>
      <div className="backTriangle"></div>
    </div>
  );
}
function MakeGestureWithCircle({ gesture, disabled, handleGestureClick }) {
  function handleClick() {
    console.log("clicked on gesture. disabled ==", disabled);
    if (disabled == true) {
      return;
    }
    handleGestureClick(alt);
  }
  let imgsrc = "./images/icon-" + gesture + ".svg",
    alt = gesture;
  return (
    <div className={"gestureHolder " + gesture} onClick={handleClick}>
      <div className="innerCircle">
        {gesture == "blank" || gesture === null ? (
          false
        ) : (
          <img className="gestureImage" src={imgsrc} alt={alt} />
        )}
      </div>
    </div>
  );
}
// function EmptyCircle() {
//   return(
//     <div className="gestureHolder"></div>
//   )
// }
function Screen2Mobile({
  userpick,
  screenChange,
  housepick,
  result,
  restartGame,
}) {
  return (
    <div className={"screen2Holder moveWide"}>
      <div className="yourPickSection">
        <MakeGestureWithCircle
          gesture={userpick}
          disabled={true}
        ></MakeGestureWithCircle>
        <div className="yourpickTitle">YOU PICKED</div>
      </div>
      <div className="housepicksection">
        <MakeGestureWithCircle
          gesture={housepick}
          disabled={true}
        ></MakeGestureWithCircle>
        <div className="housepickTitle">THE HOUSE PICKED</div>
      </div>

      {screenChange ? (
        <WinLoseMidContent
          result={result}
          restartGame={restartGame}
        ></WinLoseMidContent>
      ) : (
        false
      )}
    </div>
  );
}
function Screen2({ userpick, screenChange, housepick, result, restartGame }) {
  let screenWidth = window.innerWidth;
  return (
    <div className={"screen2Holder " + (screenChange ? " moveWide" : "")}>
      <div className="yourPickSection">
        <div className="yourpickTitle">YOU PICKED</div>
        <MakeGestureWithCircle
          gesture={userpick}
          disabled={true}
        ></MakeGestureWithCircle>
      </div>
      {screenChange ? (
        <WinLoseMidContent
          result={result}
          restartGame={restartGame}
        ></WinLoseMidContent>
      ) : (
        false
      )}
      <div className="housepicksection">
        <div className="housepickTitle">THE HOUSE PICKED</div>
        <MakeGestureWithCircle
          gesture={housepick}
          disabled={true}
        ></MakeGestureWithCircle>
      </div>
    </div>
  );
}
function WinLoseMidContent({ result, restartGame }) {
  function handleClick() {
    restartGame();
  }
  let screenWidth = window.innerWidth;
  return (
    // <></>
    <div
      className={
        "resultSection" + (screenWidth <= mobileMaxWidth ? " resMobile" : "")
      }
    >
      <div className="resultText">
        {result == "lose" ? "YOU LOSE" : "YOU WIN"}
      </div>
      <button className="playAgainBtn" onClick={handleClick}>
        PLAY AGAIN
      </button>
    </div>
  );
}
function Images() {
  return (
    <div className="ImagesHolder">
      <img src="./images/icon-paper.svg" alt="paper" />
      <img src="./images/icon-rock.svg" alt="rock" />
      <img src="./images/icon-scissors.svg" alt="scissors" />
      <img src="./images/bg-pentagon.svg" alt="bg-pentagon" />
      <img src="./images/bg-triangle.svg" alt="bg-triangle" />
      <img src="./images/image-rules-bonus.svg" alt="image-rules-bonus" />
      <img src="./images/image-rules.svg" alt="image-rules" />
      <img src="./images/logo-bonus.svg" alt="RockPaperScissorSpockLizard" />
      <img src="./images/logo.svg" alt="RockPaperscissor" />
      <img src="./images/icon-close.svg" alt="close" />
    </div>
  );
}
function TriggerChange({ screenChange, setScreenChange }) {
  function handleChange() {
    setScreenChange(!screenChange);
  }
  return (
    <>
      <button onClick={handleChange}>TriggerChange</button>
    </>
  );
}
function RulesSection() {
  let [showRules, setShowrules] = useState(false);
  console.log("showRules value is:", showRules);
  function handleRulesClick() {
    console.log("ruls open clicked");
    setShowrules(!showRules);
  }
  function closeRules() {
    console.log("close rules called");
    setShowrules(false);
  }
  let screenWidth = window.innerWidth;
  return (
    <div className="rulesSection">
      <div className="rulesHolder">
        <button className="rulesBtn" onClick={handleRulesClick}>
          RULES
        </button>
      </div>
      {showRules == true ? (
        <div className="rulesContent">
          <div
            className={
              "rulesImgHolder " +
              (screenWidth <= mobileMaxWidth ? " rulesMobileClass" : "")
            }
          >
            <div className="titleAndCloseHolder" onClick={closeRules}>
              <div className="rulesTitle">RULES</div>
              <img
                className="rulesCloseIcon"
                src="./images/icon-close.svg"
                alt="close"
              />
            </div>
            <img src="./images/image-rules.svg" alt="image-rules" />
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
}
function RulesSectionMobile() {
  let [showRules, setShowrules] = useState(false);
  console.log("showRules value is:", showRules);
  function handleRulesClick() {
    console.log("ruls open clicked");
    setShowrules(!showRules);
  }
  function closeRules() {
    console.log("close rules called");
    setShowrules(false);
  }
  let screenWidth = window.innerWidth;
  return (
    <div className="rulesSection">
      <div className="rulesHolder">
        <button className="rulesBtn" onClick={handleRulesClick}>
          RULES
        </button>
      </div>
      {showRules == true ? (
        <div className="rulesContent">
          <div className="rulesImgHolder  rulesMobileClass">
            <div className="rulesTitle">RULES</div>
            <img src="./images/image-rules.svg" alt="image-rules" />
            <img
              className="rulesCloseIcon"
              src="./images/icon-close.svg"
              alt="close"
              onClick={closeRules}
            />
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
}
function Main() {
  let [currentScreen, setCurrentScreen] = useState("screen1");
  let [score, setScore] = useState(0);
  let [screenChange, setScreenChange] = useState(false);
  let [userpick, setuserpick] = useState("blank");
  let [housepick, sethousepick] = useState("blank");
  function handleGestureClick(userpick) {
    console.log(
      "Main funciton gesture click function. userpick received is:",
      userpick
    );
    setCurrentScreen("screen2");
    setuserpick(userpick);
    if (userpick != "blank") {
      setTimeout(function () {
        let randIndex = Math.floor(Math.random() * 3);
        let housepick = gestures[randIndex];
        sethousepick(housepick);
        checkUserWinAndUpdateScore(userpick, housepick);
      }, 2000);
    }
  }
  function checkUserWinAndUpdateScore(userpick, housepick) {
    result = userWin(userpick, housepick);
    if (result == "lose") {
      setScore(score - 1);
    } else {
      setScore(score + 1);
    }
    setScreenChange(true);
  }

  function restartGame() {
    setScreenChange(false);
    setuserpick("blank");
    sethousepick("blank");
    setCurrentScreen("screen1");
  }
  let screenWidth = window.innerWidth;
  let mobileMaxWidth = 500;
  return (
    <>
      <div className="mainHolder">
        <Title score={score}></Title>
        {currentScreen == "screen1" ? (
          <Screen1 handleGestureClick={handleGestureClick}></Screen1>
        ) : (
          <>
            {screenWidth < mobileMaxWidth ? (
              <Screen2Mobile
                userpick={userpick}
                housepick={housepick}
                screenChange={screenChange}
                result={result}
                restartGame={restartGame}
              ></Screen2Mobile>
            ) : (
              <Screen2
                userpick={userpick}
                housepick={housepick}
                screenChange={screenChange}
                result={result}
                restartGame={restartGame}
              ></Screen2>
            )}
          </>
        )}
        {/* <Images></Images> */}
        {/* <TriggerChange
        screenChange={screenChange}
        setScreenChange={setScreenChange}
        ></TriggerChange> */}
        {/* <div className="rulesSection">
          <button>Rules</button>
        </div> */}
      </div>
      {/* <footer>
        <div className="rulesSection">
          <button>Rules</button>
        </div>
      </footer> */}
      {/* <footer> */}
      {screenWidth < mobileMaxWidth ? (
        <RulesSectionMobile></RulesSectionMobile>
      ) : (
        <RulesSection></RulesSection>
      )}
      {/* </footer> */}
    </>
  );
}
var kk = ReactDOM.createRoot(document.querySelector("#root"));
kk.render(<Main />);

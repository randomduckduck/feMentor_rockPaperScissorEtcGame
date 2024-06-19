// import Comp1 from "./comp/comp1";
var { useState } = React;
// import { Comp1 } from "./Comp1.js";
function Title({ score, setScore }) {
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
function Screen1() {
  return (
    <div className="screen1Holder">
      <div className="screen1InnerHolder">
        <div className="paperScissorHolder">
          <MakeGestureWithCircle
            imgsrc="./images/icon-paper.svg"
            alt="paper"
          ></MakeGestureWithCircle>
          <MakeGestureWithCircle
            imgsrc="./images/icon-scissors.svg"
            alt="scissors"
          ></MakeGestureWithCircle>
        </div>
        <div className="rockHolder">
          <MakeGestureWithCircle
            imgsrc="./images/icon-rock.svg"
            alt="rock"
          ></MakeGestureWithCircle>
        </div>
      </div>
      <div className="backTriangle"></div>
    </div>
  );
}
function MakeGestureWithCircle({ imgsrc = null, alt = "blank" }) {
  return (
    <div className={"gestureHolder " + alt}>
      <div className="innerCircle">
        {imgsrc === null ? false : <img src={imgsrc} alt={alt} />}
      </div>
    </div>
  );
}
// function EmptyCircle() {
//   return(
//     <div className="gestureHolder"></div>
//   )
// }
function Screen2() {
  return (
    <div className="screen2Holder">
      <div className="yourPickSection">
        <div className="yourpickTitle">YOU PICKED</div>
        <MakeGestureWithCircle
          imgsrc="./images/icon-paper.svg"
          alt="paper"
        ></MakeGestureWithCircle>
      </div>
      <div className="housepicksection">
        <div className="housepickTitle">THE HOUSE PICKED</div>
        <MakeGestureWithCircle></MakeGestureWithCircle>
      </div>
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
function Main() {
  let [score, setScore] = useState(0);
  return (
    <div className="mainHolder">
      <Title score={score} setScore={setScore}></Title>
      <Screen1></Screen1>
      <Screen2></Screen2>
      <Images></Images>
    </div>
  );
}
var kk = ReactDOM.createRoot(document.querySelector("#root"));
kk.render(<Main />);

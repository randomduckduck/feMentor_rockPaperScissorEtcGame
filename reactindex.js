// import Comp1 from "./comp/comp1";
var { useState } = React;
// import { Comp1 } from "./Comp1.js";
function MyComp() {
  let [var1, setvar1] = useState(0);
  return (
    <div>
      MyComppppp
      {var1}
    </div>
  );
}
const ReactAppFromCDN = () => {
  return (
    <div>
      My React App with CDN
      {/* <Comp1></Comp1> */}
      <MyComp></MyComp>
    </div>
  );
};
var kk = ReactDOM.createRoot(document.querySelector("#root"));
kk.render(<ReactAppFromCDN />);

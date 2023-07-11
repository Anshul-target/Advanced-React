import { useState } from "react";
const UseStateGotcha = () => {
  const [state, setState] = useState(0);
  const updater = () => {
    // IT IS ASYNCHRONOUS NATURE WE ARE GETTING ONE LESS THAN WHAT IS SHOWING ON THE UI

    // setState(state + 1);
    // console.log("HOw");
    // console.log(state);
    // setState((currentState) => {
    //   const newState = currentState + 1;
    //   return newState;
    // });
    setTimeout(() => {
      console.log("Hello i clicked 5 times");
      setState((currentState) => {
        const newState = currentState + 1;
        return newState;
      });
    }, 3000);

    console.log(state);
  };
  return (
    <>
      <button
        onClick={updater}
        style={{
          fontSize: "1rem",
          color: "White",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "blue",
          padding: "5px",
        }}
      >
        {state}
      </button>
    </>
  );
};

export default UseStateGotcha;

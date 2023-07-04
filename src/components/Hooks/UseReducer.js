import React, { useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
  if (action.type === "INCR") {
    state++;
  }

  if (state > 0 && action.type === "DECR") {
    state--;
  }
  return state;
};

const UseReducer = () => {
  const initialData = 0;
  const [state, dispatch] = useReducer(reducer, initialData);
  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div className="button2" onClick={() => dispatch({ type: "INCR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT{" "}
        </div>
        <div className="button2" onClick={() => dispatch({ type: "DECR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECREMENT{" "}
        </div>
      </div>
    </>
  );
};

export default UseReducer;

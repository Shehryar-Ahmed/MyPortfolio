import React, { useState } from "react";
import StateContext from "./createCont";

const ContStates = (props) => {
  const [showAlert, setShowAlertFunc] = useState(false);
  const setShowAlert = (val) => {
    setShowAlertFunc(val);
  };
  return (
    <StateContext.Provider value={{ showAlert, setShowAlert }}>
      {props.children}
    </StateContext.Provider>
  );
};

export default ContStates;

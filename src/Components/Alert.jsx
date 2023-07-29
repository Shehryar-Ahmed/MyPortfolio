import { Alert } from "@mui/material";
import React, { useContext } from "react";
import StateContext from "../Context/createCont";

function Alertt() {
  const contexts = useContext(StateContext);

  return contexts.showAlert ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 200,
        paddingTop: "5vh",
      }}
    >
      <Alert
        severity="success"
        style={{
          width: "25rem",
          height: "2.5rem",
          color: "#081b29",
          border: "2px solid",
          borderRadius: "8px",
          borderColor: "#00abf0",
          fontSize: "1rem",
          fontFamily: "Poppins",
        }}
      >
        Your Message Has Been Sent
      </Alert>
    </div>
  ) : (
    <></>
  );
}

export default Alertt;

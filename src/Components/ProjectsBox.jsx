import { Box } from "@mui/material";
import React from "react";

function ProjectsBox(props) {
  return (
    <Box
      className="firstDiv"
      sx={{
        display: "flex",
        flexDirection: { sm: props.direction, xs: "column" },
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        paddingBottom: { sm: "0", xs: "2rem" },
      }}
    >
      <Box
        sx={{
          height: { sm: "20rem", xs: "30rem" },
          width: { sm: "36rem", xs: "100%" },
          //   flexBasis: "50%",
          //   flex: "1",
          zIndex: "1",
          backgroundColor: "#112e42",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          border: "1px solid #00abf0",
          borderRadius: "4px",
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            height: "30%",
            fontSize: "1.5rem",
          }}
        >
          <h1 className="project">{props.title}</h1>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          <h1 className="project">{props.title}</h1>
        </Box>
        <img
          alt="DarkhorseStocks"
          src={props.img}
          style={{ width: "83%", height: "70%" }}
        ></img>
      </Box>
      <Box
        sx={{
          height: { sm: "10rem", xs: "15rem" },
          width: { sm: "36rem", xs: "80%" },
          zIndex: "1",
          backgroundColor: "#0c2a40",
          position: "relative",
          display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "flex-end",
          alignItems: "center",
          alignSelf: "center",
          marginLeft: { sm: props.direction === "row" ? "-4rem" : "0" },
          marginRight: {
            sm: props.direction === "row-reverse" ? "-4rem" : "0",
          },
          marginTop: { sm: "0", xs: "-2rem" },
          fontSize: { sm: "0.8rem", xs: "1.1rem" },
        }}
      >
        <p
          style={{
            textAlign: "left",
            padding: "0.8rem",
            textJustify: "center",
            // justifySelf: "center",
          }}
        >
          {props.description}
        </p>
      </Box>
    </Box>
  );
}

export default ProjectsBox;

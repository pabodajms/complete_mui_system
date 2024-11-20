import React from "react";
import { makeStyles } from "@mui/styles";
// import "./SideMenu.css";

const useStyles = makeStyles({
  SideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "20%",
    height: "100%",
    background: "linear-gradient(45deg, #185A9D 30%, #43CEA2 90%)",
  },
});

export default function SideMenu() {
  const classes = useStyles();
  return <div className={classes.SideMenu}></div>;
}

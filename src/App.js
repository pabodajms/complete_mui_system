import logo from "./logo.svg";
import "./App.css";
import SideMenu from "./components/SideMenu";
import { makeStyles } from "@mui/styles";
import Header from "./components/Header";

// This is for the nav bar
const useStyles = makeStyles({
  appMain: {
    paddingLeft: "20%",
    width: "80%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
    </>
  );
}

export default App;

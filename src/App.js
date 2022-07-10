import "./App.css";
import NavBar from "./components/NavBar";
// import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className="App">
        {/* <MyHeader></MyHeader> */}
        <NavBar></NavBar>
        
        <Outlet></Outlet>
      </div>
      <MyFooter></MyFooter>
    </div>
  );
};

export default App;

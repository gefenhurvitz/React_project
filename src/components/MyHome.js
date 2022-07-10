import React from "react";
import MainRight from "./MainRight";
import MainLeft from "./MainLeft";

const MyHome = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <MainLeft></MainLeft>
        <MainRight></MainRight>
      </div>
    </div>
  );
};

export default MyHome;

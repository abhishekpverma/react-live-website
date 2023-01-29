import React from "react";
import home from"../src/Images/home.gif"
import CommonComp from "./CommonComp";

const Home = () => {
  return (
    <>
      <CommonComp name= "Grow your business with" imgsrc={home} visit={"/service"} btname="Get started"/>
    </>
  );
};

export default Home;

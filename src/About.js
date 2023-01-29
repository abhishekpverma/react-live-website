import React from "react";
import CommonComp from "./CommonComp";
import about from"../src/Images/about.gif"

const About = () => {
  return (
    <>
      <CommonComp name= "Welcome to About page Learn more about us" imgsrc={about} visit={"/contact"} btname="Contact Now">
        lkhakljfhd
      </CommonComp>
    </>
  );
};

export default About;

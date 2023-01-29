import React from "react";
import { Link } from "react-router-dom";


const CommonComp = (props) => {
  return (
    <>
      <section id="header" className="d-flex">
        <div className="contianer-fluid">
          <div className="row">
            <div className="col-10 mx-auto ">
                <div className="row">
                <div className="col-md-6 mt-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>{props.name} <strong className="brand-name">Byte Web</strong></h1>
                    <h6 className="my-3">
                        We are the team of talented developer making websites.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt magnam architecto tempora sunt veniam nihil eveniet dicta ducimus ex, eligendi commodi, et nisi nesciunt quidem quo aspernatur laborum!
                    </h6>
                    <div className="mt-3">
                        <Link to={props.visit} className="btn btn-primary"> {props.btname}</Link>
                    </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={props.imgsrc} className="img-fluid animated" alt="hmimg" />
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonComp;

import React from "react";
import demo from "../src/Images/demo.webp";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card m-2">
          <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

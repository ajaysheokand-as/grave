import React from "react";
import { Contact } from "./contact";

export const Service = (props) => {
  return (
    <div>
      <div id="about">
        <div className="container ">
          <div className="section-title text-center">
            <h2>Our Products</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p> */}
          </div>
          <div>
            {props.data
              ? props.data.map((d, i) => (
                  <div className="row">
                    <div key={`${d.title}-${i}`} className="col-xs-12 col-md-6">
                      <div className="about-text">
                        <h2>{d.title}</h2>
                        <p>{d.paragraph}</p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      {" "}
                      <img
                        src={d.image}
                        className="img-responsive"
                        alt=""
                      />{" "}
                    </div>
                  </div>
                ))
              : "Loading ..."}
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

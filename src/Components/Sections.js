import React from "react";
import { useState } from "react/cjs/react.development";
import Content from "./Content";

export default function Sections(props) {
  return (
    <div className="section">
      <div className="sectiontitle">
        <div className="sectiondescription">
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
        </div>
        <div className="imgcontainer">
          <img src={props.img} />
        </div>
      </div>

      {!props.content
        ? null
        : props.content.map((elem) => {
            return (
              <Content title={elem.title} description={elem.description} />
            );
          })}
    </div>
  );
}

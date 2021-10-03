import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Content(props) {
  const [showDescription, set_showDescription] = useState(false);
  function show() {
    set_showDescription(!showDescription);
  }

  useEffect(() => {}, []);

  return (
    <div className="contentcontainer">
      <h2 onClick={show}>{props.title}</h2>
      {showDescription ? <h3>{props.description}</h3> : null}
    </div>
  );
}

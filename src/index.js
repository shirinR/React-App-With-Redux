import React from "react";
import { render } from "react-dom";
import 'core-js';

function Hi() {
  return <p>Hi.</p>;
}

render(<Hi />, document.getElementById("app"));

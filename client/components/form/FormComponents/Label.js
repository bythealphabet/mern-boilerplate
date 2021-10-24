import React from "react";

function Label({ label = "Your Name" }) {
  return (
    <label className="label" htmlFor={label}>
      {label}
    </label>
  );
}
export default Label;

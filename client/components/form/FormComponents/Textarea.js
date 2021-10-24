import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { inputStyles } from "./formStyle";
import Label from "./Label";

export const Textarea = ({
  label = "Default",
  placeholder = "write here",
  type = "text",
  value,
  rows = "20",
}) => {
  const inputValue = (e) => change(e.target.value);

  return (
    <div css={inputStyles}>
      <Label label={label} />
      <textarea
        id={label}
        className="input"
        onChange={inputValue}
        placeholder={placeholder}
        type={type}
        value={value}
        rows={rows}
      />
    </div>
  );
};

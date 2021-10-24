import React from "react";
import { Link } from "react-router-dom";
import { Input } from "./FormComponents/Input";
import { SubmitBtn } from "./FormComponents/SubmitBtn";
import useFromData from "../../hooks/useFormData";
import { styles } from "./AuthFormComponentStyles";

function AuthFormComponent({ signin = false, onSubmit = () => {}, position }) {
  let signObj = signin
    ? { email: "", password: "" }
    : { name: "", email: "", password: "" };

  const [data, inputHandler] = useFromData(signObj);

  const submit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  let title = (signin) => (signin ? "Sign In" : "Sign Up");
  const OtherAuthOption = () => (
    <Link to={`/${signin ? "signup" : "signin"}`}>{title(!signin)}</Link>
  );

  return (
    <div className="base-grid" css={[styles, position]}>
      <h1>{title(signin)}</h1>
      <form action="" onSubmit={submit}>
        {!signin && (
          <Input
            label="Name"
            placeholder="name"
            change={inputHandler("name")}
            value={data.name}
            type="text"
          />
        )}
        <Input
          label="Email"
          placeholder="email"
          change={inputHandler("email")}
          value={data.email}
          type="email"
        />
        <Input
          label="Password"
          placeholder="password"
          change={inputHandler("password")}
          value={data.password}
          type="password"
        />
        <SubmitBtn submit={submit} signin={signin} />
        <p className="option">
          {signin ? "create an account" : "do you have an account"}{" "}
          <OtherAuthOption />
        </p>
      </form>
      <div className="other-option">
        &#x2190; <OtherAuthOption />
      </div>
    </div>
  );
}
export default AuthFormComponent;

import React from "react";
import { Link } from "react-router-dom";
import { Input } from "./FormComponents/Input";
import { SubmitBtn } from "./FormComponents/SubmitBtn";
import useFromData from "../../hooks/useFormData";
import { styles } from "./AuthFormComponentStyles";

function AuthFormComponent({
  signin = false,
  onSubmit,
  signObj,
  position,
  message,
  error,
}) {
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
      <div className="other-option">
        &#x2190; <OtherAuthOption />
      </div>
      <h1>{title(signin)}</h1>
      {error && <p className="auth-form-error-message">{message}</p>}
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
    </div>
  );
}
export default AuthFormComponent;

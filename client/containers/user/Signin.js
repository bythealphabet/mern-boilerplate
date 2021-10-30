import React, { useContext } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import AuthFormComponent from "../../components/form/AuthFormComponent";
import SubmitSuccess from "../../components/form/SubmitSucces/SubmitSuccess";
import { AuthContext } from "../../auth/AuthContext/AuthContext";
import { usePost } from "../../hooks/useFetch";
import { useHistory, Redirect } from "react-router-dom";
import { signin } from "../../auth/api-auth";

function SignIn() {
  const { auth, signInHandler } = useContext(AuthContext);

  if (auth) {
    return <Redirect to="/" />;
  }

  const history = useHistory();
  const [data, onSubmit, message, success, error] = usePost();

  async function submit(data) {
    try {
      const userData = await onSubmit(signin, data);

      if (userData) {
        setTimeout(() => {
          signInHandler(userData);
          history.goBack();
        }, 2000);
      }
    } catch (err) {
      console.log("Sign In Error", err);
    }
  }

  return (
    <main className="base-grid" css={[style]}>
      {success ? (
        <SubmitSuccess message={`Welcome Back ${data?.user?.name}`} />
      ) : (
        <>
          <AuthFormComponent
            signin
            message={message}
            error={error}
            signObj={{ email: "", password: "" }}
            onSubmit={submit}
            position={css`
              grid-column: 1 / -1;
              grid-row: 1;
            `}
          />
        </>
      )}
    </main>
  );
}
export default SignIn;

/// STYLES

var style = css`
  display: grid;
  grid-template-rows: minmax(500px, auto);

  grid-column: 1 / -1;
`;

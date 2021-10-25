import React, { useEffect, useContext } from "react";

import { AuthContext } from "../../auth/AuthContext/AuthContext";
import { confirmation } from "./api-user";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { useHistory, useParams, Redirect, useLocation } from "react-router-dom";
import { usePost } from "../../hooks/useFetch";

const Confirmation = (props) => {
  const { auth } = useContext(AuthContext);
  const { token } = useParams();
  const history = useHistory();

  if (auth) {
    return <Redirect to="/" />;
  }

  const [data, submitToken, message, error] = usePost();

  useEffect(() => {
    submit();
  }, []);

  async function submit() {
    await submitToken(confirmation, { token });
    await setTimeout(() => history.push("/signin"), 10000);
  }

  return (
    <section
      className="base-grid"
      css={css`
        grid-column: 1 / -1;
        grid-row: 1 / -1;

        display: grid;
        grid-template-rows: var(--headerHeight) repeat(3, minmax(300px, 1fr));

        p {
          grid-column: 1 / -1;
          grid-row: 1 / span 2;
          align-self: center;
          justify-self: center;
        }
      `}
    >
      <p className="">{message}</p>
    </section>
  );
};

export default Confirmation;

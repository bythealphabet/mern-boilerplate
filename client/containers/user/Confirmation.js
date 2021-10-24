import React, { useEffect, useContext } from "react";

import { AuthContext } from "../../auth/AuthContext/AuthContext";
import { confirmation } from "./api-user";
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
    await setTimeout(() => history.push("/signin"), 3000);
  }

  return (
    <section className="">
      <p className="">{message}</p>
    </section>
  );
};

export default Confirmation;

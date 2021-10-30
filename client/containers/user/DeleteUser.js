import React, { useContext } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import Modal from "../../components/modal/Modal";
import { AuthContext } from "../../auth/AuthContext/AuthContext";
import { Input } from "../../components/form/FormComponents/Input";
import useFormData from "../../hooks/useFormData";
import { remove } from "./api-user";
import { useHistory } from "react-router-dom";
import { usePost } from "../../hooks/useFetch";

function DeleteUser({ modalActive = false, setModalActive }) {
  const [password, inputHandler] = useFormData();
  const [fetchedData, onSubmit, message, success, error] = usePost();
  const history = useHistory();
  const { auth } = useContext(AuthContext);

  async function submit(e) {
    e.preventDefault();

    const data = await onSubmit(remove, {
      token: auth?.token,
      userId: auth.user._id,
      password,
    });

    console.log("data", await data);
  }

  console.log("error", error);
  return modalActive ? (
    <Modal active={modalActive} setModalActive={setModalActive}>
      <div className="delete-account-box">
        <p className="why">Are you sure you want to delete your acount?</p>
        <p className="ok">if so...</p>
        <p className="go-ahead">
          add your current password and click the red button
        </p>

        <form action="" onSubmit={submit}>
          <Input
            label="Password for authorization"
            change={inputHandler("password")}
            placeholder="password "
            type="password"
            placeholderStyle={css`
              font-size: var(--bodySize);
            `}
          />
          {error ? (
            <p
              css={css`
                color: var(--danger);
              `}
            >
              {message}
            </p>
          ) : null}
          <button
            className="base-btn are-u-sure-btn"
            css={css`
              background: var(--danger);
              color: var(--white);
              border: solid 2px var(--light);
              width: 100%;
              max-width: 420px;
              font-weight: 700;
            `}
            onClick={submit}
          >
            DELETE YOUR ACCOUNT{" "}
          </button>
        </form>
      </div>
    </Modal>
  ) : (
    <></>
  );
}
export default DeleteUser;

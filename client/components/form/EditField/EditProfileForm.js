import React, { useState } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Input } from "../FormComponents/Input";
import { SubmitBtn } from "../FormComponents/SubmitBtn";
import DeleteUser from "../../../containers/user/DeleteUser";
import { usePost } from "../../../hooks/useFetch";

function style() {
  return css`
    form {
      display: flex;
      flex-direction: column;

      width: 100%;
      min-width: 300px;

      .field-label {
        span {
          margin-left: 1em;
        }
      }
    }

    .delete-profile-box {
      margin-top: 5em;
    }

    .delete-account-box {
      > * {
        margin-bottom: 1em;
        .are-u-sure-btn {
          background: red;
        }
      }
    }
  `;
}

function EditField({ onSubmit, inputHandler }) {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="edit-fields" css={[style]}>
      <form onSubmit={onSubmit}>
        <Input
          label="Name"
          change={inputHandler("name")}
          placeholder=""
          type="text"
          placeholderStyle={css`
            color: var(--dark);
            font-size: var(--bodySize);
          `}
        />

        <Input
          label="Email"
          change={inputHandler("email")}
          placeholder=""
          type="text"
          placeholderStyle={css`
            color: var(--dark);
            font-size: var(--bodySize);
          `}
        />

        <Input
          label="Change Password"
          change={inputHandler("password")}
          placeholder="change password"
          type="password"
          placeholderStyle={css`
            font-size: var(--bodySize);
          `}
        />

        <SubmitBtn text="Submit" onClick={onSubmit} />
      </form>

      <div className="delete-profile-box">
        <button
          className="base-btn delete-profile-btn"
          onClick={() => setModalActive(true)}
        >
          Delete Acount
        </button>
      </div>
      <DeleteUser modalActive={modalActive} setModalActive={setModalActive} />
    </div>
  );
}
export default EditField;

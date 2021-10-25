import React, { useState } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Input } from "../FormComponents/Input";
import { SubmitBtn } from "../FormComponents/SubmitBtn";
import Modal from "../../modal/Modal";

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
        {modalActive && (
          <Modal active={modalActive} setModalActive={setModalActive}>
            <div className="delete-account-box">
              <p className="why">
                Are you sure you want to delete your acount?
              </p>
              <p className="ok">if so...</p>
              <p className="go-ahead">
                add your current password and click the red button
              </p>
              <form action="">
                <Input
                  label="Password for authorization"
                  change={inputHandler("password")}
                  placeholder="password "
                  type="password"
                  placeholderStyle={css`
                    font-size: var(--bodySize);
                  `}
                />
                <button
                  className="base-btn are-u-sure-btn"
                  css={css`
                    background: red;
                    color: var(--white);
                    border: solid 2px var(--light);
                    width: 100%;
                    max-width: 420px;
                    font-weight: 700;
                  `}
                >
                  DELETE YOUR ACCOUNT{" "}
                </button>
              </form>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}
export default EditField;

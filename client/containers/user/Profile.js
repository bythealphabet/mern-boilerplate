import React, { useContext, useState } from "react";
import { jsx, css, useTheme } from "@emotion/react"; /** @jsx jsx */
import { AuthContext } from "../../auth/AuthContext/AuthContext";
import { update } from "./api-user";
import { Redirect } from "react-router-dom";
import EditField from "../../components/form/EditField/EditProfileForm";
import { usePost } from "../../hooks/useFetch";
import Avatar from "../../components/avatar/Avatar";
import useFromData from "../../hooks/useFormData";

function style(active) {
  const opacity = css`
    opacity: 1;
  `;
  const noOpacity = css`
    opacity: 2;
  `;
  return css`
    display: grid;
    grid-template-rows: 50px 75px 500px 200px;
    grid-column: 1 / -1;

    .header {
      grid-column: 2 / -2;
      grid-row: 2;
    }

    .profile-info {
      grid-column: 2 / span 3;
      grid-row: 3;

      > * {
        margin-bottom: 1em;
      }
    }

    .update {
      grid-column: 6 / span 4;
      grid-row: 3;
      ${active ? opacity : noOpacity}
    }
  `;
}

function Profile() {
  const [active, setActive] = useState(false);
  const [deleteWindowActice, setDeleteWindowActive] = useState(false);

  const deleteWindowHandler = () => setDeleteWindowActive((prev) => !prev);
  const theme = useTheme();
  const { auth, updateUser } = useContext(AuthContext);

  const formObj = {
    name: "",
    email: "",
    password: "",
  };

  const [user, inputHandler] = useFromData(formObj);
  const [fetchedData, onSubmit] = usePost();

  if (!auth) {
    return <Redirect to="/signin" />;
  }

  const {
    token,
    user: { _id: userId, email, name, createdAt, updatedAt },
  } = auth;

  function cleanObj(obj) {
    return Object.keys(obj).reduce(
      (acc, key) => (obj[key] === "" ? acc : { ...acc, [key]: obj[key] }),
      {}
    );
  }

  async function submit(e) {
    e.preventDefault();
    setActive(false);
    const data = await onSubmit(update, {
      user: cleanObj(user),
      token: auth.token,
      userId,
    });

    await updateUser(data);
  }

  return (
    <main className=" profile-page base-grid" css={style(active)}>
      <h1 className="header">My Profile</h1>

      <div className="profile-info">
        <Avatar color={"var(--dark)"} />
        <p className="profile-name">Name: {name}</p>
        <p className="profile-email">Email: {email}</p>
        <p className="profile-joined">
          Joined: {new Date(createdAt).toDateString()}
        </p>
        <p className="profile-update">
          Updated Profile: {new Date(updatedAt).toDateString()}
        </p>
        <button className="base-btn" onClick={() => setActive((prev) => !prev)}>
          {active ? "Cancel Update Profile" : "Update Profile"}
        </button>
      </div>

      {active && (
        <div className="update">
          <EditField
            deleteAcountHandler={deleteWindowHandler}
            inputHandler={inputHandler}
            onSubmit={submit}
            setActive={setActive}
          />
        </div>
      )}
    </main>
  );
}
export default Profile;

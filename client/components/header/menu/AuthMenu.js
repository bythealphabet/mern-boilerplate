import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import HeaderAvatar from "../header-avatar/HeaderAvatar";
import SignoutIcon from "../icons/SignoutIcon";

const styles = css`
  .auth-menu-signout {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      display: inline-block;
    }
  }
`;

function AuthMenu({ auth, signOutHandler, position }) {
  return (
    <div className="" css={[styles, position]}>
      {auth ? (
        <HeaderAvatar>
          <div className="auth-menu-signout" onClick={signOutHandler}>
            <SignoutIcon /> <p>Signout</p>
          </div>
        </HeaderAvatar>
      ) : (
        <>
          <div>
            <Link className="nav-btn" to="/signin">
              Sign In
            </Link>
          </div>
          <div>
            <Link className="nav-btn nav-btn-signup" to="/signup">
              Sign up
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
export default AuthMenu;

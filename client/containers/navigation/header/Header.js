import React, { useState, useEffect, useContext } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { AuthContext } from "../../../auth/AuthContext/AuthContext";
import { useLocation, Link, useHistory } from "react-router-dom";
import { Hamburger } from "../../../components/header/hamburger/Hamburger";
import { Logo } from "../../../components/logo/Logo";
import { Menu } from "../../../components/header/menu/Menu";
import HeaderAvatar from "../../../components/header/header-avatar/HeaderAvatar";
import SignoutIcon from "../../../components/header/icons/SignoutIcon";

function Header() {
  const { auth, signOutHandler } = useContext(AuthContext);
  const [active, setActive] = useState(false);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setActive(false);
  }, [location]);

  function signOut() {
    signOutHandler();
    history.push("/");
  }

  return (
    <header className="base-grid" css={headerStyles}>
      <Logo
        active={active}
        position={css`
          grid-column: 2 / span 2;
          grid-row: 1 / -1;
          margin-top: 0.3em;
        `}
      />
      <Menu
        signout={signOutHandler}
        userAuth={auth}
        active={active}
        position={css`
          grid-column: 1 / -1;
          grid-row: 1 / -1;
        `}
      />

      {auth ? (
        <div
          css={css`
            grid-column: 2 / -2;
            grid-row: 1 / -1;
            align-self: center;
            justify-self: center;

            @media (min-width: 900px) {
              grid-column: -3;
              grid-row: 1 / -1;
            }
          `}
        >
          <HeaderAvatar>
            <Link to="/profile">My Profile</Link>
            <button
              className="auth-menu-signout btn"
              onClick={signOut}
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;
                width: 100%;
                border: none;
                font-size: 1rem;
              `}
            >
              Signout <SignoutIcon />
            </button>
          </HeaderAvatar>
        </div>
      ) : (
        ""
      )}

      <Hamburger
        active={active}
        setActive={setActive}
        position={css`
          grid-column: -3;
          align-self: center;
          grid-row: 1 / -1;
        `}
      />
    </header>
  );
}
export default Header;

//////// STYLES

function headerStyles() {
  return css`
    display: grid;
    grid-template-rows: repeat(2, calc(var(--headerHeight) / 2));
    height: var(--headerHeight);
    grid-column: 1 / -1;
    grid-row: 1;
  `;
}

import { signout } from "../api-auth";
import cookie from "js-cookie";

const auth = {
  isAuthenticated() {
    if (typeof window === "undefined") return false;
    const checkToken = cookie.get("token");
    const checkUser = JSON.parse(localStorage.getItem("user"));

    let token = checkToken ? checkToken : false;
    let user = checkUser ? checkUser : false;
    if (!token && !user) return false;

    return { token, user };
  },

  authenticate(jwt) {
    if (typeof window === "undefined") return;

    cookie.set("token", jwt.token, { expires: 7 });
    localStorage.setItem("user", JSON.stringify(jwt.user));
  },

  signout() {
    if (typeof window === "undefined") return;

    localStorage.removeItem("user");
    cookie.remove("token");
    signout().then(() => {
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
  },

  updateAuthUser(userUpdate) {
    if (typeof window == "undefined") return;
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    user = userUpdate;
    localStorage.setItem("user", JSON.stringify(user));
  },
};

export default auth;

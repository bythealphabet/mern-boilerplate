const signin = (user) => {
  return fetch("/auth/signin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => err);
};

const signout = () => {
  return fetch("/auth/signout/", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const googleSignin = (idToken) => {
  return fetch("/auth/google-signin/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(idToken),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => err);
};

const googleKey = () => {
  return fetch("/auth/google/", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log("error reading:", err));
};

const facebookSignin = (idToken) => {
  return fetch("/auth/facebook-signin/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(idToken),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => err);
};

const facebookKey = () => {
  return fetch("/auth/facebook/", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log("error reading:", err));
};

export {
  signin,
  signout,
  googleSignin,
  facebookSignin,
  googleKey,
  facebookKey,
};

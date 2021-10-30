const create = (user) => {
  return fetch(`/api/users/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => err.json());
};

const list = () => {
  return fetch(`/api/users/`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log("err:", err));
};

const read = ({ userId, token }) => {
  return fetch(`/api/users/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log("err:", err));
};

const update = async ({ userId, token, user }) => {
  try {
    let response = await fetch(`/api/users/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log("err:", err);
  }
};

const remove = ({ userId, token, password }) => {
  return fetch(`/api/users/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(password),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log("err:", err));
};

const confirmation = ({ token }) => {
  return fetch("/api/confirmation/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const forgotPassword = ({ email }) => {
  return fetch("/api/forgot-password/", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const resetPassword = (data) => {
  return fetch("/api/reset-password/", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export {
  create,
  list,
  read,
  update,
  remove,
  confirmation,
  forgotPassword,
  resetPassword,
};

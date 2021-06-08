const API = "http://127.0.0.1:8000/api/profile/8";
const HEADERS = {
  "Content-Type": "application/json;charset=utf-8",
};

export const Auth = async (url, userData) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Error ${url}, status ${response}`);
  } else {
    const data = await response.json();
    localStorage.setItem("token", data.token);
    return data.user;
  }
};

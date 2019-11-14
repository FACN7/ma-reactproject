// import { token } from "./token";
const token = "b66a27caa6ad9aaa0e80eda197d282bb0005ad71";
const checkResponse = response => {
  if (response.status !== 200 && response.status !== 404) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  if (response.status === 404) {
    return "no such name";
  }
  return response.json();
};

export default function fetchByName(user_name) {
  return fetch(
    `https://api.github.com/users/${user_name}?access_token=${token}`
  )
    .then(checkResponse)

    .catch(err => {
      throw new Error(`fetch getUserData failed ${err}`);
    });
}

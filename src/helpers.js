import { token } from "./token";

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
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

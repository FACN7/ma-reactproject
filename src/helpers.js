//import { token } from "./token";
 const token = "92152672ec431d2d4920da8ecf7b55e7d073bbd3";
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
  return fetch(`https://api.github.com/users/${user_name}`)
    .then(checkResponse)

    .catch(err => {
      throw new Error(`fetch getUserData failed ${err}`);
    });
}

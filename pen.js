const fetch = require("node-fetch");

async function getFreshToken() {
  let token;
  let accessToken = {
    client_id:
      "645222427076-356d5p7n94bt0pgnvfesmd9j6dqu6ld6.apps.googleusercontent.com",
    client_secret: "jrAeGeRDcG9UJsptLbMaVEIL",
    refresh_token:
      "1//03Rt8s0JRhs-SCgYIARAAGAMSNwF-L9IrGzOXvuNlYNJUeuGAasQYfrfVhXoI3KNWfHq06w2wzKt0fPGy3aK5vWajz3QyMXNrr8A",
    grant_type: "refresh_token",
  };
  let formBody = [];
  for (let property in accessToken) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(accessToken[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  let response;
  await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  }).then((e) => {
    response = e;
  });
  await response.json().then((e) => {
    token = e.access_token;
  });
  return token;
}

let authToken;
async function start() {
  let authToken;
  await getFreshToken().then((access_token) => {
    authToken = access_token;
    console.log(authToken);
  });
}

start();

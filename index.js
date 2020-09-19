const port = process.env.PORT || 5000;
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const fetch = require("node-fetch");
const app = express();

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

function server(date, n) {
  let time = `${date}`
    .split("2020 ")[1]
    .split(" ")[0]
    .split(":")
    .join("");
  time = parseInt(time) + n;
  return `${time * time * time - time * time}`;
}

let authToken;
async function start() {
  await getFreshToken().then((access_token) => {
    authToken = access_token;
  });
  app.use(
    `/server${server(new Date(), -2)}`,
    initiate(
      "https://www.googleapis.com/drive/v3/files/1-uqjC3xUjPdI_empNIKF2mzplRNdViyP?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0"
    )
  );
  app.use(
    `/server${server(new Date(), -1)}`,
    initiate(
      "https://www.googleapis.com/drive/v3/files/1-uqjC3xUjPdI_empNIKF2mzplRNdViyP?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0"
    )
  );
  app.use(
    `/server${server(new Date(), 0)}`,
    initiate(
      "https://www.googleapis.com/drive/v3/files/1-uqjC3xUjPdI_empNIKF2mzplRNdViyP?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0"
    )
  );
  app.use(
    `/server${server(new Date(), +1)}`,
    initiate(
      "https://www.googleapis.com/drive/v3/files/1-uqjC3xUjPdI_empNIKF2mzplRNdViyP?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0"
    )
  );
  app.use(
    `/server${server(new Date(), +2)}`,
    initiate(
      "https://www.googleapis.com/drive/v3/files/1-uqjC3xUjPdI_empNIKF2mzplRNdViyP?alt=media&key=AIzaSyBPR7Y-KhcVd0mJYOXMrB6bOo6q_0mdNE0"
    )
  );
  setInterval(function () {
    app._router.stack[3].regexp = new RegExp(
      `^\/server${server(new Date(), -2)}\/?(?=\/|$)`,
      "i"
    );
    app._router.stack[4].regexp = new RegExp(
      `^\/server${server(new Date(), -1)}\/?(?=\/|$)`,
      "i"
    );
    app._router.stack[5].regexp = new RegExp(
      `^\/server${server(new Date(), 0)}\/?(?=\/|$)`,
      "i"
    );
    app._router.stack[6].regexp = new RegExp(
      `^\/server${server(new Date(), 1)}\/?(?=\/|$)`,
      "i"
    );
    app._router.stack[7].regexp = new RegExp(
      `^\/server${server(new Date(), 2)}\/?(?=\/|$)`,
      "i"
    );
  }, 1000);
}

function initiate(link) {
  const options = {
    target: link,
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      "^/api/old-path": "/api/new-path",
      "^/api/remove/path": "/path",
    },
    router: {
      "dev.localhost:5501": "http://localhost:5501",
    },
    headers: {
      origin: "noWay",
    },
    onProxyReq(proxyReq, req, res) {
      proxyReq.setHeader("Authorization", "Bearer " + authToken);
    },
  };
  return createProxyMiddleware(options);
}

start();
setInterval(start, 3300000);
app.setMaxListeners(1000);
app.use(express.static("client"));
app.listen(port);

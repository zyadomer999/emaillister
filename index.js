const port = process.env.PORT || 5000;
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
const app = express();
app.use(cors({}));

const options = {
  target:
    "https://www.googleapis.com/drive/v3/files/1Hx2kfi12vK-QecGn5wWb16xOMTLxZAph?alt=media&key=AIzaSyBZPjQlDk4OxceFNheRf1gH1m1HgWM86-I", // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    "^/api/old-path": "/api/new-path", // rewrite path
    "^/api/remove/path": "/path", // remove base path
  },
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    // override target 'http://www.example.org' to 'http://localhost:8000'
    "dev.localhost:3000": "http://localhost:8000",
  },
  onProxyReq(proxyReq, req, res) {
    proxyReq.setHeader(
      "Authorization",
      "Bearer ya29.a0AfH6SMBPARs5VsCpFCCZNO9N_fPJ-Dm4GfeaXl0kXjyp0h2ZsWIUgqwV9yws6C3UcdepyinYPuAUNBEO-ncWSkPauUeJp8rNYI_tpW5y5G6cP27AVaI-QHetbaybx2zAyw4CKiOrWkDVqqhDNkzHuw-vIlK8-L84uw-e"
    );
  },
};

const exampleProxy = createProxyMiddleware(options);
app.use("/api", exampleProxy);
app.use(express.static("client"));
app.listen(port);

exports.port = port;

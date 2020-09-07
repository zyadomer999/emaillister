const port = process.env.PORT || 5000;
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
const app = express();
app.use(cors({}));

const options = {
  target:
    "https://www.googleapis.com/drive/v3/files/1BMe8dz24vju_EF1gUNNes_W44kQ6KnQH?alt=media&key=AIzaSyBZPjQlDk4OxceFNheRf1gH1m1HgWM86-I", // target host
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
      "Bearer ya29.a0AfH6SMAr6jXVLFHUT-4HmY8LxehFGCeBjrHii5nVXoe4A6LrMcKeo-S6597IpwmQTuWX2PczNsY84R0nwmqZkbtX1J1ZF30KCjhqdVCrhxeTxyq1gjS96CCjDeSFsd7eyJ09dXlxR-7bFp-bhZvM3Yxj1TFSRCp65NhD"
    );
  },
};

const exampleProxy = createProxyMiddleware(options);
app.use("/api", exampleProxy);
app.use(express.static("client"));
app.listen(port);

exports.port = port;

const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
const app = express();
app.use(cors());

// proxy middleware options
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
      "Bearer ya29.a0AfH6SMAjlnF_DX4iRQG7wn2qSIUs9lo8ch51fnIN1pVKuhW2JB6Ai-xz1W1SuHuJh4hm026zaIIq6iWaASeDyyOuyuOSeEog_3LUkkmgdQ0R2BOTPLcEZsLA8GMbkT_bFW-YP10X-ZGrP9KFIFGuoLiUudoj3xvbygji"
    );
  },
};

// create the proxy (without context)
const exampleProxy = createProxyMiddleware(options);
app.use("/api", exampleProxy);
app.listen(process.env.PORT || 3000);

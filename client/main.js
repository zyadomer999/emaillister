const video = document.querySelector("video");
function server(date, n) {
  let time = `${date}`
    .split("2020 ")[1]
    .split(" ")[0]
    .split(":")
    .join("");
  time = parseInt(time) + n;
  return `${time * time * time - time * time}`;
}

video.addEventListener("canplay", function () {
  video.play();
});
if (Hls.isSupported()) {
  var hls = new Hls();
  // hls.loadSource(`/server${server(new Date(), 0)}`);
  hls.loadSource(`/server`);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    video.play();
  });
} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = `/server`;
  video.play();
}

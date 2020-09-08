const video = document.querySelector("video");

if (Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource(`/server${new Date().getSeconds()}`);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    video.play();
  });
} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = `/server${new Date().getSeconds()}`;
  video.addEventListener("loadedmetadata", function () {
    video.play();
  });
}

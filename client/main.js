const video = document.querySelector("video");

video.addEventListener("canplay", function () {
  video.play();
});
if (Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource("./server");
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    video.play();
  });
} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = "./server";
  video.play();
}

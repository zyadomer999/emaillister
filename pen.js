const video = document.querySelector("video");

let req = new XMLHttpRequest();
req.open(
  "GET",
  "https://r6---sn-p9oxu-pn0z.googlevideo.com/videoplayback?expire=1600530584&ei=ONRlX57KD5edgAfzyoqoCw&ip=62.201.254.68&id=o-ACCqA7LEfBGxSQUu5BO9BU-MYn4NS_vKcpIT_IAex4nL&itag=299&aitags=133,134,135,136,160,242,243,244,247,278,298,299,302,303,308,315,394,395,396,397,398,399&source=youtube&requiressl=yes&mh=aP&mm=31,29&mn=sn-p9oxu-pn0z,sn-nv47lnly&ms=au,rdu&mv=m&mvi=6&pcm2cms=yes&pl=23&initcwndbps=1528750&vprv=1&mime=video/mp4&gir=yes&clen=263621065&dur=634.566&lmt=1544609311801139&mt=1600508909&fvip=2&keepalive=yes&c=WEB&txp=5532432&sparams=expire,ei,ip,id,aitags,source,requiressl,vprv,mime,gir,clen,dur,lmt&sig=AOq0QJ8wRgIhAM9_JF3ssA-4xy7wbuYsYFlr0KjNrXPqdMbukfemOOE_AiEA3w4RhKyDY6YmvMSg9HpG9PiDWwBw4dfUWKPAx9UOjHQ=&lsparams=mh,mm,mn,ms,mv,mvi,pcm2cms,pl,initcwndbps&lsig=AG3C_xAwRgIhALK5_Y9SnXZgCy4UEtJJjgZxgwFk261TlLpU-A5clye8AiEA7oEqGVfGdgtUphFXLo00ymmBiXah6gsc-sNfu6l5j80=&ratebypass=yes"
);
req.setRequestHeader("range", "bytes=0-");
req.send();

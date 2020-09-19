const { container } = require("googleapis/build/src/apis/container");
const ytdl = require("ytdl-core");
const COOKIE =
  "_ga=GA1.2.1498230648.1594548570; _gac_UA-28403453-1=1.1594551415.EAIaIQobChMIz7ev8sbH6gIVQrTtCh3iRwWhEAAYASAAEgIXzvD_BwE; _gcl_au=1.1.1094630724.1594548550; _gcl_aw=GCL.1594908316.EAIaIQobChMIn7j9qPjR6gIVQp3VCh3BdAEjEAAYASAAEgI_cfD_BwE; _gcl_dc=GCL.1594908316.EAIaIQobChMIn7j9qPjR6gIVQp3VCh3BdAEjEAAYASAAEgI_cfD_BwE; CONSENT=YES+IQ.en+202005; PREF=f5=30000&f4=4000000&cvdm=grid&al=en-GB; s_gl=4a0ef782542546cdabe699f65452f947cwIAAABJUQ==; VISITOR_INFO1_LIVE=R8qd16_2UY4; YSC=WB-o4_oGryg; SID=1gdZ7S4KQ14Sat88sB62vHf4KyEmTEygK6dQCXcCWoAm0S41KvycuJQ7ciOtZV2lvmAB9w.; __Secure-3PSID=1gdZ7S4KQ14Sat88sB62vHf4KyEmTEygK6dQCXcCWoAm0S41Audvd-KOc2lMFj4DGYiaxg.; HSID=AtCvq7zy9P7T6IWM_; SSID=APBXSUwulx49okPQA; APISID=E8kKclc3XM02Um7v/AJLVmfVlE6eQigCzy; SAPISID=nClvdfswsDxyzrRn/AmziQ5uU98TY33naE; __Secure-3PAPISID=nClvdfswsDxyzrRn/AmziQ5uU98TY33naE; LOGIN_INFO=AFmmF2swRQIhAPQQRjbpsGbRQAxJudGf_1RWfwqK54nad8PM2R_LRMcYAiBBDF8Kcw7zNfCDkhBc4M3kwjC9Hstd2dPnU9Feat_00g:QUQ3MjNmeW5wMTNySTBHN0ZBbGU2UkhpYVRyUkN1WlpmdE4tT0k2NE1qdEl4Y1l6LXIyclQ2UDAxZ1g2d0djOUFnWkZIcVdlV25PUnlpR0NpU2JTa3F3VUlNdEdGa1EtdDRZUklGODVXQnF4b0RpenRfWUEtM3VHMUJsTkRMVThjTl9QQVRCeEVWanVBU1h6VFZVODFBLXdESHU0LUM1UzZhanJpNjc3WHVNb1JTbUZqN29QZGxr; SIDCC=AJi4QfHcfmiSYKSZOPadXt68MP2yzgMq3XVWogDDgAE656n83f5YELYcaERcVa8sD_Nk9Tq2KQ; __Secure-3PSIDCC=AJi4QfHVpGbaZoODJlUiKsmIBxOLfXTHDaVd3d7o6YaV2vqPTzKM9ZMnIe3uOmudrEj8CdIOBw";
const id = "aqz-KE-bpKQ";
const video = ytdl(id, {
  requestOptions: {
    headers: {
      cookie: COOKIE,
    },
  },
});
qualities = [144, 240, 360, 480, 720, 1080];
list = {};
urls = {};
video.on("info", (info) => {
  for (a of info.formats) {
    if (
      a.hasAudio == false &&
      a.container == "mp4" &&
      a.height &&
      a.fps &&
      qualities.includes(a.height)
    ) {
      if (list[a.height] == undefined) {
        urls[a.height] = a.url;
        list[a.height] = a.fps;
      } else {
        if (list[a.height] < a.fps) {
          urls[a.height] = a.url;
        }
      }
    } else if (a.height == undefined) {
      if (list.audio == undefined) {
        list.audio = a.audioBitrate;
        urls.audio = a.url;
      } else {
        if (list.audio < a.audioBitrate) {
          urls.audio = a.url;
        }
      }
    }
  }
});

setTimeout(function () {
  console.log(urls);
}, 5000);

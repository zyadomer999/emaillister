let name = "zyad";
let sen = new RegExp(
  `/^\/server${new Date().getSeconds() - 1}\/?(?=\/|$)/i`
);
console.log(sen);

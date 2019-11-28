/**
 * 
git add ./
git commit -m "first commit"
git remote add origin https://github.com/JolyI/ahtool.git
git push -u origin master
 * 
 */
// 执行git  命令上传
console.log("################前方高能###################");
console.log("************进入到upload文件**************");
const shell = require("shelljs");
const dayjs = require("dayjs");
const version = dayjs().format("YYMMDDHHmm");
// 执行命令
// shell.exec(
//   `move e:\code\vue-project\anhuitool\dist\*.* e:\code\vue-project\anhuitool\githubs`
// );
shell.exec(
  `move e:\code\vue-project\anhuitool\dist\*.* e:\code\vue-project\anhuitool\githubs`
);
// shell.exec(`move  favicon.ico ../github/favicon.ico`);
// shell.exec("move github/.git githubpage");
// shell.exec(`git add .`);
// shell.exec(`git commit -m "version-${version}"`);
// shell.exec(`git remote add origin https://github.com/JolyI/ahtool.git`);
// shell.exec(`git push -u origin master`);
console.log("###################高能结束#############");
console.log("###################上传完成#############");

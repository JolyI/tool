
echo "***************************前方高能开启*********************************"

# 临时仓库
# tempath = ''
# 判断文件夹是否存在
 if [ ! -d "tem-git" ]; then
  echo "***************************拉取项目*********************************"
  git clone https://github.com/JolyI/ahtool.git tem-git
else 
  cd tem-git
  git reset --hard HEAD
  git pull
  cd ..
fi

rm -rf ./tem-git/static
rm -rf ./tem-git/favicon.ico
rm -rf ./tem-git/index.html

cp -a dist/* tem-git

echo "***************************开始上传*********************************"

cd tem-git
git add .
git commit -m "pack ------$(date +%Y%m%d%H%M)"
git push origin master
echo "***************************高能阶段结束*********************************"

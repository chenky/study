## 唤醒qq聊天窗口
  window.open(`http://wpa.qq.com/msgrd?v=3&uin=${qidianNumber}&site=qq&menu=yes`)
 window.open(`tencent://Message/?Uin=${qidianNumber}&amp;websiteName=qtrade.com.cn&amp;Menu=yes`)

## git技巧
- [远程覆盖本地](https://blog.csdn.net/lorkoy/article/details/50404407)
  - git fetch --all
  - git reset --hard origin/master
- git vsCode git 操作提示 Permission denied, please try again
 ssh-add ~/.ssh/id_rsa
- 合并代码
  - 提交修改代码到本地仓库，$ git commit -m "修改的东西的描述"
  - 切换到master主分支上，$ git checkout master
  - 拉取主分支上面的代码，$ git pull origin master
  - 切换到自己的分支，$ git checkout lbh
  - 将master主分支上的代码合并到当前分支，$ git merge master
  - 将本地的 lbh 分支推送至远端的 lbh分支，如果没有就新建一个，$ git push origin lbh
- 更新submodule
  -  初始化本地配置文件，$ git submodule init
  -  检出父仓库列出的commit，$ git submodule update


## 缓存
- [前端清理缓存](https://stackoverflow.com/questions/49547/how-do-we-control-web-page-caching-across-all-browsers)
  ```<meta charset='UTF-8'>
        <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv="Cache-Control" content="max-age=0, no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
        <meta http-equiv="Expires" content="-1">
- nginx配置缓存
  ```location ~* \.(?:html|htm)$ {  
   add_header "Cache-Control" "max-age=0, no-cache, no-store, must-revalidate";
  add_header "Pragma" "no-cache";
  add_header "Expires" "-1";
}


    
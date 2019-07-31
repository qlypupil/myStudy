#### git remote 查看远程仓库名 默认是 origin

```
    git remote
    origin
```
#### git remote -v 列出详细信息，在每一个名字后面列出其远程url

```
    git remote -v
    origin  git@github.com:qlypupil/myStudy.git (fetch)
    origin  git@github.com:qlypupil/myStudy.git (push)
```
#### git remote show origin 显示远程仓库信息

```
    * 远程 origin
    获取地址：git@github.com:qlypupil/myStudy.git
    推送地址：git@github.com:qlypupil/myStudy.git
    HEAD 分支：master
    远程分支：
        master 已跟踪
    为 'git pull' 配置的本地分支：
        master 与远程 master 合并
    为 'git push' 配置的本地引用：
        master 推送至 master (最新)
```

#### 可以在 .git/config 文件中(隐藏文件)查看 相关信息

```
    [core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
        ignorecase = true
        precomposeunicode = true
    [remote "origin"]
        url = git@github.com:qlypupil/myStudy.git
        fetch = +refs/heads/*:refs/remotes/origin/*
    [branch "master"]
        remote = origin
        merge = refs/heads/master
```

#### 常用命令
1. git branch 查看当前分支（会把搜有的本地分支列出来，当前的分支使用 `* 分支名（如master）` 标出
2. git branch -a 查看所有分支

```
    * master
    remotes/origin/HEAD -> origin/master
    remotes/origin/master
```

3. git branch -r 查看远程分支

```
    origin/HEAD -> origin/master
    origin/master
```

4. git status 查看当前本地分支和远程分支的区别状态

```
    位于分支 master
    您的分支与上游分支 'origin/master' 一致。

    尚未暂存以备提交的变更：
    （使用 "git add <文件>..." 更新要提交的内容）
    （使用 "git checkout -- <文件>..." 丢弃工作区的改动）

            修改：     .gitignore

    未跟踪的文件:
    （使用 "git add <文件>..." 以包含要提交的内容）

            ../.DS_Store

    修改尚未加入提交（使用 "git add" 和/或 "git commit -a"）
```

5. git checkout -- a.js 丢弃本地文件的改动，多个文件逗号隔开

#### clone步骤
1. git clone [git@github.com:qlypupil/myStudy.git] 从远程 clone 代码，默认 master 分支。
2. git checkout daily/0.0.1 如果已有分支，切换到你想要的分支

#### 本地切换新分支步骤
> 1. git pull origin daily/0.0.1
> 2. git checkout daily/0.0.2

#### 新建分支步骤
> 1. git checkout -b daily/0.0.2 新增并切换到当前分支
> 2. git push --set-upstream origin daily/0.0.2 追踪新分支提交

#### 删除分支步骤
假如我现在在daily/0.0.7分支上，想删除daily/0.0.7分支
> 1. 先切换到别的分支: git checkout daily/0.0.6
> 2. 删除本地分支： git branch -d daily/0.0.7
> 3. 如果删除不了可以强制删除，git branch -D daily/0.0.7
> 4. 有必要的情况下，删除远程分支：git push origin --delete daily/0.0.7
> 5. 在从公用的仓库fetch代码：git fetch origin daily/0.0.7:daily/0.0.7
> 6. 然后切换分支即可：git checkout daily/0.0.7

#### git fetch 和 git pull 区别
> 1. git fetch 相当于从远程获取最新到本地，不会merge
>常用的步骤
>    - 1.1  git fetch orign master  //将远程仓库的master分支下载本地当前branch中
>     - 1.2  git log -p master ..origin/master //比较本地的master分支和origin/master分支的差别
>     - 1.3  git merge origin/master //进行合并
或者使用下面的步骤
>     - 1.1  git fetch origin master:tmp //从远程仓库master分支获取最新，在本地建立tmp分支
>     - 1.2  git diff tmp //将当前分支和tmp对比
>     - 1.3  git merge tmp //合并tmp分支到当前分支
>     - 1.4  git branch -d temp  // 删除分支temp
> 2. git pull 相当于从远程获取最新版本并merge到本地
tip: 在实际使用中，git fetch 更安全一些。

#### 提交步骤
> 1. 提交前本地先拉取 git pull origin master
> 2. git add . //暂存本地所有修改的文件 也可以 git add /src/a.js b.js 空格隔开文件名
> 3. git commit -m 'bugfix'  // 提交当前暂存的代码及提交信息 
> 4. git push origin master // 推送到远程仓库

#### git add 撤销步骤(只是 git add)
> 1. git reset HEAD 如果后面什么都不跟，就是把上一次的git add 全部撤销
> 2. git reset HEAD XXX/XXXX/XXX.js 精确撤销某一个确定的文件

#### git add之后又git commit 撤销步骤
1. git log 查看最近的提交节点

```
commit 244d1c75709d4e6b20e789282fc51238d4ecfd83 (HEAD -> master, origin/master, origin/HEAD)
Author: 秦历阳 <liyang.xxxx.org>
Date:   Wed Jul 31 15:19:22 2019 +0800

    git.md init

commit 019d6bd7a69bca6edd9779663f6ac5b0919cfc69
Author: 秦历阳 <liyang.xxxx.org>
Date:   Wed Jul 31 15:16:45 2019 +0800

    git.md init

commit 5aaf1420eceb4b017fab31d78c01e8acd719ec2d
Author: 秦历阳 <liyang.qing@yungu.org>
Date:   Wed Jul 31 15:13:40 2019 +0800

```

2.  git reset commit_id (应该是你的最近的上一个 commit_id) 回退到上一个提交的节点，代码还是自己修改过的
3.  git reset -hard commit_id (应该是你的最近的上一个 commit_id) 回退到上一个提交的节点，代码也发生了改变，变成上一次的

#### 小提示
> 如果要是提交了之后
> 还原之前已经提交的修改，此次操作之前和之后的 commit 和 history 都会被保留，并且把这次撤销作为最新一次的提交  
> git revert HEAD 撤销前一次commit  
> git revert HEAD^ 撤销前前一次commit  
> git revert commit_id (撤销指定的版本，撤销也会作为一次提交进行保存)  
> git revert 是提交一个新的版本，将需要的revert版本的内内容再反向修改回去，版本会递增，不会影响之前的提交。  

> HEAD就是当前活跃分支的游标  
> git reset的作用是修改HEAD的位置，即将HEAD指向的位置改变为之前存在的某个版本  
> 如果想恢复到之前某个提交的版本，且那个版本之后提交的版本我们都不要了，就可以用这种方法  
> git revert的作用通过反做创建一个新的版本  
> 如果我们想恢复之前的某一版本（该版本不是merge类型），但是又想保留该目标版本后面的版本，记录下这整个版本变动流程，就可以用这种方法。  

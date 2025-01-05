# cli 工具基础库

## 目录
```md
espresso-cli
├─ .gitignore
├─ README.md
├─ build // 打包后文件夹
├─ project-template // 初始化项目模版
├─ bin.js // 生产环境执行文件入口，具体见下
├─ bin-local.js // 本底调试执行文件入口，具体见下
├─ package.json // 配置文件，具体见下
├─ src
│  ├─ commands // 命令文件夹
│  │  ├─ create.ts // create命令
│  │  ├─ scope.ts // scope命令
│  │  ├─ package.ts // package命令
│  │  └─ utils // 公共函数
│  ├─ index.ts // 入口文件
│  └─ lib // 公共第三方包
│     ├─ consts.ts // 常量
│     ├─ index.ts
│     ├─ logger.ts // 控制台颜色输出
│     └─ spinner.ts // 控制台loading
├─ tsconfig.json // TypeScript配置文件
└─ tslint.json // tslint配置文件
```
## 安装
```js
```
## 初始化项目
```js
```
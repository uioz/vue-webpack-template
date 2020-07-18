# 配置记录

通过 https://generatewebpackconfig.netlify.app/ 来创建基本安装命令.

我选择了:

- Vue
- PostCss
  - Extract to css file
- ESlint

命令会自动生成如下安装指令:

```
npm install eslint eshint-loader vue-loader postcss mini-css-extract-plugin css-loader postcss-loader postcss-import autoprefixer cssnano --save-dev
```

在此基础上我们进一步安装 webpack 周边:

- browserslist
- webpack webpack-cli
- prettier
- sass
- sass-loader
- babel
- url-loader
- html-webpack-plugin

进一步添加运行时软件, 这些内容不是依赖记得将 `--save-dev` 或者 `-D` 从 `npm install` 或者 `yarn add` 中移除:
- vue
- vuex
- vue-router
- axios(随意)

进一步添加 Vue 编译支持:
- vue-loader
- vue-template-compiler
- vue-style-loader

另外建议不要关闭这个页面, 在随后的编写配置的过程中可以通过这个工具复制配置避免手动编写.


# 初始化

## eslint

首先我们初始化 ESlint , 由于本项目基于 vue 而 Vue 官方提供了针对 ESlint 的语法检查包, 在随后的交互式命令中他会询问是否使用 npm 安装, 选择 No 的情况下如果该包当前不存在则流程失败, 我使用的是 yarn 所以这里提前安装这个包避免后续选择 No 所带来的失败问题:

```
yarn add eslint-plugin-vue -D
```

然后执行 eslint 的初始化功能:

```
npx eslint --init
```

执行如下选项:

1. 检查和找出问题
2. 使用 Javascript 模块
3. 使用 Vue.js 框架
4. 未使用 TypeScript
5. 软件运行的环境在浏览器中
6. 生成的配置文件的格式为 JavaScript
7. 不使用 eslint 初始化安装 eslint-plugin-vue 包

## browserslist

我们的 postcss 及其插件和 babel 都依赖 browserlist 进行代码转换.

在根目录创建 `.browserslistrc` 文件, 写入最常用的浏览器规则:

```
> 0.5%
last 2 versions
Firefox ESR
not dead
```

# 编写配置文件



# next
preload/prefetch
teser
async
stylelint
test
cache
dllplugin
parallel
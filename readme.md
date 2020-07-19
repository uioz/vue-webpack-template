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
- webpack
- webpack-cli
- webpack-dev-server
- url-loader
- html-webpack-plugin

进一步添加预处理器支持:
- sass
- sass-loader
- postcss-px-to-viewport

进一步添加运行时软件, 这些内容不是依赖记得将 `--save-dev` 或者 `-D` 从 `npm install` 或者 `yarn add` 中移除:
- vue
- vuex
- vue-router
- axios(随意)

进一步添加 Vue 编译支持:
- vue-loader
- vue-template-compiler
- vue-style-loader

进一步添加 babel 支持:
- babel-loader
- @babel/core
- @babel/preset-env
- core-js@3

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

## postcss

postcss 本身不提供任何实际功能, 而是提供功能的前提, 功能由插件提供.  
刚才已经安装许多 postcss 插件:
- postcss-import
- postcss-px-to-viewport
- cssnano
- autoprefixer

现在来配置他们, 在项目目录下新建 `postcss.config.js` 文件, 写入如下内容:
```javascript
module.exports = {
  plugins: [
    require("postcss-import"),
    require("autoprefixer"),
    require("cssnano"),
    // see https://github.com/evrone/postcss-px-to-viewport
    // for mobile platform
    // require('postcss-px-to-viewport')
  ]
}
```
postcss 将会通过 webpack 配置中的 postcss-loader 来激活.

## babel

在项目目录下创建 `babel.config.json` 文件, 我们使用 `@babel/preset-env` 进行配置.

使用 `@babel/preset-env` 所需要注意的一点就是, 默认他不提供 polyfill, 而 polyfill 的来源是 corejs.  
你需要告诉 babel 我使用的是哪个版本的 corejs 以及使用何种策略来载入 polyfill(是完整一次载入还是按需载入).

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs":3
      }
    ]
  ]
}
```

## prettier

prettier 用于格式化源代码, 可以通过 API, commit hook, 或者 CI 工具来使用它, 使得源代码风格统一.

你需要安装:
- prettier
- eslint-config-prettier

prettier 是源代码格式化工具, 而 ESlint 是语法规范检查工具, 如果两者间不协调的话, 在使用 prettier 后 ESlint 会报错, 借助于 eslint-config-prettier 这个 eslint 这个扩展, 可以使得两者完美协作.

编辑 `.eslintrc.js` 文件, 追加如下内容:
```
    "extends": [
        "prettier",
        "prettier/vue"
    ],
```

然后添加 `prettier.config.js` 来配置 prettier `.prettierignore` 配置让 prettier 忽略那些不需要格式化的文件.  
另外 prettier 还有编辑器扩展, 扩展可以读取本地的配置以及替换掉默认的格式化工具, 使得在编辑时的格式化就是最终的结果.  


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
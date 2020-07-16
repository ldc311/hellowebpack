#概念
 本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。
 ##入口(entry)
 ##出口(output)
 ##loader
 loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只识别 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。
 在更高层面，在 webpack 的配置中 loader 有两个目标：
   test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
   use 属性，表示进行转换时，应该使用哪个 loader。
 对一个单独的 module 对象定义了 rules 属性，里面包含两个必须属性：test 和 use。这告诉 webpack 编译器(compiler) 如下信息：
 “嘿，webpack 编译器，当你碰到require()/import语句中被解析为 ‘.txt’ 的路径时，在你对它打包之前，先使用 raw-loader 转换一下。”
 ##插件(plugins)：用来增强webpack的功能
 ##模式：通过指定不同环境，进行差异化配置

  webpack学习笔记
  https://blog.csdn.net/zwq0325/category_8990343.html
  从基础到实战 手把手带你掌握新版Webpack4.0
  https://coding.imooc.com/class/316.html
  webpack深入与实战
  https://www.imooc.com/learn/802
  
#创建项目
 npm init -y
 生成package.json, 添加src、dist文件夹

#安装webpack 
npm install webpack webpack-cli --save-dev

#创建配置文件 webpack.config.js
    const path = require('path');

    module.exports = {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        }
    };

#package.json中添加build
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
+     "build": "webpack"
    },

#编译
 npm run build

# babel
 npm install --save-dev babel-loader babel-core
 babel-loader 8.x对应babel-core 7.x，babel-loader 7.x对应babel-core 6.x
 安装后查看package.json,babel-core的版本是6，babel-loader的版本是8，
 版本不对应会产生错误，需要再执行
 npm i --save-dev babel-loader@7.1.5
 npm install --save-dev babel-preset-latest

#加载 CSS
 npm install --save-dev style-loader css-loader
 webpack.config.js添加
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [
            'style-loader',
            'css-loader'
            ]
        }
        ]
    }
#postcss-loader
 npm i -D postcss-loader
 autoprefixer，postcss的插件，添加浏览器前缀的插件
 npm install autoprefixer --save-dev

 新建postcss.config.js
 module.exports = {
    plugins: [
        require('autoprefixer')
    ]
 }
 package.json中增加
   "browserslist": [
    "> 1%",
    "last 7 versions",
    "not ie <= 8",
    "ios >= 8",
    "android >= 4.0"
  ]
  
#加载图片
 npm install --save-dev file-loader

#设定 HtmlWebpackPlugin
 npm install --save-dev html-webpack-plugin
 webpack 的htmlwebpackplugin使用自定义模板custom-template
 https://github.com/jantimon/html-webpack-plugin/tree/master/examples/custom-template
 npm install --save-dev html-loader
 test_tmp.html文件中增加
 <%= require('html-loader!./partial.html') %>

#清理 /dist 文件夹
 npm install clean-webpack-plugin --save-dev
 报错：CleanWebpackPlugin is not a constructor
 https://www.cnblogs.com/PasserByOne/p/12084323.html

#摇树（shaking tree）
 用于移除 JavaScript 上下文中的未引用代码(dead-code)

#实现 Html 内联(custom-template)
 
 
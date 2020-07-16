const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//console.log(path.resolve(__dirname, 'dist'));
module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  mode:"none",
  devtool: "none",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ //默认 index.html
      title: 'webpack 起步',
      minify: {
        //collapseWhitespace: true,//删除空格、换行
      },      
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html 
       //模板文件中使用<%= htmlWebpackPlugin.options.title %> 
       title: 'test html templete ',
       //模板文件中使用 <%= foo %>
       templateParameters: {
         'tparam': ',my from templateParameters'
       },
      filename: 'test.html',
      template: 'src/assets/test_templete.html',
      //inject: false
      inject: 'body' // Inject all scripts into the body 
    })
  ],
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    //publicPath: 'http://123daohang.com' //发布到服务器的时候使用
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader'
        }
      },
      //会跟HtmlWebpackPlugin冲突
      // {
      //   test: /\.html$/,
      //   use: 'html-loader'
      // },
      {
        test: /\.handlebars$/,
        use: 'handlebars-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ] 
        //loader 支持链式传递。能够对资源使用流水线(pipeline)。
        //一组链式的 loader 将按照相反的顺序执行。loader 链中的第一个 loader 返回值给下一个 loader。
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'less-loader'
        ] 
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      }
    ]
  }
};
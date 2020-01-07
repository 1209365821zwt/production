const isProduction=process.env.NODE_ENV!=='development';
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { SkeletonPlugin } = require('page-skeleton-webpack-plugin')
// const path = require('path')
module.exports={
    //配置css实现全局css以及rem的适配
    css:{
      extract: !!isProduction,
    sourceMap: false,
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/index.scss";'
      },  
      //rem的全局配置
      postcss:{
        plugins:[
          require('postcss-plugin-px2rem')({
            rootValue:50,
            exclude:/(node_module)/,
            mediaQuery: false,
            minPixelValue: 3
          })
        ]
      }

    }
},
//代理
  devServer:{
    proxy:{
      '/api':{
         target:'http://www.rigengjihua.cn',
         changeOrigin:true,
         pathRewrite:{
           '^/api':''
         }
      }
    }
  },
  //开发环境，生产环境
  publicPath: process.env.NODE_ENV === 'production'
  ? '/public/dist/'
  : '/',
  // entry: 'index.js',
  // output: {
  //   path: __dirname + '/dist',
  //   filename: 'index.bundle.js'
  // },
  // plugin: [
  //   new HtmlWebpackPlugin({
  //      // Your HtmlWebpackPlugin config
  //   }),

  //   new SkeletonPlugin({
  //     pathname: path.resolve(__dirname, `${customPath}`), // 用来存储 shell 文件的地址
  //     staticDir: path.resolve(__dirname, './dist'), // 最好和 `output.path` 相同
  //     routes: ['/', '/search'], // 将需要生成骨架屏的路由添加到数组中
  //   })
  // ]

}
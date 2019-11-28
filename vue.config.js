const path = require("path");
const webpackHookPlugin = require("webpack-hook-plugin");
const dayjs = require("dayjs");
const version = dayjs().format("YYMMDDHHmm");
process.argv[3] = process.argv[3] || "--prod";
const isProd = process.env.NODE_ENV === "production";

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      },
      postcss: {
        plugins: [
          require("postcss-plugin-px2rem")({
            rootValue: 75,
            selectorBlackList: ["html", "mint-", "mt-"],
            exclude: /(node_module)/,
            mediaQuery: false
          }),
          require("autoprefixer")()
        ]
      }
    }
  },
  pluginOptions: {},
  publicPath: "/ahtool",
  outputDir: "dist",
  assetsDir: "static",
  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: false,

  // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
  transpileDependencies: [],

  // 生产环境 sourceMap
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", "src/components");
    if (isProd) {
      config
        .plugin("hook")
        .use(webpackHookPlugin, [{ onBuildEnd: [`sh deploy.sh`] }]);
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://api.avatardata.cn/",
        ws: true,
        changeOrigin: true
      }
    }
  }
};

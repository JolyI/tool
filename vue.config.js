const { SkeletonPlugin } = require("page-skeleton-webpack-plugin");
const path = require("path");
const webpackHookPlugin = require("webpack-hook-plugin");
// const dayjs = require("dayjs");
// const version = dayjs().format("YYMMDDHHmm");
// process.argv[3] = process.argv[3] || "-prod";
const isProd =
  process.env.NODE_ENV === "production" && process.argv[3] === "-prod";
console.log("***********", isProd);
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
  configureWebpack: {
    plugins: [
      new SkeletonPlugin({
        pathname: path.resolve(__dirname, "./shell"),
        staticDir: path.resolve(__dirname, "./dist"),
        routes: ["/"],
        loading: "chiaroscuro", //..Animations of skeleton page, enumerated values:spin chiaroscuro shine
        text: {
          color: "#EEEEEE"
        },
        image: {
          shape: "rect", // `rect` | `circle`
          color: "#EFEFEF",
          shapeOpposite: []
        },
        button: {
          color: "#EFEFEF",
          excludes: []
        },
        svg: {
          color: "#EFEFEF",
          shape: "circle", // circle | rect
          shapeOpposite: []
        },
        pseudo: {
          color: "#EFEFEF", // or transparent
          shape: "circle" // circle | rect
        },
        debug: false,
        minify: {
          minifyCSS: { level: 2 },
          removeComments: true,
          removeAttributeQuotes: true,
          removeEmptyAttributes: false
        },
        defer: 5000,
        excludes: [".mint-header"],
        remove: [],
        hide: [],
        grayBlock: [],
        cssUnit: "vw",
        decimal: 4,
        logLevel: "info",
        quiet: false,
        noInfo: false,
        logTime: true
      })
    ]
  },
  publicPath: process.env.NODE_ENV === "production" ? "/ahtool" : "/",
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
    config.plugin("html").tap(args => {
      args[0].minify = false;
      return args;
    });
  },
  devServer: {
    port: process.env.port || "0517",
    proxy: {
      "/api": {
        target: "http://api.avatardata.cn",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "" //需要rewrite重写的,
        }
      }
    }
  }
};

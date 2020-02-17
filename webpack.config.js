const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = extension => isDev ? `[name].${ extension }` : `[name].bundle[hash].${ extension }`;
const cssPlugin = extension => {
    const plugin = [{
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: isDev,
            reloadAll: true
        }
    }, "css-loader"];

    if(extension) plugin.push(extension);

    return plugin
} ;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    };

    if(isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;
};

module.exports = {
    target: "web",
    mode: "development",
    entry: {
        main: ["@babel/polyfill", "./src/App.tsx",]
    },
    output: {
        filename: filename("js"),
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".jsx", ".css", ".json", ".scss"]
    },
    devServer: {
        port: 5000,
        hot: isDev,
        historyApiFallback: true,
        publicPath: "/"
    },
    optimization: optimization(),
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename("css"),
        })
    ],
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/i,
                exclude: /node_modules/,
                loader: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: cssPlugin()
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: cssPlugin("sass-loader")
            }
        ]
    }
};
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: {
        "slide": "./src/index.tsx"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /.tsx?/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /.css/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 8080,
        writeToDisk: false,
        open: true,
        headers: {
            referer: "https://weibo.com/"
        }
    }
}

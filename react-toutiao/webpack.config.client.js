const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        client: "./src/client/index.tsx"
    },
    output: {
        path: path.resolve(__dirname, "assets"),
        filename: "[name].js",
        publicPath: ""
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devtool: 'source-map',
    module: {
        rules: [          
            {
                test: /.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                test: /.png?$/,
                exclude: /node_modules/,
                loader: "file-loader",
                options: {
                    esModule: false
                }
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
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['client', 'style'],
            filename: 'index.html',
            template: 'src/client/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css'
        }),
        new CopyPlugin({
            patterns: [
                {from: "media/icon.png", to: "icon.png"}
            ]
        }),
        new webpack.DefinePlugin({
            "_IS_CLIENT_BUILD": true
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "assets"),
        compress: false,
        port: 8000,
        open: true,
        writeToDisk: false
    }
}
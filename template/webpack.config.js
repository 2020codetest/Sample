const path = require("path")
const {VueLoaderPlugin} = require("vue-loader")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = (env, args) => {
    var module = {
        entry: {"app": "./app.ts"},
        output: {
            path: path.resolve(__dirname, "./dist"),
            filename: "js/[name].js"
        },
        resolve: {
            extensions: [".ts", ".js"],
            alias: {
                vue$: "vue/dist/vue.runtime.esm.js"
            }
        },
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: [
                        {
                            loader: "vue-loader"
                        }
                    ]
                },
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: "ts-loader",
                            options: {
                                appendTsSuffixTo: [/\.vue$/]
                            }
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                },
                {
                    test: /\.png|\.jpg/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                limit: 4096,
                                esModule: false,
                                fallback: {
                                    loader: 'file-loader',
                                    options: {
                                        name: 'img/[name].[hash:8].[ext]'
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, "./index.html"),
                filename: "index.html",
                hash: true
            })
        ],
        optimization: {
            minimize: false,
            splitChunks: {
                chunks: "initial",
                cacheGroups: {
                    libs: {
                        name: "libcommon",
                        test: /node_modules/,
                        priority: 10,
                        chunks: "initial"
                    }
                }
            }
        },
        devServer: {
            open: true,
            port: 8080
        }
    }

    return module;
}
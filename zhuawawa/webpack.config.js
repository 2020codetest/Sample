const path = require("path")
const {VueLoaderPlugin} = require("vue-loader")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
    var isProduction = false
    if (argv.mode === "production") {
        isProduction = true;
    }

    var module = {
        entry: {"app": "./src/app.ts"},
        output: {
            path: path.resolve(__dirname, "./dist"),
            filename: "js/[name].js"
        },
        resolve: {
            extensions: [".ts", ".js", ".vue", ".css", ".scss"],
            alias: {
                vue$: "vue/dist/vue.esm.js",
                "@": path.join(__dirname, ".")
            }
        },
        devtool: isProduction ? "": "source-map",
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: "vue-loader",
                    options: {
                        preserveWhitespace: false,
                        loaders: {
                            scss: "vue-style-loader!css-loader!sass-loader",
                        }
                    }
                },
                {
                    test: /\.ts$/,
                    loader: "ts-loader",
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
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
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(jpg|png|gif|jpeg)$/,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]"
                    }
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template:path.join(__dirname,'./index.html'),
                filename:'index.html',
                hash: true
            }),
            new CopyWebpackPlugin([{
                from:__dirname+'/img',
                to:'.'
            }]),
        ],
        devServer: {
            port:8000,
            open: true
        }
    }
    return module;
}
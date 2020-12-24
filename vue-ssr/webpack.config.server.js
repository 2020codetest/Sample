const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
module.exports = {
    entry: {
        server: "./src/server/index.ts"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "lib"),
        libraryTarget: "commonjs",
        library: "ssr"
    },
    resolve: {
        extensions: [".ts", ".js", ".vue"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
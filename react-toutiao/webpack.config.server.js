const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry: {
        server: "./src/server/index.tsx"
    },
    output: {
        path: path.resolve(__dirname, "lib"),
        filename: "[name].js",
        publicPath: "",
        libraryTarget: "commonjs"
    },
    externals: {
        'react': 'react',
        'react-dom/server': 'react-dom/server'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    mode: "production",
    module: {
        rules: [          
            {
                test: /.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "_IS_CLIENT_BUILD": false
        })
    ]
}
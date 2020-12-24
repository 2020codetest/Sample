const path = require("path");

module.exports = {
    mode: 'production',
    entry: {
        server: "./src/server/index.tsx"
    },
    output: {
        path: path.resolve(__dirname, "lib"),
        filename: "[name].js",
        libraryTarget: "commonjs",
        globalObject: "this"
    },
    externals: {
        'react': 'react',
        'react-dom/server': 'react-dom/server'
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_moduels/,
                loader: 'ts-loader'
            }
        ]
    }
}
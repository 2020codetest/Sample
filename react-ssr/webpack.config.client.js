const path = require("path");

module.exports = {
    mode: 'production',
    entry: {
        client: "./src/client/index.tsx"
    },
    output: {
        path: path.resolve(__dirname, "assets"),
        filename: "[name].js"
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
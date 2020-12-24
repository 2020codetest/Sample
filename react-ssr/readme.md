# install
npm install
# build
npm run build

# run
vscode打开index.js，开始调试并选择node.js

# note
使用webpack打包，对于服务端渲染将其按照commonjs的形式打包，并被nodejs包含使用，在这里面把react, react-dom作为external包，避免重复。对于客户端则是默认的编译配置。客户端和服务端的编译配置被引用到一个webpack配置中作为数组一起编译。

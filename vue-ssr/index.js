const ssr = require("./lib/server")
const ssrRender = require("vue-server-renderer")
let content = ""
const renderer = ssrRender.createRenderer()
renderer.renderToString(ssr.ssr(), (err, html) => {
    if (err) throw err;
    content = html
})
const path = require('path')
const express = require('express')

const app = express()
const port = 3000
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.get('/', (req, res) => {
    const html = `
    <html>
        <body>
            <div id="app">${content}</div>
            <script src="assets/client.js" type="text/javascript"></script>
        </body>
    </html>`

    res.send(html)
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
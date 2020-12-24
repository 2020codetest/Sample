const ssr = require("./lib/server")
const detailData = {props: {title: "Item generated from server side", img: "Sample"}}
const content = ssr.getDetail(detailData)
const path = require('path')
const express = require('express')

const app = express()
const port = 3000
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.get('/', (req, res) => {
    const script = `window.initState=${JSON.stringify(detailData.props)};`
    const html = `
    <html>
        <body>
            <div id="root">${content}</div>
            <script type="text/javascript">${script}</script>
            <script src="./assets/client.js"></script>
        </body>
    </html>`

    res.send(html)
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
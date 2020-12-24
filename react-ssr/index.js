const ssr = require("./lib/server")
const content = ssr.getDetail({title: "Hello World From Server", img: "Sample"})
const path = require('path')
const express = require('express')

const app = express()
const port = 3000
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.get('/', (req, res) => {
    const html = `
    <html>
        <body>
            ${content}
            <div id="root"></div>
            <script src="./assets/client.js"></script>
        </body>
    </html>`

    res.send(html)
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
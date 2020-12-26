const ssr = require("./lib/server")
const content = ssr.getRenderContent()
const path = require('path')
const express = require('express')

const app = express()
const port = 3000
app.use('/', express.static(path.resolve(__dirname, 'assets')));
app.get('/', (req, res) => {
    const html = `<html><head><title>今日头条 - TouTiao.com</title><link rel="shortcut icon" href="icon.png" type="image/x-icon"/><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=0.3333,maximum-scale=0.3333,minimum-scale=0.3333,user-scalable=no"/><link href="client.ea9a099b.css" rel="stylesheet" type="text/css"></head><body><div id="root">${content}</div><script src="client.js"></script></body></html> `
    res.send(html)
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
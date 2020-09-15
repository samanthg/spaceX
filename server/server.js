const path = require('path');
const fs = require('fs');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const router = express.Router()
// const App = require('../src/App.js');
const app = express()
import App from '../src/App.js'
const http = require('http');
const port = process.env.PORT || 5000;


app.listen(port, (err) => {
    // err handling
    console.log('server started on port: ' + port);
});

const serverRenderer = (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('An error occurred')
        }
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
            )
        )
    })
}
router.use('^/$', serverRenderer)

router.use(
    express.static(path.resolve(__dirname, '..', 'build'))
)

app.use(router)
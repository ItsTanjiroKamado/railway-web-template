const express = require('express');
const config = require('./  config.json');
const app = express();
const log = console.log;
const port = process.env.PORT;

app.use((req, res, next) => {
    log(`${req.method} - ${req.path}`);
    next();
})
app.use(express.static(__dirname + '/static'))

app.listen(port, () => {
    log(` Listening to PORT ${process.env.PORT} \n Powered by https://railway.app/ \n Links: \n Railway: ${config.railway} \n Custom: ${config.custom} \n The site is now working! \n Source code: ${config.github} `)
  })

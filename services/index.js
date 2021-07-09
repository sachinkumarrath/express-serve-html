const express = require('express')
const app = express()
const port = 3000

// app.use(express.static('static'))

/**
 * Read json and then serve html
 */
app.get('/', (req, res) => {
  res.send(`<html><head></head><body><h1>dynamic html</h1></body></html>`)
});

/**
 * on click of save get the json as request and write the JSON
 */
app.get('/save-json', (req, res) => {

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
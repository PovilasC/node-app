const express = require('express');

const app = new express()

app.get('/', (req, res, next) => {
  res.write(`
  <h1>Hello there</h1>
  <h2>Hello there</h2>
  `);
  res.end()
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
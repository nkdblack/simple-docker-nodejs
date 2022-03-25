const express = require('express');
require('dotenv').config();

const app = express()

app.use(express.json());

app.post('/', (req, res) => {
  console.log("==== body: ", req.body);
  res.send('Hello World!');
})
app.get('/', (req, res) => {
  let j = 0
  for (let i = 0; i<1000; i++){
    j++
  }
  res.send(`Hello World! ${j}`);
})

const port = process.env.PORT || 3500;
app.listen(port,() => {
  console.log(`Example app listening on port ${port}`)
})

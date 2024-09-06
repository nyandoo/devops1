const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from DevOps Project!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
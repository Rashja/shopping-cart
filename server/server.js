const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,'./../public');
const port=7777;


app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'./../public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});

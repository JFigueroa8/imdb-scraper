const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Scraping is Fun!'
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
})
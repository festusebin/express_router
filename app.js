const express = require('express');
const itemRoutes = require('./routes');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(itemRoutes);

app.get('/', (req, res) => {
  return res.json('Start with /items');
});

app.listen(8000, function () {
  console.log('The  server has started on port 8000.');
});

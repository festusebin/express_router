const express = require('express');

const router = express.Router();

const items = [];
let id = 0;

router.get('/items', (req, res) => {
  return res.json(items);
});

router.get('/items/:id', (req, res) => {
  const item = items.find((val) => val.id === Number(req.params.id));
  return res.json(item);
});

router.post('/items', (req, res) => {
  items.push({
    item: req.body.item,
    id: ++id,
  });
  return res.json({ message: 'Created' });
});

router.patch('/items/:id', (req, res) => {
  const item = items.find((val) => val.id === Number(req.params.id));
  item.name = req.body.name;
  return res.json({ message: 'Updated' });
});

router.delete('/items/:id', (req, res) => {
  const itemIndex = items.findIndex((val) => val.id === Number(req.params.id));
  items.splice(itemIndex, 1);

  return res.json({ message: 'Deleted' });
});

module.exports = router;

const express = require('express');
const test = express.Router();

// Mock data
let orders = [
  { id: 1, productId: 1, userId: 1, quantity: 1 },
  { id: 2, productId: 2, userId: 2, quantity: 2 },
];

// Get all orders
test.get('/', (req, res) => {
  res.json(orders);
});

// Get an order by ID
test.get('/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) return res.status(404).send('Order not found');
  res.json(order);
});

// Create a new order
test.post('/', (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    productId: req.body.productId,
    userId: req.body.userId,
    quantity: req.body.quantity
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// Update an order
test.put('/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) return res.status(404).send('Order not found');

  order.productId = req.body.productId;
  order.userId = req.body.userId;
  order.quantity = req.body.quantity;
  res.json(order);
});

// Delete an order
test.delete('/:id', (req, res) => {
  const orderIndex = orders.findIndex(o => o.id === parseInt(req.params.id));
  if (orderIndex === -1) return res.status(404).send('Order not found');

  orders.splice(orderIndex, 1);
  res.status(204).send();
});

module.exports = test;

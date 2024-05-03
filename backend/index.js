const express = require('express');
const app = express();
const PORT = 3000; // You can use any port number you prefer

// Sample data for orders
let orders = [
    { id: 1, name: 'Burger', quantity: 2 },
    { id: 2, name: 'Fries', quantity: 1 },
    { id: 3, name: 'Drink', quantity: 1 }
];

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Food Truck Ordering System');
});

// Get all orders
app.get('/orders', (req, res) => {
    res.json(orders);
});

// Get order by ID
app.get('/orders/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).send('Order not found');
    res.json(order);
});

// Create a new order
app.post('/orders', (req, res) => {
    const { name, quantity } = req.body;
    if (!name || !quantity) return res.status(400).send('Name and quantity are required');
    const id = orders.length + 1;
    const newOrder = { id, name, quantity };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

// Delete order by ID
app.delete('/orders/:id', (req, res) => {
    const orderIndex = orders.findIndex(o => o.id === parseInt(req.params.id));
    if (orderIndex === -1) return res.status(404).send('Order not found');
    orders.splice(orderIndex, 1);
    res.send('Order deleted');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

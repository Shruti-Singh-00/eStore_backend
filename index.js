const express = require('express');
const productCategories = require('./routes/productCategories');
const products = require('./routes/products');
const users = require('./routes/users');
const cors = require('cors');
const app = express();
const PORT = 5001;
const bodyparser = require('body-parser');

app.use(cors());
app.use(bodyparser.json()); // bodyparser - Resolves the data ereceived in the body of the request before it passes it to the relevant route.
app.use('/productCategories', productCategories);
app.use('/products', products);
app.use('/users', users);

const server = app.listen(PORT, () => {
    console.log('App is running on the port - 5001');
});


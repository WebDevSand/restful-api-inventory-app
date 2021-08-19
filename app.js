const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const product_routes = require('./routes/product_routes');
product_routes(app);

const category_routes = require('./routes/category_routes');
category_routes(app);

const user_routes = require('./routes/user_routes');
user_routes(app);

app.listen(port, () => {
    console.log("Server is running on port "+port);
});
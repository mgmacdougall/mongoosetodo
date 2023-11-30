require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./src/models/dbconnection.js');

// Routes
const about = require('./src/routes/about.js');
const todos = require('./src/routes/todos.js');
const main = require('./src/routes/main.js');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json({extended: false}));

// Route definitions
app.use('/main', main);
app.use('/todos', todos);
app.use('/about', about);

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));

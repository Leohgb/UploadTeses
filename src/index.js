const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set Handlebars as the template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Set the views directory
app.set('views', path.join(__dirname, '../views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Define a route
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

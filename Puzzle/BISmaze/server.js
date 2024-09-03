const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to render index.ejs
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Maze Generator', // You can pass dynamic data here if needed
    projectHomeURL: 'https://codebox.net/pages/maze-generator'
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

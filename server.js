const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample APIs
app.get('/students', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'thiru'},
    {id:4, name: 'Raunka'},
    {id:5, name: 'Vikal'}
  ]);
});

app.get('/courses', (req, res) => {
  res.json([
    { id: 1, title: 'Introduction to Programming' },
    { id: 2, title: 'Advanced Node.js' },
    { id:3, title: 'Raunak is the manager' },
    {id:5, title: 'working smeeple project'}

  ]);
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Use the port from environment variables
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

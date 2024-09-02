const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse JSON bodies
app.use(express.json());

// CORS configuration
app.use(cors({
    origin: '*' // Allow requests from this origin
}));

// Define a GET route for the front page
app.get('/', (req, res) => {
    res.render('index');
});

// Define a POST route for /v1/chat/completions
app.post('/v1/chat/completions', async (req, res) => {
    try {
        const { model, messages, temperature, max_tokens, stream } = req.body;

        const response = await axios.post('http://localhost:1234/v1/chat/completions', {
            model,
            messages,
            temperature,
            max_tokens,
            stream,
        });

        res.status(200).json(response.data);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

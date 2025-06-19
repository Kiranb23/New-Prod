const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

const API_KEY = 'ffa1188e06627f4744c47e4874396e81';

// Fetch news with optional pagination and search
app.get('/news', async (req, res) => {
    const { page = 1, query = '', category = '', country = '' } = req.query;
    const pageSize = 10; // Number of articles per page
    const url = `https://gnews.io/api/v4/top-headlines?token=${API_KEY}&page=${page}&max=${pageSize}&q=${query}&category=${category}&country=${country}`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching news');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

'use strict';
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 9000;

// ========================================================================
// API ENDPOINTS
app.get('/test', (req, res) => {
    res.json({
        message: 'YAY, it is working !!!'
    });
});

app.get('/500', (req, res) => {
    res.status(500).send('Oh no 500');
});

app.use(express.static(path.join(__dirname, '..', 'react-project/build/')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Check out the app at http://localhost:${PORT}`);
});
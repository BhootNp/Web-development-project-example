const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json('Hello World from Backend!');
});

app.get('/auth/login', (req, res) => {
    res.json('User logged in successfully!');
});

app.get('/auth/contact', (req, res) => {
    res.json('Nice to hear from you! How can we help?');
});

app.get('/auth/user', (req, res) => {
    res.json('Nice to meet you, User!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
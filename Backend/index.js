const express = require('express');
const app = express();

app.use("/api/user/", require("./routes/route"));

app.get('/', (req, res) => {
    res.json('Welcome to the home page');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
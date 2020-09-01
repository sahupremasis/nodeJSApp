const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});


app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3, 4]);
});

app.post('/api/saveItem', function (req, res) {
    res.send('POST request to the homepage');
});

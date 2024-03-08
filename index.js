const express = require('express');

// init app
const PORT = 4450;
const app = express();

app.get('/', (req, res) => res.send('<h1>Hello World! hi!'));

app.listen(PORT, () => console.log(`App is up and running on port: ${PORT}`));
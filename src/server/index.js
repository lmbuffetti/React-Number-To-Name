const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static('dist'));
app.use(express.static('dist/fonts'));

app.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${process.env.PORT || PORT}!`));

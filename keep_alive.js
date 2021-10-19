const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('afk bot is alive'));

app.listen(port, () => console.log(`afk bot is alive on http://localhost:${port}`));

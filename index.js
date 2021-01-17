const app = require('express')();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('hello'));
app.get('/test', (req, res) => res.send('yo'));
app.listen(PORT);

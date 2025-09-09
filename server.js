const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
const message = process.env.MESSAGE || 'Ciao da Docker!';

app.get('/', (req, res) => res.send(message));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

if (require.main === module) {
  app.listen(port, () => console.log(`App in ascolto su porta ${port}`));
}

module.exports = app;

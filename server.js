const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
const message = process.env.MESSAGE || 'Ciao da Docker!';

const utenti = [
  { nome: 'Mario', cognome: 'Rossi', username: 'mrossi' },
  { nome: 'Luca', cognome: 'Bianchi', username: 'lbianchi' },
  { nome: 'Giulia', cognome: 'Verdi', username: 'gverdi' }
];

app.get('/', (req, res) => res.send(message));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

app.get('/elenco_utenti', (req, res) => {
  res.json(utenti);
});

if (require.main === module) {
  app.listen(port, () => console.log(`App in ascolto su porta ${port}`));
}

module.exports = app;
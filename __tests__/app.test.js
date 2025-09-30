const request = require('supertest');

describe('Express app', () => {
  let app;

  beforeAll(() => {
    // setto il messaggio così il test è deterministico
    process.env.MESSAGE = 'Hello from tests!';
    // importa dopo aver settato l'env
    app = require('../server');
  });

  test('GET /health deve restituire stato ok e uptime numerico', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
    expect(typeof res.body.uptime).toBe('number');
    expect(res.body.uptime).toBeGreaterThanOrEqual(0);
  });

  test('GET / deve restituire il MESSAGE', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello from tests!');
  });

  test('GET /elenco_utenti deve restituire una lista di nomi, cognomi, username', async () => {
    const res = await request(app)
    .get('/elenco_utenti')
    .expect('Content-Type', /json/)
    .expect(200);
  })

});
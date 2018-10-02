const app = require('../server');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('Test GET cards', () => {
  it('deve retornar todas as listas de cards', () => {
    request(app)
    .get('/cards')
    .end((err, res) => {
      expect('Content-Type', /json/);
      expect(res.statusCode).to.be.equal(200);
    });
  });
});

describe('Test POST cards', () => {
  it('deve retornar uma lista de cards criada corretamente', () => {
    const cards = {
      termos: ['termo1', 'termo2'],
      definicoes: ['definicao1', 'definicao2']
    };
    request(app)
    .post('/cards')
    .send(cards)
    .end((err, res) => {
      expect('Content-Type', /json/);
      expect(res.statusCode).to.be.equal(201);
      expect(res.body.termos).to.be.eql(['termo1', 'termo2']);
      expect(res.body.definicoes).to.be.eql(['definicao1', 'definicao2']);
    });
  });
});
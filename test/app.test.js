const app = require('../server');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('Test GET disciplina', () => {
  it('deve retornar todas', () => {
    request(app)
    .get('/disciplina')
    .end((err, res) => {
      expect('Content-Type', /json/);
      expect(res.statusCode).to.be.equal(200);
    });
  });
});
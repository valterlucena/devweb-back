const app = require('../server');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('Test GET usuarios ', () => {
  it('deve retornar todos os usuarios', () => {
    request(app)
    .get('/usuario')
    .end((err, res) => {
      expect('Content-Type', /json/);
      expect(res.statusCode).to.be.equal(200);
    });
  });
});
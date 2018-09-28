const app = require('../server');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('Test GET quizz', () => {
    it('deve retornar todos os cards', () => {
      request(app)
      .get('/quizz')
      .end((err, res) => {
        expect('Content-Type', /json/);
        expect(res.statusCode).to.be.equal(200);
        expect(res.body).to.be.eql([]);
      });
    });
  });
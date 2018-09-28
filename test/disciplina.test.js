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
        expect(res.body).to.be.eql([]);
      });
    });
  });

describe('Teste POST disciplina', () => {
    it('deve retornar uma disciplina criada corretamente', () => {
        const disciplina = {codigo: '123', nome: 'webdev', descricao: 'top'};
        request(app)
        .post('/disciplina')
        .end((err, res) => {
            expect('Content-Type', /json/);
            expect(res.statusCode).to.be.equal(201);
            expect(res.body.codigo).to.be.equal('123');
            expect(res.body.nome).to.be.equal('webdev');
            expect(res.body.descricao).to.be.equal('top');
        });
    });
});
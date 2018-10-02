const app = require('../server');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('Test GET usuarios', () => {
  it('deve retornar todos os usuarios', () => {
    request(app)
    .get('/usuario')
    .end((err, res) => {
      expect('Content-Type', /json/);
      expect(res.statusCode).to.be.equal(200);
    });
  });
});

describe('Test POST usuario aluno', () => {
  it('deve retornar um usuario aluno criado corretamente', () => {
    const usuario = {username: 'aluno', password: 'senhaaluno', type: 'aluno'};
    request(app)
    .post('/usuario')
    .send(usuario)
    .end((err, res) => {
      expect('Content-Type', /json/);
      expect(res.statusCode).to.be.equal(201);
      expect(res.body.username).to.be.equal('aluno');
      expect(res.body.type).to.be.equal('aluno');
    })
  })
})

describe('Test POST usuario professor', () => {
  it('deve retornar um usuario professor criado corretamente', () => {
    const usuario = {username: 'professor', password: 'senhaprofessor', type: 'professor'};
    request(app)
    .post('/usuario')
    .send(usuario)
    .end((err, res) => {
      expect('Content-Type', /json/);
      expect(res.statusCode).to.be.equal(201);
      expect(res.body.username).to.be.equal('professor');
      expect(res.body.type).to.be.equal('professor');
    })
  })
})
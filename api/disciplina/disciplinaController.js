'use strict';

const Disciplina = require('./disciplinaModel');

exports.listaDisciplinas = function (req, res) {
  Disciplina.find((err, disciplina) => {
    if (err)
      res.send(err);
    res.json(disciplina);
  });
};

exports.criaDisciplina = function (req, res) {
  const nova = new Disciplina(req.body);
  nova.save((err, disciplina) => {
    if (err) 
      res.send(err);
    res.json(disciplina);
  });
};

exports.getDisciplina = function (req, res) {
  Disciplina.findById(req.params.disciplinaId, (err, disciplina) => {
    if (err)
      res.send(err);
    res.json(disciplina);
  });
};

exports.atualizaDisciplina = function (req, res) {
  Disciplina.findByIdAndUpdate(req.params.disciplinaId, req.body, {new: true}, (err, disciplina) => {
    if (err)
      res.send(err);
    res.json(disciplina);
  });
};

exports.deletaDisciplina = function (req, res) {
  Disciplina.findByIdAndRemove(req.params.disciplinaId, (err, disciplina) => {
    if (err)
      res.send(err);
    res.json({mensagem: "deu tudo certo"});
  });
};
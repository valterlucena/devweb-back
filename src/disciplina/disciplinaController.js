'use strict';

const Disciplina = require('./disciplinaModel');

exports.listaDisciplinas = function (req, res, next) {
  Disciplina.find((err, disciplina) => {
    if (err)
      next(err);
    res.status(200).json(disciplina);
  });
};

exports.criaDisciplina = function (req, res, next) {
  const nova = new Disciplina(req.body);
  nova.save((err, disciplina) => {
    if (err) 
      next(err);
    res.status(201).json(disciplina);
  });
};

exports.getDisciplina = function (req, res, next) {
  Disciplina.findById(req.params.disciplinaId, (err, disciplina) => {
    if (err)
      next(err);
    res.status(200).json(disciplina);
  });
};

exports.atualizaDisciplina = function (req, res, next) {
  Disciplina.findByIdAndUpdate(req.params.disciplinaId, req.body, {new: true}, (err, disciplina) => {
    if (err)
      next(err);
    res.status(200).json(disciplina);
  });
};

exports.deletaDisciplina = function (req, res, next) {
  Disciplina.findByIdAndRemove(req.params.disciplinaId, (err, disciplina) => {
    if (err)  
      next(err);
    res.status(200).json({mensagem: "deu tudo certo"});
  });
};
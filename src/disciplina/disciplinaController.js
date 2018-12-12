'use strict';

const Disciplina = require('./disciplinaModel');
const Lista = require('../lista/listaModel');

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

exports.addListaDisciplina = function (req, res, next) {
  let lista = new Lista({
    titulo: req.body.titulo
  })
  
  lista.save(function(err, lista) {
    if (err)
      next(err);
    Disciplina.findById(req.params.disciplinaId, function(err, disciplina) {
      if (err)
        next(err);
      disciplina.listas.push(lista._id);
      disciplina.save(function(err) {
        if (err)
          next(err);
        res.json(disciplina);
      });
    });
  });
}

exports.removeListaDisciplina = function (req, res, next) {
  Lista.findByIdAndDelete(req.params.listaId, function(err, lista) {
    if (err)
      next(err);
    Disciplina.findById(req.params.disciplinaId, function(err, disciplina) {
      if (err)
        next(err);
      disciplina.listas.pull(lista._id);
      disciplina.save(function(err) {
        if (err)
          next(err);
        res.json(disciplina);
      });
    });
  });
}
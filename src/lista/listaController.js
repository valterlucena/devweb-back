'use strict';

const Lista = require('./listaModel');

exports.listaListas = function (req, res, next) {
  Lista.find((err, lista) => {
    if (err)
      next(err);
    res.status(200).json(lista);
  });
};

exports.criaLista = function (req, res, next) {
  const novo = new Lista(req.body);
  novo.save((err, lista) => {
    if (err)
      next(err);
    res.status(201).json(lista);
  });
};

exports.getLista = function (req, res, next) {
  Lista.findById(req.params.listaId, (err, lista) => {
    if (err)
      next(err);
    res.status(200).json(lista);
  });
};

exports.atualizaLista = function (req, res, next) {
  Lista.findByIdAndUpdate(req.params.listaId, req.body, {new: true}, (err, lista) => {
    if (err)
      next(err);
    res.status(200).json(lista);
  })
};

exports.deletaLista = function (req, res, next) {
  Lista.findByIdAndDelete(req.params.listaId, (err, lista) => {
    if (err)
      next(err);
    res.status(200).json({mensagem: "deletou toda"});
  })
};

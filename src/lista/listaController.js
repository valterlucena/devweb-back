'use strict';

const Lista = require('./listaModel');
const Card = require('../card/cardModel');

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
  });
};

exports.addCardLista = function (req, res, next) {
  let card = new Card({
    termo: req.body.termo,
    definicao: req.body.definicao
  })
  
  card.save(function(err, card) {
    if (err)
      next(err);
    Lista.findById(req.params.listaId, function(err, lista) {
      if (err)
        next(err); 
      lista.cards.push(card._id);
      lista.save(function(err) {
        if (err)
          next(err);
        res.json(lista);
      });
    });
  });
}

exports.removeCardLista = function (req, res, next) {
  Card.findByIdAndDelete(req.params.cardId, function(err, card) {
    if (err)
      next(err);
    Lista.findById(req.params.listaId, function(err, lista) {
      if (err)
        next(err);
      lista.cards.pull(card._id);
      lista.save(function(err) {
        if (err)
          next(err);
        res.json(lista);
      });
    });
  });
}
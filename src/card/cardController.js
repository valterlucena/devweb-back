'use strict';

const Card = require('./cardModel');

exports.listaCards = function (req, res, next) {
  Card.find((err, card) => {
    if (err)
      next(err);
    res.status(200).json(card);
  });
};

exports.criaCard = function (req, res, next) {
  const novo = new Card(req.body);
  novo.save((err, card) => {
    if (err)
      next(err);
    res.status(201).json(card);
  });
};

exports.getCard = function (req, res, next) {
  Card.findById(req.params.cardId, (err, card) => {
    if (err)
      next(err);
    res.status(200).json(card);
  });
};

exports.atualizaCard = function (req, res, next) {
  Card.findByIdAndUpdate(req.params.cardId, req.body, {new: true}, (err, card) => {
    if (err)
      next(err);
    res.status(200).json(card);
  })
};

exports.deletaCard = function (req, res, next) {
  Card.findByIdAndDelete(req.params.cardId, (err, card) => {
    if (err)
      next(err);
    res.status(200).json({mensagem: "card deletado com sucesso"});
  })
};

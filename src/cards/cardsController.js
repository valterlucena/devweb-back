'use strict';

const Cards = require('./cardsModel');

exports.listaCards = function (req, res, next) {
  Cards.find((err, cards) => {
    if (err)
      next(err);
    res.status(200).json(cards);
  });
};

exports.criaCard = function (req, res, next) {
  const novo = new Cards(req.body);
  novo.save((err, cards) => {
    if (err)
      next(err);
    res.status(201).json(cards);
  });
};

exports.getCard = function (req, res, next) {
  Cards.findById(req.params.cardId, (err, card) => {
    if (err)
      next(err);
    res.status(200).json(card);
  });
};

exports.atualizaCard = function (req, res, next) {
  Cards.findByIdAndUpdate(req.params.cardId, req.body, {new: true}, (err, card) => {
    if (err)
      next(err);
    res.status(200).json(card);
  })
};

exports.deletaCard = function (req, res, next) {
  Cards.findByIdAndDelete(req.params.cardId, (err, card) => {
    if (err)
      next(err);
    res.status(200).json({mensagem: "deletou toda"});
  })
};

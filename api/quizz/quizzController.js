'use strict';

const Quizz = require('./quizzModel');

exports.listaCards = function (req, res, next) {
  Quizz.find((err, cards) => {
    if (err)
      next(err);
    res.status(200).json(cards);
  });
};

exports.criaCard = function (req, res, next) {
  const novo = new Quizz(req.body);
  novo.save((err, cards) => {
    if (err)
      next(err);
    res.status(201).json(cards);
  });
};

exports.getCard = function (req, res, next) {
  Quizz.findById(req.params.cardId, (err, card) => {
    if (err)
      next(err);
    res.status(200).json(card);
  });
};

exports.atualizaCard = function (req, res, next) {
  Quizz.findByIdAndUpdate(req.params.cardId, req.body, {new: true}, (err, card) => {
    if (err)
      next(err);
    res.status(200).json(card);
  })
};

exports.deletaCard = function (req, res, next) {
  Quizz.findByIdAndDelete(req.params.cardId, (err, card) => {
    if (err)
      next(err);
    res.status(200).json({mensagem: "deletou toda"});
  })
};

'use strict';

const Quizz = require('./quizzModel');

exports.listaCards = function (req, res) {
  Quizz.find((err, cards) => {
    if (err)
      res.send(err);
    res.json(cards);
  });
};

exports.criaCard = function (req, res) {
  const novo = new Quizz(req.body);
  novo.save((err, cards) => {
    if (err)
      res.send(err)
    res.json(cards);
  });
};

exports.getCard = function (req, res) {
  Quizz.findById(req.params.cardId, (err, card) => {
    if (err)
      res.send(err);
    res.json(card);
  });
};

exports.atualizaCard = function (req, res) {
  Quizz.findByIdAndUpdate(req.params.cardId, req.body, {new: true}, (err, card) => {
    if (err)
      res.send(err);
    res.json(card);
  })
};

exports.deletaCard = function (req, res) {
  Quizz.findByIdAndDelete(req.params.cardId, (err, card) => {
    if (err)
      res.send(err);
    res.json({mensagem: "deletou toda"});
  })
};

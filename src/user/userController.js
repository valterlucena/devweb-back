'use strict';

const User = require('./userModel');
const Disciplina = require('../disciplina/disciplinaModel');

exports.listaUsuarios = function (req, res) {
  User.find((err, usuario) => {
    if (err)
      res,send(err);
    res.status(200).json(usuario);
  });
};

exports.criaUsuario = function (req, res, next) {
  const novo = new User(req.body);
  novo.save((err, usuario) => {
    if (err)
      res.send(err);
    res.status(201).json(usuario);
  });  
};

exports.getUsuario = function (req, res, next) {
  User.findOne({username: req.params.username}, (err, usuario) => {
    if (err)
      res.send(err);
    res.status(200).json(usuario);
  });
};

exports.atualizaUsuario = function (req, res, next) {
  User.findOneAndUpdate({username: req.params.username}, req.body, {new: true}, (err, usuario) => {
    if (err)
      res.send(err);
    res.status(200).json(usuario);
  });
};

exports.deletaUsuario = function (req, res, next) {
  User.findOneAndRemove({username: req.params.username}, (err, usuario) => {
    if (err)  
      res.send(err);
    res.status(200).json({mensagem: "Usuario deletado com sucesso."});
  });
};

exports.addDisciplinaUser = function (req, res, next) {
  let disciplina = new Disciplina({
    nome: req.body.nome,
    descricao: req.body.descricao
  })
  
  disciplina.save(function(err, disciplina) {
    if (err)
      next(err);
    User.findOne({username: req.params.username}, function(err, user) {
      if (err)
        next(err);
      user.disciplinas.push(disciplina._id);
      user.save(function(err) {
        if (err)
          next(err);
        res.json(user);
      });
    });
  });
}

exports.removeDisciplinaUser = function (req, res, next) {
  Disciplina.findById(req.params.disciplinaId, function(err, disciplina) {
    if (err)
      next(err);
    User.findOne({username: req.params.username}, function(err, user) {
      if (err)
        next(err);
      user.disciplinas.pull(disciplina._id);
      user.save(function(err) {
        if (err)
          next(err);
        res.json(user);
      });
    });
  });
}
'use strict';

const User = require('./userModel');

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
  User.findOnde({username: req.params.username}, (err, usuario) => {
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
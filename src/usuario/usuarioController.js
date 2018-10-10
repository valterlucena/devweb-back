'use strict';

const Usuario = require('./usuarioModel');

exports.listaUsuarios = function (req, res) {
  Usuario.find((err, usuario) => {
    if (err)
      res,send(err);
    res.status(200).json(usuario);
  });
};

exports.criaUsuario = function (req, res, next) {
  const novo = new Usuario(req.body);
  novo.save((err, usuario) => {
    if (err)
      res.send(err);
    res.status(201).json(usuario);
  });  
};

exports.getUsuario = function (req, res, next) {
  Usuario.findOnde({username: req.params.username}, (err, usuario) => {
    if (err)
      res.send(err);
    res.status(200).json(usuario);
  });
};

exports.atualizaUsuario = function (req, res, next) {
  Usuario.findOneAndUpdate({username: req.params.username}, req.body, {new: true}, (err, usuario) => {
    if (err)
      res.send(err);
    res.status(200).json(usuario);
  });
};

exports.deletaUsuario = function (req, res, next) {
  Usuario.findOneAndRemove({username: req.params.username}, (err, usuario) => {
    if (err)  
      res.send(err);
    res.status(200).json({mensagem: "Usuario deletado com sucesso."});
  });
};
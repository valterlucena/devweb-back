'use strict';

const Usuario = require('./usuarioModel');

exports.listaUsuarios = function (req, res, next) {
  Usuario.find((err, usuario) => {
    if (err)
      next(err);
    res.status(200).json(usuario);
  });
};

exports.criaUsuario = function (req, res, next) {
  const novo = new Usuario(req.body);
  novo.save((err, usuario) => {
    if (err)
      res.send(err);
    res.json(usuario);
  });  
};

exports.getUsuario = function (req, res, next) {
  Usuario.findById(req.params.usuarioId, (err, usuario) => {
    if (err)
      next(err);
    res.status(200).json(usuario);
  });
};

exports.atualizaUsuario = function (req, res, next) {
  Usuario.findByIdAndUpdate(req.params.usuarioId, req.body, {new: true}, (err, usuario) => {
    if (err)
      next(err);
    res.status(200).json(usuario);
  });
};

exports.deletaUsuario = function (req, res, next) {
  Usuario.findByIdAndRemove(req.params.usuarioId, (err, usuario) => {
    if (err)  
      next(err);
    res.status(200).json({mensagem: "apagou toda"});
  });
};
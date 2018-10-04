'use strict';

const Usuario = require('./usuarioModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.listaUsuarios = function (req, res, next) {
  Usuario.find((err, usuario) => {
    if (err)
      next(err);
    res.status(200).json(usuario);
  });
};

exports.criaUsuario = function (req, res, next) {
  const key = req.body.password;
  bcrypt.hash(key, saltRounds, (err, hash) => {
    req.body.password = hash;
    const novo = new Usuario(req.body);
    novo.save((err, usuario) => {
      if (err) 
        next(err);
      res.status(201).json(usuario);
    });
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
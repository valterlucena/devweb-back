var express = require('express');
var jwt = require('jsonwebtoken');
var config = require('./config');
var Usuario = require('../usuario/usuarioModel');

module.exports = (app) => {
    app.route('/autenticacao')
        .post(function(req, res) {
            Usuario.findOne({
                username: req.body.username
            }, function(err, usuario) {
                if (err) throw err;
                if (!usuario) {
                    res.json({success: false, message: 'Auth failed. User not found'});
                } else if (usuario) {
                    if (usuario.password != req.body.password) {
                        res.json({success: false, message: 'Auth failed. Wrong password'});
                    } else {
                        const payload = {
                            type: usuario.type
                        };

                        var token = jwt.sign(payload, config.secret, {
                            expiresIn: 3600
                        });

                        res.json({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token
                        });
                    }
                }
            });
        });
};
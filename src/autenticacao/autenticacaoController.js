'use strict';

const jwt = require('jsonwebtoken');
const Usuario = require('../usuario/usuarioModel');
const config = require('../../config/secret');

exports.login = (req, res, next) => {
    Usuario.findOne({
        username: req.body.username
    }).then((user) => {
        console.log('achei');
        console.log(user);
        if (!user) {
            return res.json({success: false, message: 'Authentication failed. User not found. '});
        } else if (user) {
            if (req.body.username === user.username && user.comparePassword(req.body.password, user.password)) {
                const payload = {
                    username: user.username,
                };
                const token = jwt.sign(payload, config.secret);
                return res.json({success: true, token: token, message: 'Enjoy your token'});
            } else {
                return res.json({success: false, message: 'Authentication failed. Wrong password'});
            }
        }
    })
    .catch((err) => {
        console.log(err);
        return res.json({success: false, message: 'Something went wrong. Try again', error: err.message});
    })
}


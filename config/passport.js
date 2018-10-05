const passport    = require('passport'),
      passportJWT = require('passport-jwt'),
      JWTStrategy = passportJWT.Strategy,
      ExtractJWT  = passport.ExtractJWT,
      Usuario     = require('../src/usuario/usuarioModel');

passport.use(new JWTStrategy({
      jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey    : 'secret'
}, function (jwtPayload, cb) {
    return Usuario.findById(jwtPayload.id)
      .then(usuario => cb(null, usuario))
      .catch(err => cb(err));
}

}))
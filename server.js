const express   = require('express'),
    bodyParser  = require('body-parser'),
    morgan      = require('morgan'),
    fs          = require('fs'),
    path        = require('path'),
    app         = express(),
    port        = process.env.PORT || 3000,
    swagger     = require('./docs/docsRoute'),
    mongoose    = require('mongoose');
    // cors        = require('cors'),
    // passport    = require('passport'),
    // session     = require('express-session'),
    // LocalStrategy = require('passport-local').Strategy;

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('tiny', { stream: accessLogStream }))

app.use('/static', express.static(__dirname + '/static'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// comentado pra usar firebase mais a frente
// app.use(cors());

// app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false}));
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(
//     function(username, password, done) {
//         User.findOne({ username: username }, function (err, user) {
//             if (err) { return done(err); }
//             if (!user) { return done(null, false); }
//             if (!user.verifyPassword(password)) { return done(null, false); }
//         });
//     }
// ));

let quizz      = require('./api/quizz/quizzRoutes'),
    disciplina = require('./api/disciplina/disciplinaRoutes');

quizz(app);
disciplina(app);
swagger(app);

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

app.listen(port, () => console.log(`App running on port ${port}`))

module.exports = app
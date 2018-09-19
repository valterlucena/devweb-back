const express   = require('express'),
    bodyParser  = require('body-parser'),
    morgan      = require('morgan'),
    fs          = require('fs'),
    path        = require('path'),
    app         = express(),
    port        = process.env.PORT || 3000,
    swagger     = require('./docs/docsRoute'),
    mongoose    = require('mongoose');

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('tiny', { stream: accessLogStream }))

app.use('/static', express.static(__dirname + '/static'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let quizz      = require('./api/quizz/quizzRoutes'),
    disciplina = require('./api/disciplina/disciplinaRoutes');

quizz(app);
disciplina(app);
swagger(app);

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

app.listen(port, () => console.log(`App running on port ${port}`))

module.exports = app
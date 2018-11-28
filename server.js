const express   = require('express'),
    bodyParser  = require('body-parser'),
    morgan      = require('morgan'),
    fs          = require('fs'),
    path        = require('path'),
    app         = express(),
    port        = process.env.PORT || 8080,
    swagger     = require('./docs/docsRoutes'),
    mongoose    = require('mongoose'),
    cors        = require('cors'),
    autenticacao = require('./src/autenticacao/autenticacaoRoutes');

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('tiny', { stream: accessLogStream }))

app.use('/static', express.static(__dirname + '/static'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors());

let lista      = require('./src/lista/listaRoutes'),
    card       = require('./src/card/cardRoutes'),
    disciplina = require('./src/disciplina/disciplinaRoutes'),
    user       = require('./src/user/userRoutes');

lista(app);
card(app);
disciplina(app);
user(app);
swagger(app);
autenticacao(app);

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

app.listen(port, () => console.log(`App running on port ${port}`))

module.exports = app
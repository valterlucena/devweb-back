const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UsuarioSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['aluno', 'professor']
    },
    disciplinas: [Schema.Types.ObjectId]
});

UsuarioSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            user.password = hash;
            next();
        });
    });
});

UsuarioSchema.method({
    comparePassword (reqPassword, userPassword) {
        return bcrypt.compareSync(reqPassword, userPassword)
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
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
    disciplinas: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Disciplina'
        }]
    },
    listas: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Lista'
            }
        ]
    }
});

UserSchema.pre('save', function (next) {
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

UserSchema.method({
    comparePassword (reqPassword, userPassword) {
        return bcrypt.compareSync(reqPassword, userPassword)
    }
});

module.exports = mongoose.model('User', UserSchema);
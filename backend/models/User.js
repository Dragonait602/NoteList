const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: [true, "Будь ласка, вкажіть і'мя користувача"],
            unique: true,
            trim: true,
        },
        email:{
            type: String,
            required: [true, "Будь ласка, вкажіть email"],
            unique: true,
            trim: true,
            match: [/.+@.+\..+/, "Будь ласка, введіть коректний email"],
            lowercase: true,
        },
        password:{
            type: String,
            trim: true,
            required: [true, "Будь ласка, вкажіть пароль"],
            minlenght: 6,
        },
        todos:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Todo',
            }
        ]
    },
    {
        timestamps: true,
    }
)

UserSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        return next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

module.exports = mongoose.model('User', UserSchema)
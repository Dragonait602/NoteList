const express = require('express')
const touter = express.Router
const User = require('../models/User')
const bcrypt = require('bcryptjs')

router.post('/register', async(req, res) =>{
    try{
        const {username, email, password} = req.body;
        if(!username || !email || !password){
            return res.status(400).json({message: 'Будь ласка, заповність усі поля'})
        }
        const existingUser = await User.findOne({ $or: [{email},{username}]})
        if(existingUser){
            return res.status(400).json({message: 'Користувач з таким іменем або email уже створено'})
        }
        const newUser = new User({username, email, password})
        await newUser.save()
        res.status(201).json({message:'Користувача успішно створено!'})
    }catch(error){
        console.error(error);
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'})
    }
})

router.post('/login', async(req,res)=>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: 'Будь ласка заповніть усі поля'})
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message: 'Неправильний email або пароль'})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({message: 'Неправильний email або пароль'})
        }

        res.status(200).json({
            message: 'Вхід успішний',
            user:{
                id: user._id,
                username: user.username,
            }
        })

    }catch(error){
        console.error(error);
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'})
    }
})

module.exports = router;
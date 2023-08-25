const UserSchema  = require('../models/user-model')
const bcrypt = require('bcrypt')
class UserService {
    async registration(email , password){
        const candidate = await_UserModel.findOne( {email})
        if (candidate){
            throw new Error(`Пользователь с почтовым адресом ${email} не существует!`)

        }
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await UserModel.create({email, password: hashPassword})
    }
}
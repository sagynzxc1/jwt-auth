const UserSchema = require('../models/user-model')
const bcrypt = require('bcrypt')
const mailService = require('./mail-service')
const TokenService = require('./token-service')
class UserService {
    async registration(email , password){
        const candidate = await_UserModel.findOne( {email})
        if (candidate){
            throw new Error(`Пользователь с почтовым адресом ${email} не существует!`)

        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        const user = await UserModel.create({email, password: hashPassword, activationLink});
        await mailService.sendActivationMail(email, activationLink  )
        const tokens = TokenService.generateTokens
    }
}
module.exports = new UserService();
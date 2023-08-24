class UserController {
    async register(req, res, next){
        try{
            
        }catch(err){
            console.warn(err)
        }
    }
    async login(req, res, next){
        try{

        }catch(err){
            console.warn(err)
        }
    }
    async logout(req, res, next){
        try{

        }catch(err){
            console.warn(err)
        }
    }
    async activate(req, res, next){
        try{

        }catch(err){
            console.warn(err)
        }
    }
    async refresh(req, res, next){
        try{

        }catch(err){
            console.warn(err)
        }
    }
    async getUsers(req, res, next){
        try{
            res.json(['123','q23we'])
        }catch(err){
            console.warn(err)
        }
    }
}

module.exports = new UserController();
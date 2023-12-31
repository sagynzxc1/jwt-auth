const Router = require('express').Router;
const UserController = require( '../controllers/user-controller')
const router = new Router()


router.post('/register', UserController.register)
router.post('/login' , UserController.login)
router.post('/logout', UserController.logout)
router.post('/activate/:link' , UserController.activate)
router.get('/refresh', UserController.refresh)
router.get('/users', UserController.getUsers)


module.exports = router
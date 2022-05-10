const router = require('express').Router()
const { CreateUser, GetAllUsers, EditUser, DeleteUser } = require('../controllers/Users')

router.get('/', GetAllUsers)
router.post('/', CreateUser)
router.put('/', EditUser)
router.delete('/', DeleteUser)

module.exports = router

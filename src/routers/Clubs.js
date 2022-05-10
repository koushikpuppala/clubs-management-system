const router = require('express').Router()
const { CreateClub, GetAllClubs, EditClub, DeleteClub } = require('../controllers/Clubs')

router.get('/', GetAllClubs)
router.post('/', CreateClub)
router.put('/', EditClub)
router.delete('/', DeleteClub)

module.exports = router

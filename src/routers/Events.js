const router = require('express').Router()
const { CreateEvent, GetAllEvents, EditEvent, DeleteEvent } = require('../controllers/Events')

router.get('/', GetAllEvents)
router.post('/', CreateEvent)
router.put('/', EditEvent)
router.delete('/', DeleteEvent)

module.exports = router

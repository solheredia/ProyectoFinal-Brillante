const { Router } = require('express');
const router = Router();
const {getHours, createHours, getHour, putHours, deleteHours, patchHours} = require('../controllers/hours.controllers')
router.route('/')
    .get(getHours)
    .post(createHours)

router.route('/:id')
    .get(getHour)
    .put(putHours)
    .delete(deleteHours)
    

module.exports = router;
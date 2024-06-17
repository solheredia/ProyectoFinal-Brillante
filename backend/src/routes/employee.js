const { Router } = require('express');
const router = Router();
const { getEmpls, createEmpl, getEmpl, updateEmpl, deleteEmpl } = require('../controllers/employee.controllers');

router.route('/')
    .get(getEmpls)
    .post(createEmpl)

router.route('/:id')
    .get(getEmpl)
    .put(updateEmpl)
    .delete(deleteEmpl)

module.exports = router;
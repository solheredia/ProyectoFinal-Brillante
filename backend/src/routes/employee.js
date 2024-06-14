const { Router } = require('express');
const router = Router();
const { getEmpls, createEmpl, getEmpl, updateEmpl, deleteEmpl, patchEmpl } = require('../controllers/employee.controllers');

router.route('/')
    .get(getEmpls)
    .post(createEmpl)

router.route('/:id')
    .get(getEmpl)
    .put(updateEmpl)
    .delete(deleteEmpl)
    .patch(patchEmpl)
module.exports = router;
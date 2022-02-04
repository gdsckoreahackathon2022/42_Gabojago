const express = require('express');
const router = express.Router();
const controller = require('./user');

router.get('/:id/favorites', controller.remove);
router.post('/:id/favorites', controller.remove);
router.delete('/:id/favorites', controller.remove);

router.get('/:id/favorites/groups', controller.session);
router.patch('/:id/point', controller.email);
router.patch('/:id/tier', controller.auth);
module.exports = router;
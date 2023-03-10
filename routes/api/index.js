const router = require('express').Router();
const thoughtsRoutes = require('./thoughtsRoute');
const usersRoutes = require('./usersRoutes');

router.use('/thoughts', thoughtsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
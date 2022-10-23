const router = require('express').Router();
const thoughtRoutes = require('./thought-Routes');
const userRoutes = require('./user-Routes');

router.use('/user', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;

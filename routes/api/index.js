const router = require('express').Router();
const usersRoutes = require('./user-Routes');
const thoughtsRoutes = require('./thought-routes');


router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);


module.exports = router;
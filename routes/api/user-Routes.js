const router = require('express').Router();
const { 
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user-Controller');
const {
    addFriend,
    deleteFriend,
} = require('../../controllers/friend-Controller');


// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// FRIEND ROUTES
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;

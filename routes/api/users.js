const router = require('express').Router();
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    removeFriend,
} = require('../../controllers/usersController');

// /api/users
router.route('/').get(getAllUsers).post(createUsers);

// /api/users/:userId
router.route("/:id").get(getUsersById).put(updateUsers).delete(deleteUsers);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;

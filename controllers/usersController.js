const { Thoughts, Users } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    Users.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a user
  getSingleUser(req, res) {
    Users.findOne({ _id: req.params.usersId })
    .populate({ 
        path: "thoughts", 
        select: "-__v",
})
      .then((users) =>
        !users
          ? res.status(404).json({ message: 'No users with that ID' })
          : res.json(users)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create users
  createUsers(req, res) {
    Users.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete users
  deleteUsers(req, res) {
    Users.findOneAndDelete({ _id: params.id })
      .then((users) =>
        !users
          ? res.status(404).json({ message: 'No users with that ID' })
          : Thoughts.deleteMany({ _id: { $in: users.thoughts } })
      )
      .then(() => res.json({ message: 'Thoughts and users deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update users
  updateUsers(req, res) {
    Users.findOneAndUpdate(
      { _id: req.params.usersId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((users) =>
        !users
          ? res.status(404).json({ message: 'No users with this id!' })
          : res.json(users)
      )
      .catch((err) => res.status(500).json(err));
  },

  createFriend(req, res) {
        Users.findOneAndUpdate(
          { _id: req.params.usersId },
          { $addToSet: { friends: params.friendId } },
          { runValidators: true, new: true }
        )
          .then((users) =>
            !users
              ? res.status(404).json({ message: 'No users with this id!' })
              : res.json(users)
          )
          .catch((err) => res.status(500).json(err));
      },

  deleteFriend(req, res) {
    Users.findOneAndDelete(
        { _id: req.params.usersId },
        { $pull: { friends: params.friendId } },
        { runValidators: true, new: true }
        )
    
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
};
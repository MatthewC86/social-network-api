const { Thoughts, Users } = require('../models');

module.exports = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thoughts.find({})
    .populate({
      path: "reactions",
      select: "-__v",
    })
    .select("-__v")
    .sort({ _id: -1 })
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a thought
  getSingleThought(req, res) {
    Thoughts.findOne({ _id: req.params.Id })
    .populate({
      path: "reactions",
      select: "-__v",
    })
    .select("-__v")
    .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create thoughts
  createThoughts(req, res) {
    Thoughts.create(req.body)
    .then(({ _id }) => {
      return User.findOneAndUpdate(
        { _id: body.userId },
        { $push: { thoughts: _id } },
        { new: true }
      );
    })
    .then((users) => {
      if (!users) {
        return res
          .status(404)
          .json({ message: "Thought created but no user with this id!" });
      }

      res.json({ message: "Thought successfully created!" });
    })
    .catch((err) => res.json(err));
  },
  // Delete thoughts
  deleteThoughts(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.thoughtsId })
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : Users.deleteMany({ _id: { $in: thoughts.users } })
      )
      .then(() => res.json({ message: 'Thoughts and users deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update thoughts
  updateThoughts(req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtsId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with this id!' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },

  createReaction(req, res) {
        Thoughts.findOneAndUpdate(
          { _id: req.params.thoughtsId },
          { $addToSet: { reactions: { reactionId: params.reactionId } } },
          { runValidators: true, new: true }
        )
          .then((thoughts) =>
            !thoughts
              ? res.status(404).json({ message: 'No thoughts with this id!' })
              : res.json(thoughts)
          )
          .catch((err) => res.status(500).json(err));
      },

  deleteReaction(req, res) {
    Thoughts.findOneAndDelete(
        { _id: req.params.thoughtsId },
        { $pull: { reactions: { reactionId: params.reactionId } } },
        { runValidators: true, new: true }
        )
    
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
};
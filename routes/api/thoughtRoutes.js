const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThoughts);

// /api/thoughts/:thoughtsId
router.route('/:thoughtId').get(getSingleThought).put(updateThoughts).delete(deleteThoughts).post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/:reactionId').delete(deleteReaction);
  

module.exports = router;
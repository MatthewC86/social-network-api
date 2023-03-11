const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtsController.js');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThoughts);

// /api/thoughts/:thoughtsId
router
  .route('/:thoughtsId')
  .get(getSingleThought)
  .put(updateThoughts)
  .delete(deleteThoughts);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtsId/reactions").post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtsId/reactions/:reactionId").delete(deleteReaction);
  

module.exports = router;
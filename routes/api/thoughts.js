const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThoughts,
  updateThoughts,
  deleteThoughts,
} = require('../../controllers/thoughtsController.js');

// /api/courses
router.route('/').get(getThoughts).post(createThoughts);

// /api/courses/:courseId
router
  .route('/:thoughtsId')
  .get(getSingleThought)
  .put(updateThoughts)
  .delete(deleteThoughts);

module.exports = router;
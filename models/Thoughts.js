const { Schema, model } = require('mongoose');

// Schema to create a course model
const thoughtsSchema = new Schema(
    {
        thoughtsText: {
          type: String,
          required: "Thoughts are Required",
          minlength: 1,
          maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // Use a getter method to format the timestamp on query
            get: (timestamp) => dateFormat(timestamp),
          },
          username: {
            type: String,
            required: true,
          },
          reactions: [ReactionSchema],
        },
        {
          toJSON: {
            virtuals: true,
            getters: true,
          },
          id: false,
        }
      );

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;

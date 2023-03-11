const { Schema, Types, model } = require('mongoose');


const ReactionSchema = new Schema(
  {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },

      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      
        username: {
          type: String,
          required: true,
        },
        
        createdAt: {
          type: Date,
          default: Date.now,
          // Use a getter method to format the timestamp on query
          get: (timestamp) => dateFormat(timestamp),
        },
        
      },
      {
        toJSON: {
          virtuals: true,
          getters: true,
        },
        id: false,
      }
    );

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

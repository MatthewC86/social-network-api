const { Schema, model } = require('mongoose');

// Schema to create a course model
const userSchema = new Schema(
    {
        username: {
          type: String,
          required: "A username is Required",
          unique: true,
          trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: "A username is Required",
            match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
          },
      
          thoughts: [
          {
            type: Schema.Types.ObjectId,
            ref: "Thought",
          },
        ],
        friends: [
            {
              type: Schema.Types.ObjectId,
              ref: "User",
            },
          ],
        },
        {
          toJSON: {
            virtuals: true,
          },
          id: false,
        }
      );

       userSchema.virtual("friendCount").get(function () {
         return this.friends.length;
       });

const User = model('User', userSchema);

module.exports = User;

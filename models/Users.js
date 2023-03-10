const { Schema, model } = require('mongoose');

// Schema to create a course model
const usersSchema = new Schema(
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
            ref: "Thoughts",
          },
        ],
        friends: [
            {
              type: Schema.Types.ObjectId,
              ref: "Users",
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

const Users = model('users', usersSchema);

module.exports = Users;

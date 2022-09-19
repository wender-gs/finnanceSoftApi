const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

UsersSchema
  .virtual('url')
  .get(function () {
    return `/user/${this._id}`;
  })

module.exports = mongoose.model('Users', UsersSchema);

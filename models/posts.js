const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  title: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  description: String,
  expectedPhotoURL: String,
  actualPhotoURL: { type: String, required: true },
  isOpenToDual: { type: Boolean, default: false },
});

const Post = mongoose.model("posts", postSchema);

module.exports = Post;

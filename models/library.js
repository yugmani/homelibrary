const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  category: {
    type: String,
  },
  publisher: {
    type: String,
  },
  pubDate: {
    type: Date,
  },
  ISBN: {
    type: String,
  },
  isRead: {
    type: Boolean,
  },
  review: {
    type: String,
  },
});

module.exports = mongoose.model("BookList", bookSchema, "books");

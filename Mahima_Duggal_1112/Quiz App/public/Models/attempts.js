const mongoose = require('mongoose');

const attemptSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  quizName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  score: {
    type: Number,
    required: true,
  },
  correctAnswers: {
    type: Number,
    required: true,
  },
});

const Attempt = mongoose.model('Attempt', attemptSchema);
module.exports = Attempt;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JambSchema = new Schema({
  year: {
    required: true,
    type: Number
  },
  subject: {
    required: true,
    type: String
  },
  question_number: {
    required: true,
    type: Number
  },
  question: {
    required: true,
    type: String
  },
  options: {
    required: true,
    type: String
  },
  answer: {
    required: false,
    type: String
  },
  solution: {
    type: String
  },
  diagrams: {
    type: Array
  },
  text: {
    type: Array
  }
});

module.exports = Jamb = mongoose.model("Jamb", JambSchema);

const { Schema, model } = require("mongoose");

const jobListingsSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = jobListingsSchema;

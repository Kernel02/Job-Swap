const { Schema, model } = require("mongoose");
const BusinessUser = require('./BusinessUser');
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

const JobListings = model("JobListings", jobListingsSchema);
module.exports = JobListings;

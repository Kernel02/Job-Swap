const { Schema, model } = require("mongoose");
const jobListingsSchema = require('./JobListings')

const businessUserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    jobListings: [jobListingsSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const BusinessUser = model("BusinessUser", businessUserSchema);

module.exports = BusinessUser;

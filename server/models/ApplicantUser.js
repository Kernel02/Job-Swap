const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const applicantUserSchema = new Schema({
  username: {
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
    required: false,
  },
  isBusinessUser: {
    type: Boolean,
    default: false,
  },
  jobListings: [
    {
      type: Schema.Types.ObjectId,
      ref: "JobListings",
    },
  ],
});

applicantUserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

applicantUserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const ApplicantUser = model("ApplicantUser", applicantUserSchema);

module.exports = ApplicantUser;

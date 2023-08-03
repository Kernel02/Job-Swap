const { Schema, model } = require("mongoose");
const jobListingsSchema = require("./JobListings");
const bcrypt = require("bcrypt");

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
    jobListings: {
      type: Schema.Types.ObjectId,
      ref: 'JobListings'
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

businessUserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

businessUserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const BusinessUser = model("BusinessUser", businessUserSchema);

module.exports = BusinessUser;

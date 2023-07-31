const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const applicantUserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
          },
          password: {
            type: String,
            required: true,
          },
    },
);


applicantUserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });


applicantUserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const Applicant = model('Applicant', applicantUserSchema);

module.exports = Applicant;
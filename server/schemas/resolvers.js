const { ApplicantUser, BusinessUser, JobListings} = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: {
        applicantUser: async()  => {
            return await ApplicantUser.find({});
        },

        // businessUser: async () => {
        //     return await BusinessUser.find({}).populate('jobListings');
        // },
        
        jobListings: async() => {
            return await JobListings.find({})
        },
    },
    Mutation: {
        // addBusinessUser: async(parent, {name, email,password, description}) => {
        //     return await BusinessUser.create({name, email,password, description});
        // },
        addJobListings: async(parent, {jobTitle, jobDescription, salary}) => {
            return await JobListings.create({jobTitle,jobDescription, salary});
        },
        addApplicantUser: async(parent, {username, email, password}) => {
            return await ApplicantUser.create({username, email, password});
        },
        logIn: async (parent, { email, password }) => {
            // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
            const user = await ApplicantUser.findOne({ email });
            console.log(user);
            // If there is no user with that email address, return an Authentication error stating so
            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }
      
            // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
            const correctPw = await user.isCorrectPassword(password);
      
            // If the password is incorrect, return an Authentication error stating so
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            // If email and password are correct, sign user into the application with a JWT
            const token = signToken(user);
      
            // Return an `Auth` object that consists of the signed token and user's information
            return { token, applicantUser: user };
    },
}
};


module.exports = resolvers;
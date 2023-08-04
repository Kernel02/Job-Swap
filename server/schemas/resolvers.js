const { ApplicantUser, BusinessUser, JobListings} = require('../models');

const resolvers = {
    Query: {
        applicantUser: async()  => {
            return await ApplicantUser.find({});
        },

        businessUser: async () => {
            return await BusinessUser.find({}).populate('jobListings');
        },
        
        jobListings: async() => {
            return await JobListings.find({}).populate('businessUsers');
        },
    },
    Mutation: {
        addBusinessUser: async(parent, {name, email,password, description}) => {
            return await BusinessUser.create({name, email,password, description});
        },
        addJobListings: async(parent, {jobTitle, jobDescription, salary}) => {
            return await JobListings.create({jobTitle,jobDescription, salary});
        },
        addApplicantUser: async(parent, {username, email, password}) => {
            return await ApplicantUser.create({username, email, password});
        },
    },
};


module.exports = resolvers;
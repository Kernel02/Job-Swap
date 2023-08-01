const { BusinessUser, ApplicantUser, JobListings} = require('mongoose');

const resolvers = {
    Query: {
        JobListings: async() => {
            return JobListings.find({});
        },
        
    }
}
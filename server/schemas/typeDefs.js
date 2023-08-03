const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type ApplicantUser {
        _id: ID!
        username: String!
        email: String!
    }


    type BusinessUser {
        _id: ID!
        name: String!
        description: String!
        jobListings: [JobListings]
    }

    type JobListings {
        _id: ID!
        jobTitle: String!
        jobDescription: String!
        salary: Int
    }

    type Query {
        applicantUser: [ApplicantUser]
        businessUser: [BusinessUser]
        jobListings: [JobListings]
    }
`;


module.exports = typeDefs;
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type ApplicantUser {
        _id: ID!
        username: String!
        email: String!
        password: String!
        jobListings: [JobListings]
    }



    type JobListings {
        _id: ID!
        jobTitle: String!
        jobDescription: String!
        salary: Int
    }

    type Auth {
        token: ID!
        applicantUser: ApplicantUser
      }
    


    type Query {
        applicantUser: [ApplicantUser]
        jobListings: [JobListings]
    }

    type Mutation {

        logIn(email: String!, password: String!): Auth


        addApplicantUser(username: String!, email: String!, password: String!, isBusinessUser: Boolean!): Auth
        removeApplicantUser(applicantUserid: ID!): Auth



        addJobListings(jobTitle: String!, jobDescription: String!, salary: Int): JobListings
        removeJobListings(jobListingsid: ID!): JobListings


    }
`;


module.exports = typeDefs;
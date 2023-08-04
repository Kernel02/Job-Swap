const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type ApplicantUser {
        _id: ID!
        username: String!
        email: String!
        password: String!
        description: String
        isBusinessUser: Boolean!
        jobListings: [JobListings]
    }


    // type BusinessUser {
    //     _id: ID!
    //     name: String!
    //     email: String!
    //     password: String!
    //     description: String!
    //     jobListings: [JobListings]
    // }

    type JobListings {
        _id: ID!
        jobTitle: String!
        jobDescription: String!
        salary: Int
        // businessUser: [BusinessUser]
    }

    type Auth {
        token: ID!
        applicantUser: ApplicantUser
        // businessUser: BusinessUser
      }
    


    type Query {
        applicantUser: [ApplicantUser]
        // businessUser: [BusinessUser]
        jobListings: [JobListings]
    }

    type Mutation {

        logIn(email: String!, password: String!): Auth


        addApplicantUser(username: String!, email: String!, password: String!, description: String, isBusinessUser: Boolean!, jobListings: String): ApplicantUser
        removeApplicantUser(applicantUserid: ID!): ApplicantUser

        // addBusinessUser(name: String!, email: String!, password: String!, description: String!, jobListings: String): BusinessUser
        // removeBusinessUser(businessUserid: ID!): BusinessUser

        addJobListings(jobTitle: String!, jobDescription: String!, salary: Int): JobListings
        removeJobListings(jobListingsid: ID!): JobListings


    }
`;


module.exports = typeDefs;
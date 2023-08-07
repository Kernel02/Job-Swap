import { gql } from "@apollo/client";

export const QUERY_JOBLISTINGS = gql`
  query JobListings {
    jobListings {
      _id
      jobDescription
      jobTitle
      salary
    }
  }
`;

export const QUERY_APPLICANTUSER = gql`
  query ApplicantUser {
    applicantUser {
      _id
      email
      username
      jobListings {
        jobDescription
        jobTitle
        salary
      }
    }
  }
`;

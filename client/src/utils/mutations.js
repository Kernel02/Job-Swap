import { gql } from "@apollo/client";

export const CREATE_JOBLISTING = gql`
  mutation createMatchup(
    $jobTitle: String!
    $jobDescription: String!
    $salary: Number!
  ) {
    createJobListing(
      jobTitle: $jobTitle
      jobDescription: $jobDescription
      salary: $salary
    ) {
      _id
      jobTitle
      jobDescription
      salary
    }
  }
`;

export const CREATE_USER = gql`
  mutation createVote($username: String!, $email, String!, $password) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

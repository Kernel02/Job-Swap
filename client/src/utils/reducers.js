import { ADD_APPLICANTUSER, ADD_JOBLISTING } from "./actions";

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_APPLICANTUSER: {
      const newApplicantUser = { ...action.payload };

      return {
        ...state,
        users: [...state.users, newApplicantUser],
      };
    }
    case ADD_JOBLISTING: {
      const newJobListing = { ...action.payload };

      return {
        ...state,
        jobs: [...state.jobListings, newJobListing],
      };
    }
    default: {
      return state;
    }
  }
}

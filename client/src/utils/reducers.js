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

      const userIndex = state.users.findIndex(
        (user) => user.id === action.payload
      );
      const updatedUser = { ...state.users[userIndex] };

      const userCopy = [...state.users];
      userCopy[userIndex] = updatedUser;

      return {
        ...state,
        users: userCopy,
        jobs: [...state.users, newJobListing],
      };
    }
    default: {
      return state;
    }
  }
}

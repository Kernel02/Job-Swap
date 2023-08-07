import React, { useState, useReducer } from "react";
import reducer from "../utils/reducers";
import { useUser } from "../utils/UserContext";
import { ADD_JOBLISTING } from "../utils/actions";
import { useJobListing } from "../utils/JobListingContext";

export default function JobFormComponent(props) {
  const initialState = useJobListing();
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  const [newJobTitle, setNewJobTitle] = useState("");
  const [newJobDescription, setNewJobDescription] = useState("");
  const [newJobSalary, setNewJobSalary] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_JOBLISTING,
      payload: {
        jobTitle: newJobTitle,
        jobDescription: newJobDescription,
        Salary: newJobSalary,
      },
    });
  };

  return (
    <div className="col s12 m4 l3 white">
      <div className="row">
        <form className="col s12">
          <h1>Add Job Listing</h1>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="jobTitle"
                type="text"
                className="validate"
                defaultValue={newJobTitle}
                onChange={(event) => setNewJobTitle(event.target.value)}
              />
              <label htmlFor="jobTitle">Job Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="description"
                type="text"
                className="validate"
                defaultValue={newJobDescription}
                onChange={(event) => setNewJobDescription(event.target.value)}
              />
              <label htmlFor="description">Description</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="salary"
                type="text"
                className="validate"
                defaultValue={newJobSalary}
                onChange={(event) => setNewJobSalary(event.target.value)}
              />
              <label htmlFor="salary">Salary</label>
            </div>
          </div>
          <button
            onClick={handleFormSubmit}
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
}

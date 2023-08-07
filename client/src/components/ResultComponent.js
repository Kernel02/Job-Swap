import { useQuery, useMutation } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { QUERY_JOBLISTINGS } from "../utils/queries";

export default function ResultComponent() {
  const { loading, data } = useQuery(QUERY_JOBLISTINGS);

  console.log(data, loading);

  const jobListings = data?.jobListings || [];
  console.log(jobListings);

  return (
    <div className="col s12 m8 l9 grey">
      <h1>Results</h1>
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          {jobListings.map((job) => {
            return (
              <div className="row">
                <div className="col s12 m6">
                  <div className="card black white-text">
                    <div className="card-content white-text">
                      <span className="card-title">{job.jobTitle}</span>
                      <p>{job.jobDescription}</p>
                      <p>Salary: {job.salary}</p>
                    </div>
                    <div className="card-action">
                      <a href="#">Apply now?</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

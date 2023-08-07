import React, { useState } from "react";

export default function SearchComponent(props) {
  const [input, setInput] = useState("");
  let [eagerness, setEagerness] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      text: input,
      eagerness: eagerness,
    });

    setInput("");
    setEagerness("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="col s12 m4 l3 white">
      <h1>Search Here</h1>
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input id="jobTitle" type="text" className="validate" />
              <label htmlFor="jobTitle">Job Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">attach_money</i>
              <input id="salary" type="number" className="validate" />
              <label htmlFor="salary">Salary</label>
            </div>
          </div>
            <button
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

<div className="file-field input-field col s12">
  <div className="btn">
    <span>Resume</span>
    <input type="file" />
  </div>
  <div className="file-path-wrapper">
    <input className="file-path validate" type="text" />
  </div>
</div>;

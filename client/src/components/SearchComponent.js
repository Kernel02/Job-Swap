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
    <div class="col s12 m4 l3 white">
      <h1>Search Here</h1>
      <div class="row">
        <form class="col s12" onSubmit={handleSubmit}>
          <div class="row">
            <div class="input-field col s12">
              <input id="jobTitle" type="text" class="validate" />
              <label for="jobTitle">Job Title</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">attach_money</i>
              <input id="salary" type="number" class="validate" />
              <label for="salary">Salary</label>
            </div>
          </div>
          <form action="#">
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i class="material-icons right">send</i>
            </button>
          </form>
        </form>
      </div>
    </div>
  );
}

<div class="file-field input-field col s12">
  <div class="btn">
    <span>Resume</span>
    <input type="file" />
  </div>
  <div class="file-path-wrapper">
    <input class="file-path validate" type="text" />
  </div>
</div>;

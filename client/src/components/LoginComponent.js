import React, { useState, useReducer } from "react";
import reducer from "../utils/reducers";
import { useUser } from "../utils/UserContext";
import { ADD_APPLICANTUSER } from "../utils/actions";

export default function LoginComponent(props) {
  // const [input, setInput] = useState("");
  // let [eagerness, setEagerness] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   props.onSubmit({
  //     text: input,
  //     eagerness: eagerness,
  //   });

  //   setInput("");
  //   setEagerness("");
  // };

  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };

  const initialState = useUser();
  const [state, dispatch] = useReducer(reducer, initialState);

  const [newUserUsername, setNewUserUsername] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");

  return (
    <div class="col s12 m4 l3 white">
      <div class="row">
        <form class="col s12">
          <h1>Login</h1>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="username"
                type="text"
                class="validate"
                defaultValue={newUserUsername}
                onChange={(event) => setNewUserUsername(event.target.value)}
              />
              <label for="username">Username</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="email"
                type="email"
                class="validate"
                defaultValue={newUserEmail}
                onChange={(event) => setNewUserEmail(event.target.value)}
              />
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="password"
                type="password"
                class="validate"
                defaultValue={newUserPassword}
                onChange={(event) => setNewUserPassword(event.target.value)}
              />
              <label for="password">Password</label>
            </div>
          </div>
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </form>
        <form class="col s12">
          <h1>Sign Up</h1>
          <div class="row">
            <div class="input-field col s12">
              <input id="username" type="text" class="validate" />
              <label for="username">Username</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <button
            onClick={() =>
              dispatch({
                type: ADD_APPLICANTUSER,
                payload: {
                  username: newUserUsername,
                  email: newUserEmail,
                  password: newUserPassword,
                },
              })
            }
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
}

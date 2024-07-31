import React from "react";
import user from "../data/user";
import Links from "./Links";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links/>
      <p>{user.bio}</p>
      <p></p>
    </div>
  );
}

export default About;
